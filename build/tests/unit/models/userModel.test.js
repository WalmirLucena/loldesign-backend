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
const user_1 = require("../../../models/user");
describe("User Model", () => {
    describe('create with correct data', () => {
        before(() => {
            Sinon.stub(user_1.default, "create").resolves(userMock_1.userMock);
        });
        after(() => {
            Sinon.restore();
        });
        it("return a new user", () => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield user_1.default.create(userMock_1.userMock);
            (0, chai_1.expect)(user).to.be.deep.equal(userMock_1.userMock);
        }));
    });
    describe("Create with wrong data", () => {
        before(() => {
            Sinon.stub(user_1.default, "create").resolves(null);
        });
        after(() => {
            Sinon.restore();
        });
        it("Email and Password is not valid", () => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield user_1.default.create(userMock_1.wrongUser);
            (0, chai_1.expect)(user).to.be.equal(null);
        }));
    });
    describe('login with correct data', () => {
        before(() => {
            Sinon.stub(user_1.default, "findOne").resolves(userMock_1.userMock);
        });
        after(() => {
            Sinon.restore();
        });
        it("return an user from DB", () => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield user_1.default.findOne({ where: { email: userMock_1.userMock.email } });
            (0, chai_1.expect)(user).to.be.deep.equal(userMock_1.userMock);
        }));
    });
    describe('login with wrong data', () => {
        before(() => {
            Sinon.stub(user_1.default, "findOne").resolves(null);
        });
        after(() => {
            Sinon.restore();
        });
        it("return null from DB", () => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield user_1.default.findOne({ where: { email: userMock_1.wrongUser.email } });
            (0, chai_1.expect)(user).to.be.deep.equal(null);
        }));
    });
});
//# sourceMappingURL=userModel.test.js.map