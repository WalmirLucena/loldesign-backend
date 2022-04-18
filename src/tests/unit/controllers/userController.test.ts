import {expect } from "chai";
import * as Sinon from "sinon";
import { createData, loginData, responseLogin} from "../../mocks/userMock";
import { Request, Response } from 'express';
import UserController from "../../../controllers/userController";

describe("User Controller", () => {

    describe('create with correct data', () => {
        const req = {} as Request;
        const res = {} as Response;
        before(() => {
            res.status = Sinon.stub().returns(res);
            res.json = Sinon.stub().returns(responseLogin);
            Sinon.stub(UserController, 'create').resolves(responseLogin as any);
        });

        after(() => {
            Sinon.restore();
        })

        it("return status 201", async () => {
            req.body = createData
            const user = await UserController.create(req,res);
            expect(user).to.be.deep.equal(responseLogin);
        })

       
    })

    describe('login with correct data', () => {
        const req = {} as Request;
        const res = {} as Response;
        before(() => {
            res.status = Sinon.stub().returns(res);
            res.json = Sinon.stub().returns(responseLogin);
            Sinon.stub(UserController, 'login').resolves(responseLogin as any);
        });

        after(() => {
            Sinon.restore();
        })

        it("return an user from DB", async () => {
            req.body = loginData
            const user = await UserController.login(req,res);
            expect(user).to.be.deep.equal(responseLogin);
        })
    })
})
