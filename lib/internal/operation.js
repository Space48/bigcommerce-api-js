"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvePath = void 0;
function resolvePath(parameterizedPath, pathParams) {
    return parameterizedPath
        .split("/")
        .map(el => {
        const match = el.match(/^\{(.+)\}$/);
        if (!match) {
            return el;
        }
        const paramName = match[1];
        const param = pathParams[paramName];
        if (param === null || param === undefined || param === '') {
            throw new Error(`Path param ${paramName} must be specified.`);
        }
        // todo: consider whether we need some form of URL encoding of `param`
        return param;
    })
        .join('/');
}
exports.resolvePath = resolvePath;
