"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const operation_1 = require("../../internal/operation");
class Client {
    constructor(configOrTransport) {
        this.transport =
            typeof configOrTransport === 'function'
                ? configOrTransport
                : operation_1.fetchTransport({
                    agent: configOrTransport.agent,
                    baseUrl: `https://api.bigcommerce.com/stores/${configOrTransport.storeHash}/v2`,
                    headers: { "X-Auth-Token": configOrTransport.accessToken },
                });
    }
    async send(requestLine, params) {
        return this.transport(requestLine, params);
    }
    async delete(path, params) {
        const res = await this.send(`DELETE ${path}`, params);
        if (res.status === 204) {
            return null;
        }
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
