const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = new Schema({
    password: {
        type: String,
        required: [true, 'Set password for user'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token: String
});

const User = model('user', userSchema);


const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const userSchemas = {
    registerSchema,
    loginSchema,
}

module.exports = {
    User,
    userSchemas
}