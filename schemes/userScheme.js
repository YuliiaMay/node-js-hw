const Joi = require('joi');

const registerScheme = Joi.object({
    email: Joi.string()
        .email(({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }))
        .required(),
    password: Joi.string()
        .required(),
});

const loginScheme = Joi.object({
    email: Joi.string()
        .email(({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }))
        .required(),
    password: Joi.string()
        .required(),
});


module.exports = {
    registerScheme,
    loginScheme
};
