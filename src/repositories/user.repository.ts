import { DB } from "../services"
import { User } from "../model/User"

class UserRepositoryService 
{
    getUsers(limit: number = 10, offset: number = 0): Promise<Array<User>>
    {
        const queryString = `SELECT id, name, email FROM users LIMIT ${limit} OFFSET ${offset}`
        
        return new Promise((resolve, reject) => {

            DB.query(queryString)
                .then((results: Array<any>) => {
                    resolve(results.map(row => new User(row)))
                }).catch(e => {
                    reject(e)
                })

        })
    }
}

export const UserRepository = new UserRepositoryService()
