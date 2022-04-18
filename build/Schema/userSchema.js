"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const userSchema = Joi.object().keys({
    username: Joi.string().min(8).required(),
    email: Joi.string().required().email().required(),
    password: Joi.string().min(6).required(),
});
exports.default = userSchema;
//# sourceMappingURL=userSchema.js.map