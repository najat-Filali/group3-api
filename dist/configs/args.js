"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Args = void 0;
class ArgsSingleton {
    constructor() {
        this.args = {};
        this.COLOR = {
            RED: '\x1b[31m',
            RESET: '\x1b[0m',
        };
        this.args = this.parse(process.argv.slice(2));
    }
    all() {
        return this.args;
    }
    get(key, defaultValue = null) {
        return this.exists(key) ? this.args[key] : defaultValue;
    }
    exists(key) {
        return typeof (this.args[key]) === 'undefined' ? false : true;
    }
    required(key, allowed = []) {
        if (this.isNull(key) || this.isEmpty(key)) {
            console.log(this.COLOR.RED + '\Argument --' + key + ' is required' + this.COLOR.RESET);
            process.exit(0);
        }
        if (allowed.length > 0 && allowed.indexOf(this.get(key)) === -1) {
            console.log(this.COLOR.RED + '\Argument value "' + this.get(key) + '" for --' + key + ' is not allowed' + this.COLOR.RESET);
            console.log(this.COLOR.RED + '\Allowed values are "' + allowed.join('|') + '"' + this.COLOR.RESET);
            process.exit(0);
        }
        return this;
    }
    isNull(key) {
        return (!this.exists(key) || this.get(key) === null) ? true : false;
    }
    isEmpty(key) {
        return (!this.exists(key) || this.get(key) === '') ? true : false;
    }
    parse(processArgv) {
        let list = {};
        for (let argv of processArgv) {
            let exp = argv.split('='), key = exp[0].replace('--', ''), val = exp[1];
            list[key] = val;
        }
        return list;
    }
}
exports.Args = new ArgsSingleton();
