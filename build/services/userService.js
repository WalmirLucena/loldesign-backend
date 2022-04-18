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
const bcryptjs_1 = require("bcryptjs");
const userSchema_1 = require("../Schema/userSchema");
const user_1 = require("../models/user");
const bcryptFunctions_1 = require("../Utils/bcryptFunctions");
class UserService {
    static login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = data;
            const user = yield user_1.default.findOne({ where: { email } });
            if (!user)
                return false;
            const passwordCheck = (0, bcryptjs_1.compareSync)(password, user.password);
            if (!passwordCheck)
                return false;
            const userFiltered = {
                id: user.id,
                username: user.username,
                email,
            };
            return userFiltered;
        });
    }
    ;
    static create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, username } = data;
            const securePassword = (0, bcryptFunctions_1.generateCriptPassword)(password);
            const newUser = yield user_1.default.create({ email, password: securePassword, username });
            return {
                id: newUser.id,
                email,
                username
            };
        });
    }
    static findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.findOne({ where: { username: name } });
            return { id: user === null || user === void 0 ? void 0 : user.id };
        });
    }
    static validate(userInfo) {
        return userSchema_1.default.validate(userInfo);
    }
}
exports.default = UserService;
//# sourceMappingURL=userService.js.map