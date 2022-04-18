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
const user_1 = require("../models/user");
const calls_1 = require("../models/calls");
const calculatePrice_1 = require("../Utils/calculatePrice");
const userService_1 = require("./userService");
class CallService {
    static create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { origin, destiny, time, plan, name } = data;
            const { price, priceWithPlan } = (0, calculatePrice_1.calculatePrice)(data);
            const userId = yield userService_1.default.findByName(name);
            const call = yield calls_1.default.create({ userId: userId.id, origin, destiny, time, plan, price, priceWithPlan });
            const callFiltered = {
                userId: call.userId,
                origin,
                destiny,
                time,
                plan,
                price,
                priceWithPlan
            };
            return callFiltered;
        });
    }
    ;
    static read() {
        return __awaiter(this, void 0, void 0, function* () {
            const calls = yield calls_1.default.findAll({
                include: [
                    { model: user_1.default, as: 'users', attributes: ['username'] }
                ]
            });
            return calls;
        });
    }
    static getByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = yield userService_1.default.findByName(name);
            const call = yield calls_1.default.findAll({ where: {
                    userId: id
                } });
            return call;
        });
    }
    static delete(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield calls_1.default.destroy({ where: {
                    id
                } });
            const call = yield this.getByName(name);
            return call;
        });
    }
}
exports.default = CallService;
//# sourceMappingURL=callService.js.map