"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const callController_1 = require("../controllers/callController");
const callRoute = (0, express_1.Router)();
callRoute.post('/', callController_1.default.create);
callRoute.get('/', callController_1.default.read);
callRoute.delete('/', callController_1.default.delete);
callRoute.get('/name', callController_1.default.getByName);
exports.default = callRoute;
//# sourceMappingURL=callRoutes.js.map