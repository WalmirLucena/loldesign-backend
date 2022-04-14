import {expect } from "chai";
import * as Sinon from "sinon";
import { createData, loginData, responseLogin, userMock, wrongUser} from "../../mocks/userMock";
import User from "../../../models/user";
import UserService from "../../../services/userService";
import {ILogin} from "../../../interfaces/userInterface";

describe("User Service", () => {

    describe('create with correct data', () => {
        before(() => {
            Sinon.stub(UserService, "create").resolves(responseLogin as any);
        });

        after(() => {
            Sinon.restore();
        })

        it("return a new user", async () => {
            const user = await UserService.create(createData);
            expect(user).to.be.deep.equal(responseLogin);
        })

       
    })

    describe('login with correct data', () => {
        before(() => {
            Sinon.stub(UserService, "login").resolves(responseLogin as any);
        });

        after(() => {
            Sinon.restore();
        })

        it("return an user from DB", async () => {
            const data: ILogin = loginData
            const user = await UserService.login(data);
            expect(user).to.be.deep.equal(responseLogin);
        })
    })

    describe('login with wrong data', () => {
        before(() => {
            Sinon.stub(UserService, "login").resolves(false);
        });

        after(() => {
            Sinon.restore();
        })

        it("return null from DB", async () => {
            const data: ILogin = loginData
            const user = await UserService.login(data);
            expect(user).to.be.deep.equal(false);
        })
    })
})
