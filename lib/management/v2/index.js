"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const operation_1 = require("../../internal/operation");
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const query_string_1 = require("query-string");
class Client {
    constructor(config) {
        this.config = config;
        this.headers = {
            Accept: "application/json",
            "X-Auth-Token": this.config.accessToken,
        };
    }
    async send(requestLine, params) {
        var _a, _b;
        const [method, paramaterizedPath] = requestLine.split(" ", 2);
        const path = operation_1.resolvePath(paramaterizedPath, (_a = params === null || params === void 0 ? void 0 : params.path) !== null && _a !== void 0 ? _a : {});
        const queryParams = query_string_1.stringify((_b = params === null || params === void 0 ? void 0 : params.query) !== null && _b !== void 0 ? _b : {}, { arrayFormat: "comma" });
        const queryString = queryParams.length ? `?${queryParams}` : "";
        const res = await cross_fetch_1.default(`https://api.bigcommerce.com/stores/${this.config.storeHash}/v2${path}${queryString}`, {
            method,
            headers: {
                ...this.headers,
                'Content-Type': (params === null || params === void 0 ? void 0 : params.body) && 'application/json',
            },
            agent: this.config.agent,
            body: (params === null || params === void 0 ? void 0 : params.body) && JSON.stringify(params.body),
        });
        const body = await res.text();
        return {
            status: res.status,
            body: body && JSON.parse(body),
        };
    }
    async delete(path, params) {
        const res = await this.send(`DELETE ${path}`, params);
        this.checkResponseStatus(`DELETE ${path}`, res);
        return res.body;
    }
    async get(path, params) {
        const res = await this.send(`GET ${path}`, params);
        if (res.status === 204 || res.status === 404) {
            return null;
        }
        this.checkResponseStatus(`GET ${path}`, res);
        return res.body;
    }
    async post(path, params) {
        const res = await this.send(`POST ${path}`, params);
        this.checkResponseStatus(`POST ${path}`, res);
        return res.body;
    }
    async put(path, params) {
        const res = await this.send(`PUT ${path}`, params);
        this.checkResponseStatus(`PUT ${path}`, res);
        return res.body;
    }
    checkResponseStatus(requestLine, response) {
        if (response.status > 299) {
            throw new Error(`ERROR DURING ${requestLine}: ${response.status} - ${JSON.stringify(response.body)}`);
        }
    }
}
exports.Client = Client;
