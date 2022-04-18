"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const loginRoute = (0, express_1.Router)();
loginRoute.post('/', userController_1.default.validate, userController_1.default.create);
loginRoute.get('/', userController_1.default.login);
exports.default = loginRoute;
//# sourceMappingURL=userRoutes.js.map