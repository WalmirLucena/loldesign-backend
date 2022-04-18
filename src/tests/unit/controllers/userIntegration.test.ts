import * as chai from "chai"; 
import {expect } from "chai";
import * as Sinon from "sinon";
import chaiHttp = require('chai-http');
import User from "../../../models/user";
import { createData, responseLogin, userMock } from "../../mocks/userMock";
import { App } from "../../../app";

chai.use(chaiHttp);

const app = new App();
const server = app.getApp();

describe('UserModel', ()=> {
    describe('create', ()=> {
        before(()=> Sinon.stub(User, "create")
        .resolves(userMock as any))
    })

    after(()=> Sinon.restore());

    it('should return status 201 and a new user', async () => {
        const chaiHttpResponse = await chai.request(server).post('/login/create').send(createData);
        expect(chaiHttpResponse).to.have.status(201);
        expect(chaiHttpResponse.body).to.be.deep.eq(responseLogin);
      });

    });