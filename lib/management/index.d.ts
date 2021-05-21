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
export declare class Client {
    private readonly config;
    constructor(config: Config);
    readonly v2: V2.Client;
    readonly v3: V3.Client;
}
