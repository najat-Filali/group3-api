"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
// import my services afterwards
//import { Config, DB } from "./services"
//import { UserRepository } from "./repository/user.repository"
dotenv.config();
const app = express();
app.get('/', (req, res) => {
    res.send({ message: "Ok" });
});
app.get('/users', (req, res) => {
    //const limit = req.query.limit
    res.send([]);
    //UserRepository.getUsers(limit)
    //    .then((users: any) => {
    //        res.send(users)
    //    }).catch(e => {
    //        // logs?
    //        res.send(500, { error: e.toString() })
    //    })
});
app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});
