import Joi = require("joi");

const userSchema = Joi.object().keys({
    username: Joi.string().min(8).required(),
    email: Joi.string().required().email().required(),
    password: Joi.string().min(6).required(),
})
export default userSchema;