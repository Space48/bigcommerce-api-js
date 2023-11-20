import * as V2 from "./v2";
import * as V3 from "./v3";
export * as V2 from "./v2";
export * as V3 from "./v3";
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
export class Client {
    constructor(config) {
        this.config = config;
        this.v2 = new V2.Client(this.config);
        this.v3 = new V3.Client(this.config);
    }
}
