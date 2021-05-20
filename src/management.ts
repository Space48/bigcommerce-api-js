import { Agent } from "http";
import { Client as V2Client } from "./v2";
import { Client as V3Client } from "./v3";

export type Config = {
  readonly storeHash: string;
  readonly clientId: string;
  readonly accessToken: string;
  readonly agent?: Agent
};

export class Client {
  constructor(
    private readonly config: Config
  ) {}

  readonly v2 = new V2Client(this.config);
  readonly v3 = new V3Client(this.config);
}
