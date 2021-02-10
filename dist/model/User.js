"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(data) {
        this.id = null;
        this.name = null;
        this.email = null;
        if (data) {
            this.hydrate(data);
        }
    }
    hydrate(data) {
        for (let arg in data) {
            if (this.hasOwnProperty(arg)) {
                this[arg] = data[arg];
            }
        }
    }
}
exports.User = User;
