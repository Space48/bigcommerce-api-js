import { fetchTransport } from "../../internal/operation";
export class Client {
    constructor(configOrTransport) {
        this.transport =
            typeof configOrTransport === 'function'
                ? configOrTransport
                : fetchTransport({
                    headers: { "X-Auth-Token": configOrTransport.accessToken, ...(configOrTransport.customHeaders || {}) },
                    baseUrl: `https://api.bigcommerce.com/stores/${configOrTransport.storeHash}/v3`,
                    agent: configOrTransport.agent,
                });
    }
    send(requestLine, params) {
        return this.transport(requestLine, params);
    }
    async get(path, params) {
        const res = await this.send(`GET ${path}`, params);
        if (res.status === 204 || res.status === 404) {
            return null;
        }
        this.checkResponseStatus(`GET ${path}`, res);
        return res.body.data;
    }
    async *list(path, params) {
        const MAX_PAGES = Number.MAX_SAFE_INTEGER;
        for (let page = 1; page < MAX_PAGES; page++) {
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
        if (res.status === 204) {
            return null;
        }
        return res.body.data;
    }
    checkResponseStatus(requestLine, response) {
        if (response.status > 299) {
            throw new Error(`ERROR DURING ${requestLine}: ${response.status} - ${JSON.stringify(response.body)}`);
        }
    }
}
