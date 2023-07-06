const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");


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
    avatarURL: {
        type: String,
        required: true
    },
    verify: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        required: [true, 'Verify token is required'],
    },

});

userSchema.post('save', handleMongooseError)

const User = model('user', userSchema);


const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const emailSchema = Joi.object({
    email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const userSchemas = {
    registerSchema,
    loginSchema,
    emailSchema
}

module.exports = {
    User,
    userSchemas
}