"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.V3 = exports.V2 = void 0;
const V2 = __importStar(require("./v2"));
const V3 = __importStar(require("./v3"));
exports.V2 = __importStar(require("./v2"));
exports.V3 = __importStar(require("./v3"));
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
class Client {
    constructor(config) {
        this.config = config;
        this.v2 = new V2.Client(this.config);
        this.v3 = new V3.Client(this.config);
    }
}
exports.Client = Client;
