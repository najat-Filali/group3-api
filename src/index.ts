import * as dotenv from "dotenv"
import * as express from "express"
import * as cors from 'cors'
// read .env file before everything else
dotenv.config()

// import my services afterwards
import { Config, DB } from "./services"
import { UserRepository } from "./repositories/user.repository"

const app = express();
app.use(cors());


app.get('/', (req: any, res: any) => {
    res.send({ message: "Ok Group 3 with cors ! " })
})

app.get('/users', (req: any, res: any) => {
    const limit = req.query.limit

    res.send([])
    UserRepository.getUsers(limit)
        .then((users: any) => {
            res.send(users)
        }).catch(e => {
            res.send(500, { error: e.toString() })
        })
})

//app.get('/status', (req, res) => {
//    res.json(
//      {
//        message: 'Service is online !'
//      }
//    )
//  })

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})