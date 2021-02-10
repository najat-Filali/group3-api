"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepositoryService {
    getUsers(limit = 10, offset = 0) {
        const queryString = `SELECT id, name, email FROM users LIMIT ${limit} OFFSET ${offset}`;
        return new Promise((resolve, reject) => {
            /* DB.query(queryString)
                 .then((results: Array<any>) => {
                     resolve(results.map(row => new User(row)))
                 }).catch(e => {
                     reject(e)
                 })*/
        });
    }
}
exports.UserRepository = new UserRepositoryService();
