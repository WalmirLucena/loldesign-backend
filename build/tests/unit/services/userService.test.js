"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Sinon = require("sinon");
const userMock_1 = require("../../mocks/userMock");
const userService_1 = require("../../../services/userService");
describe("User Service", () => {
    describe('create with correct data', () => {
        before(() => {
            Sinon.stub(userService_1.default, "create").resolves(userMock_1.responseLogin);
        });
        after(() => {
            Sinon.restore();
        });
        it("return a new user", () => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield userService_1.default.create(userMock_1.createData);
            (0, chai_1.expect)(user).to.be.deep.equal(userMock_1.responseLogin);
        }));
    });
    describe('login with correct data', () => {
        before(() => {
            Sinon.stub(userService_1.default, "login").resolves(userMock_1.responseLogin);
        });
        after(() => {
            Sinon.restore();
        });
        it("return an user from DB", () => __awaiter(void 0, void 0, void 0, function* () {
            const data = userMock_1.loginData;
            const user = yield userService_1.default.login(data);
            (0, chai_1.expect)(user).to.be.deep.equal(userMock_1.responseLogin);
        }));
    });
    describe('login with wrong data', () => {
        before(() => {
            Sinon.stub(userService_1.default, "login").resolves(false);
        });
        after(() => {
            Sinon.restore();
        });
        it("return null from DB", () => __awaiter(void 0, void 0, void 0, function* () {
            const data = userMock_1.loginData;
            const user = yield userService_1.default.login(data);
            (0, chai_1.expect)(user).to.be.deep.equal(false);
        }));
    });
});
//# sourceMappingURL=userService.test.js.map