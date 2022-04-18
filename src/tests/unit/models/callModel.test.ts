import {expect } from "chai";
import * as Sinon from "sinon";
import Call from "../../../models/calls";
import { callMock, callBody, callMockList } from "../../mocks/callMock";

describe("Call Model", () => {

    describe('create with correct data', () => {
        before(() => {
            Sinon.stub(Call, "create").resolves(callMock as any);
        });

        after(() => {
            Sinon.restore();
        })

        it("return a new call", async () => {
            const user = await Call.create(callBody);
            expect(user).to.be.deep.equal(callMock);
        })

       
    })

    describe("FindaAll", ()=>{
        before(() => {
            Sinon.stub(Call, "findAll").resolves(callMockList as Call[]);
        });

        after(() => {
            Sinon.restore();
        })

        it("Return a list of Calls", async () => {
            const call = await Call.findAll()
            expect(call).to.be.equal(callMockList);
        })
    })

   
})
