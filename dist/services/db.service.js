"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
//import * as mysql from "mysql"
class DBService {
    constructor() {
        //this.$con = mysql.createConnection({
        //    host: process.env.DB_HOST,
        //    user: process.env.DB_USER,
        //    password: process.env.DB_PASSWORD,
        //    database: process.env.DB_NAME,
        //})
        //this.$con.connect()
    }
    query(queryString) {
        return Promise.resolve([]);
        //return new Promise((resolve, reject) => {
        //    this.$con.query(queryString, (error, results, fields) => {
        //        if (error) {
        //            reject(error)
        //        } else {
        //            resolve(results)
        //        }
        //    })
        //})
    }
}
exports.DB = new DBService();
