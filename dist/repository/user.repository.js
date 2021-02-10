"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const User_1 = require("../model/User");
const services_1 = require("../services");
class UserRepositoryService {
    getUsers(limit = 10, offset = 0) {
        const queryString = `SELECT id, name, email FROM users LIMIT ${limit} OFFSET ${offset}`;
        return new Promise((resolve, reject) => {
            services_1.DB.query(queryString)
                .then((results) => {
                resolve(results.map(row => new User_1.User(row)));
            }).catch(e => {
                reject(e);
            });
        });
    }
}
exports.UserRepository = new UserRepositoryService();
