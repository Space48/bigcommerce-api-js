const files = require('./files');
const escape = require('shell-escape');
const { exec } = require('child_process');
const tempDir = require('temp-dir');
const { name: packageName } = require('../../../package.json');
const { v4: uuidv4 } = require('uuid');
const { writeFile } = require('fs');
const { promisify } = require('util');
const rimraf = require('rimraf');

const execAsync = promisify(exec);
const writeFileAsync = promisify(writeFile);

async function main() {
  const sourceDir = process.argv[2] || 'https://raw.githubusercontent.com/Space48/api-specs/space48-fixes/reference' // '/Users/joshdifabio/projects/bigcommerce-api-specs/reference' // 'https://raw.githubusercontent.com/bigcommerce/api-specs/master/reference';
  const tempOutputDir = await makeTempDir();
  const outputDir = `${__dirname}/generated`;

  try {
    await generateTypeScript(sourceDir, tempOutputDir, files);
    await replaceDir(tempOutputDir, outputDir);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

async function makeTempDir() {
  const tempOutputDir = `${tempDir}/${packageName.split('/').slice(-1)[0]}-${uuidv4()}`;
  await execAsync(`mkdir ${escape([tempOutputDir])}`);
  return tempOutputDir;
}

async function generateTypeScript(sourceDir, outputDir, yamlFiles) {
  const modules = yamlFiles.map(yamlFilename => {
    const jsIdentifier = value => value.replace(/-/g, '_');
    const filenameParts = yamlFilename.split('.').slice(0, -1);
    const exportName = jsIdentifier(filenameParts[0]);
    const moduleName = jsIdentifier(filenameParts.join('.'));
    return {
      moduleName,
      groupName: filenameParts.length === 2 ? jsIdentifier(filenameParts.slice(-1)[0]) : null,
      yamlFilename,
      tsFilename: `${moduleName}.ts`,
      exportName,
      //importStatement: `import type * as ${exportName} from "./${moduleName}"`,
      /*
      typeDefinition: `
        ${exportName}: {
          paths: ${exportName}.paths
        }
      `,
      */
    };
  });

  await Promise.all(modules.map(async ({ yamlFilename, tsFilename }) => {
    const sourcePath = `${sourceDir}/${yamlFilename}`;
    const outputPath = `${outputDir}/${tsFilename}`;
    await execAsync(`npx openapi-typescript ${escape([sourcePath])} --immutable-types > ${escape([outputPath])}`);
  }));

  const exportGroups = [...new Set(modules.map(mod => mod.groupName))];

  await Promise.all(exportGroups.map(async groupName => {
    const fileContent = `
      import type { InferOperationIndex } from "../operation-inference";

      ${
        modules
          .filter(module => module.groupName === groupName)
          .map(({ moduleName, exportName }) => `import type * as ${exportName} from "./${moduleName}"`)
          .join("\n")
      }

      export type Operation =
        ${
          modules
            .filter(module => module.groupName === groupName)
            .map(({ groupName, exportName }) => `& InferOperationIndex<${exportName}.paths>`)
            .join("\n")
        }
      ;
    `
    await writeFileAsync(`${outputDir}/${groupName || 'misc'}.ts`, fileContent);
  }));

  return;

  const groupExports = exportGroups.map(groupName => `export { Resources as ${groupName} } from "./${groupName}"`);
  const otherExports = modules.filter(mod => mod.groupName === null).map(mod => mod.exportStatement)
  const indexExports = [...groupExports, ...otherExports];
  await writeFileAsync(`${outputDir}/index.ts`, indexExports.join("\n"));
}

async function replaceDir(source, destination) {
  await promisify(rimraf)(destination);
  await execAsync(`mv ${escape([source])} ${escape([destination])}`);
}

main();
