"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
// read .env file before everything else
dotenv.config();
const user_repository_1 = require("./repositories/user.repository");
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send({ message: "Ok Group 3 with cors ! " });
});
app.get('/users', (req, res) => {
    const limit = req.query.limit;
    res.send([]);
    user_repository_1.UserRepository.getUsers(limit)
        .then((users) => {
        res.send(users);
    }).catch(e => {
        // logs?
        res.send(500, { error: e.toString() });
    });
});
app.get('/status', (req, res) => {
    res.json({
        message: 'Service is online !'
    });
});
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
