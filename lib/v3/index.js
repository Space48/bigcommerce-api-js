"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
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
        var _a;
        const [method, paramaterizedPath] = requestLine.split(" ", 2);
        const path = paramaterizedPath
            .split("/")
            .map(el => {
            var _a;
            const match = el.match(/^\{(.+)\}$/);
            if (!match) {
                return el;
            }
            const paramName = match[1];
            const param = (_a = params === null || params === void 0 ? void 0 : params.path) === null || _a === void 0 ? void 0 : _a[paramName];
            if (param === null || param === undefined || param === '') {
                throw new Error(`Path param ${paramName} must be specified.`);
            }
            // todo: consider whether we need some form of URL encoding of `param`
            return param;
        })
            .join('/');
        const queryParams = query_string_1.stringify((_a = params === null || params === void 0 ? void 0 : params.query) !== null && _a !== void 0 ? _a : {}, { arrayFormat: "comma" });
        const queryString = queryParams.length ? `?${queryParams}` : "";
        const res = await node_fetch_1.default(`https://api.bigcommerce.com/stores/${this.config.storeHash}/v3${path}${queryString}`, {
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
    async get(path, params) {
        const res = await this.send(`GET ${path}`, params);
        if (res.status === 404) {
            return null;
        }
        this.checkResponseStatus(`GET ${path}`, res);
        return res.body.data;
    }
    async *list(path, params) {
        const MAX_PAGES = Number.MAX_SAFE_INTEGER;
        for (let page = 0; page < MAX_PAGES; page++) {
            const res = await this.send(`GET ${path}`, { ...params, query: { ...params === null || params === void 0 ? void 0 : params.query, page } });
            this.checkResponseStatus(`GET ${path}`, res);
            const items = res.body.data;
            if (!(items === null || items === void 0 ? void 0 : items.length)) {
                break;
            }
            yield* res.body.data;
        }
    }
    async post(path, params) {
        const res = await this.send(`POST ${path}`, params);
        this.checkResponseStatus(`POST ${path}`, res);
        return res.body.data;
    }
    async put(path, params) {
        const res = await this.send(`PUT ${path}`, params);
        this.checkResponseStatus(`PUT ${path}`, res);
        return res.body.data;
    }
    async delete(path, params) {
        const res = await this.send(`DELETE ${path}`, params);
        this.checkResponseStatus(`DELETE ${path}`, res);
        return res.body.data;
    }
    checkResponseStatus(requestLine, response) {
        if (response.status > 299) {
            throw new Error(`ERROR DURING ${requestLine}: ${response.status} - ${response.body}`);
        }
    }
}
exports.Client = Client;
