"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCriptPassword = void 0;
const bcryptjs_1 = require("bcryptjs");
const generateCriptPassword = (password) => {
    const saltRounds = 10;
    const salt = (0, bcryptjs_1.genSaltSync)(saltRounds);
    const hash = (0, bcryptjs_1.hashSync)(password, salt);
    return hash;
};
exports.generateCriptPassword = generateCriptPassword;
//# sourceMappingURL=bcryptFunctions.js.map