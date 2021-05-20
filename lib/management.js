"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const v2_1 = require("./v2");
const v3_1 = require("./v3");
class Client {
    constructor(config) {
        this.config = config;
        this.v2 = new v2_1.Client(this.config);
        this.v3 = new v3_1.Client(this.config);
    }
}
exports.Client = Client;
