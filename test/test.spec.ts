
import * as chai from "chai"
import {User} from "../src/model/user"
const expect = chai.expect

const data = {
    id:5,
    name:"tom",
    email: "tom@test.fr"

}
const user = new User(data)

describe("My first test", () => {
    it("1 is equal to 1", () => {
        expect(1).to.equal(1)
    })
})

describe("Tests models ", () => {

    it("user model is valid", () => {
        expect(user.id).to.equal(5)
        expect(user.name).to.equal("tom")
        expect(user.email).to.equal("tom@test.fr")
    })
})