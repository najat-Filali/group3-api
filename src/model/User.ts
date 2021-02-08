export class User {

    id: number = null
    name: string = null
    email: string = null

    constructor(data?: any){
        if(data){
            this.hydrate(data)
        }
    }

    private hydrate(data: any){
        
        for(let arg in data){
            if(this.hasOwnProperty(arg)){
                this[arg] = data[arg] 
            }
        }
    }
}