/// <reference types="node" />
import { Agent } from "http";
import { Client as V2Client } from "./v2";
import { Client as V3Client } from "./v3";
export declare type Config = {
    readonly storeHash: string;
    readonly clientId: string;
    readonly accessToken: string;
    readonly agent?: Agent;
};
export declare class Client {
    private readonly config;
    constructor(config: Config);
    readonly v2: V2Client;
    readonly v3: V3Client;
}
