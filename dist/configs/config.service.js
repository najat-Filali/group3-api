"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const fullConfig = require("./config.json");
const localConfig = require("./config.local.json");
class ConfigService {
    init(env) {
        this.config = fullConfig[env];
        if (env === "local") {
            this.config = Object.assign(Object.assign({}, this.config), localConfig);
        }
    }
    all() {
        return this.config;
    }
    get(key) {
        return this.config[key];
    }
}
exports.Config = new ConfigService();
