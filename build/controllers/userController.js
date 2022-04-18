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
const userService_1 = require("../services/userService");
const StatusCode_1 = require("../Utils/StatusCode");
class UserController {
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield userService_1.default.login(req.body);
                if (!result) {
                    return res.status(StatusCode_1.default.UNAUTHORIZED).json({ message: 'Incorrect email or password' });
                }
                return res.status(StatusCode_1.default.OK).json(result);
            }
            catch (err) {
                return res.status(StatusCode_1.default.UNAUTHORIZED)
                    .json({ error: `${err}` });
            }
        });
    }
    ;
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield userService_1.default.create(req.body);
                return res.status(StatusCode_1.default.CREATED).json(newUser);
            }
            catch (err) {
                return res.status(StatusCode_1.default.UNAUTHORIZED)
                    .json({ error: `${err}` });
            }
        });
    }
    static validate(req, res, next) {
        const userInfo = req.body;
        const validation = userService_1.default.validate(userInfo);
        if (validation.error) {
            res.status(500).json({ message: validation.error.message });
        }
        return next();
    }
}
exports.default = UserController;
//# sourceMappingURL=userController.js.map