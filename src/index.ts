import * as dotenv from "dotenv"
import * as express from "express"
// import my services afterwards
//import { Config, DB } from "./services"
//import { UserRepository } from "./repository/user.repository"
dotenv.config()

const app = express()

app.get('/', (req: any, res: any) => {
    res.send({ message: "Ok" })
})

app.get('/users', (req: any, res: any) => {
    //const limit = req.query.limit
    res.send([])
    //UserRepository.getUsers(limit)
    //    .then((users: any) => {
    //        res.send(users)
    //    }).catch(e => {
    //        // logs?
    //        res.send(500, { error: e.toString() })
    //    })
})

app.listen(process.env.PORT, () => {
<<<<<<< HEAD
    console.log(`App listening on port ${process.env.PORT}`)
=======
    console.log(`Example app listening on port ${process.env.PORT}`)
>>>>>>> fc023e01d47be55cb31cdc3f226db59bf1bd1fd3
})