"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes_1 = require("./userRoutes");
const route = (0, express_1.Router)();
/* route.use('/', (req,res) => {
    res.status(200).json('ok');
}); */
route.use('/login', userRoutes_1.default);
exports.default = route;
//# sourceMappingURL=index.js.map