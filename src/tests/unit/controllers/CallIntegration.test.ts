import * as chai from "chai"; 
import {expect } from "chai";
import * as Sinon from "sinon";
import chaiHttp = require('chai-http');
import Call from "../../../models/calls";
import { callMock, callBody } from "../../mocks/callMock";
import { App } from "../../../app";

chai.use(chaiHttp);

const app = new App();
const server = app.getApp();

describe('CallModel', ()=> {
    describe('create', ()=> {
        before(()=> Sinon.stub(Call, "create")
        .resolves(callMock as Call))
    })

    after(()=> Sinon.restore());

    it('should return status 201 and a new user', async () => {
        const chaiHttpResponse = await chai.request(server).post('/calls').send(callBody);

        expect(chaiHttpResponse).to.have.status(201);
        expect(chaiHttpResponse.body).to.be.deep.eq(callMock);
      });

    });