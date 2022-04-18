import {expect } from "chai";
import * as Sinon from "sinon";
import { callMock, callBody} from "../../mocks/callMock";
import CallService from "../../../services/callService";

describe("Call Service", () => {

    describe('create with correct data', () => {
        before(() => {
            Sinon.stub(CallService, "create").resolves(callMock);
        });

        after(() => {
            Sinon.restore();
        })

        it("return a new call", async () => {
            const call = await CallService.create(callBody);
            expect(call).to.be.deep.equal(callMock);
        })

    describe('getById', () => {
        before(() => {
            Sinon.stub(CallService, "getById").resolves(callMock as any);
        });

        after(() => {
            Sinon.restore();
        })

        it("return the selected call", async () => {
            const call = await CallService.getById(1);
            expect(call).to.be.deep.equal(callMock);
        })

       
    })
})
})
