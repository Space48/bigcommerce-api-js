import { Agent } from "http";
import * as V2 from "./v2";
import * as V3 from "./v3";

export * as V2 from "./v2";
export * as V3 from "./v3";

export type Config = {
  readonly storeHash: string;
  readonly accessToken: string;
  readonly agent?: Agent
};

export class Client {
  constructor(
    private readonly config: Config
  ) {}

  readonly v2 = new V2.Client(this.config);
  readonly v3 = new V3.Client(this.config);
}
