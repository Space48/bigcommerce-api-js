"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTransport = exports.resolvePath = void 0;
const query_string_1 = require("query-string");
const https_1 = require("https");
const node_fetch_1 = __importDefault(require("node-fetch"));
function resolvePath(parameterizedPath, pathParams) {
    return parameterizedPath
        .split("/")
        .map(el => {
        const match = el.match(/^\{(.+)\}$/);
        if (!match) {
            return el;
        }
        const paramName = match[1];
        const param = pathParams[paramName];
        if (param === null || param === undefined || param === '') {
            throw new Error(`Path param ${paramName} must be specified.`);
        }
        return encodeURIComponent(param);
    })
        .join('/');
}
exports.resolvePath = resolvePath;
const defaultRetryConfig = {
    shouldRetry: (attemptNum, response) => {
        if (response.status === 429 && attemptNum < 50) {
            return true;
        }
        if (response.status >= 500 && response.status < 600 && attemptNum < 5) {
            return true;
        }
        return false;
    },
    backoffTime: numFailures => {
        const maxRandomization = 0.2;
        const randomization = 0.9 + Math.random() * maxRandomization;
        return numFailures * 500 * randomization;
    },
};
function fetchTransport(options) {
    const { agent, baseUrl, headers, retry, } = options;
    const _agent = agent || new https_1.Agent({ maxSockets: 10, keepAlive: true });
    const shouldRetry = retry === false ? () => false
        : retry === true || (retry === null || retry === void 0 ? void 0 : retry.shouldRetry) === undefined ? defaultRetryConfig.shouldRetry
            : retry.shouldRetry;
    const backoffTime = retry === false ? () => { throw new Error(); }
        : retry === true || (retry === null || retry === void 0 ? void 0 : retry.backoffTime) === undefined ? defaultRetryConfig.backoffTime
            : retry.backoffTime;
    const staticHeaders = {
        "Accept-Encoding": "gzip",
        "Accept": "application/json",
        ...headers,
    };
    return async (requestLine, params) => {
        var _a, _b;
        const [method, paramaterizedPath] = requestLine.split(" ", 2);
        const path = resolvePath(paramaterizedPath, (_a = params === null || params === void 0 ? void 0 : params.path) !== null && _a !== void 0 ? _a : {});
        const queryParams = (0, query_string_1.stringify)((_b = params === null || params === void 0 ? void 0 : params.query) !== null && _b !== void 0 ? _b : {}, { arrayFormat: "comma" });
        const queryString = queryParams.length ? `?${queryParams}` : "";
        const body = (params === null || params === void 0 ? void 0 : params.body) && JSON.stringify(params.body);
        const fetchFn = () => (0, node_fetch_1.default)(`${baseUrl}${path}${queryString}`, {
            method,
            headers: {
                'Content-Type': (params === null || params === void 0 ? void 0 : params.body) ? 'application/json' : undefined,
                ...staticHeaders,
                ...params === null || params === void 0 ? void 0 : params.header,
            },
            agent: _agent,
            body,
        });
        let response;
        for (let attemptNum = 1;; attemptNum++) {
            response = await fetchFn();
            if (!response.ok && shouldRetry(attemptNum, response, requestLine)) {
                await new Promise(resolve => setTimeout(() => resolve(), backoffTime(attemptNum, response, requestLine)));
            }
            else {
                break;
            }
        }
        const responseBody = await response.text();
        return {
            status: response.status,
            body: responseBody && JSON.parse(responseBody),
        };
    };
}
exports.fetchTransport = fetchTransport;
