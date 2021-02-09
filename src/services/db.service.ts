import * as mysql from "mysql"

class DBService {
    
    private $con: any
    
    constructor()
    {
        //console.log(process.env.DB_PASSWORD, process.env.DB_USER)
        this.$con = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        })

        this.$con.connect()
    }
    
    query(queryString: string): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.$con.query(queryString, (error, results, fields) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })
    }
}

export const DB = new DBService()