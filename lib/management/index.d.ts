/// <reference types="node" />
import { Agent } from "http";
import * as V2 from "./v2";
import * as V3 from "./v3";
export * as V2 from "./v2";
export * as V3 from "./v3";
export declare type Config = {
    readonly storeHash: string;
    readonly accessToken: string;
    readonly agent?: Agent;
};
/**
 * If you need to use a path which is not part if the spec, you can pass it
 * into the client via a type parameter to avoid TypeScript errors, e.g.:
 *
 *   type MyExtraEndpoints =
 *     | 'GET /v3/foo/bar'
 *     | 'POST /v3/foo/bar'
 *     | 'GET /v2/foo/baz'
 *   ;
 *
 *   bigCommerce = new Client<MyExtraEndpoints>(config)
 */
export declare class Client<CustomEndpoints extends string = never> {
    private readonly config;
    constructor(config: Config);
    readonly v2: V2.Client<ExtractSubpaths<"/v2", CustomEndpoints>>;
    readonly v3: V3.Client<ExtractSubpaths<"/v3", CustomEndpoints>>;
}
declare type ExtractSubpaths<Path extends string, AllCustomEndpoints extends string> = AllCustomEndpoints extends `${infer Method} ${Path}${infer Subpath}` ? `${Method} ${Subpath}` : never;
