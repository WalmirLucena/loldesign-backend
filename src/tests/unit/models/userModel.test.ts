import {expect } from "chai";
import * as Sinon from "sinon";
import { userMock, wrongUser} from "../../mocks/userMock";
import User from "../../../models/user";

describe("User Model", () => {

    describe('create with correct data', () => {
        before(() => {
            Sinon.stub(User, "create").resolves(userMock as any);
        });

        after(() => {
            Sinon.restore();
        })

        it("return a new user", async () => {
            const user = await User.create(userMock);
            expect(user).to.be.deep.equal(userMock);
        })

       
    })

    describe("Create with wrong data", ()=>{
        before(() => {
            Sinon.stub(User, "create").resolves(null as any);
        });

        after(() => {
            Sinon.restore();
        })

        it("Email and Password is not valid", async () => {
            const user = await User.create(wrongUser)
            expect(user).to.be.equal(null);
        })
    })

    describe('login with correct data', () => {
        before(() => {
            Sinon.stub(User, "findOne").resolves(userMock as any);
        });

        after(() => {
            Sinon.restore();
        })

        it("return an user from DB", async () => {
            const user = await User.findOne({where: {email: userMock.email}});
            expect(user).to.be.deep.equal(userMock);
        })
    })

    describe('login with wrong data', () => {
        before(() => {
            Sinon.stub(User, "findOne").resolves(null);
        });

        after(() => {
            Sinon.restore();
        })

        it("return null from DB", async () => {
            const user = await User.findOne({where: {email: wrongUser.email}});
            expect(user).to.be.deep.equal(null);
        })
    })
})
