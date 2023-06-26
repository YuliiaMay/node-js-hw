const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleMongooseError } = require('../helpers');


const contactSchema = new Schema({
    // owner: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'user',
    //     required: true
    // },
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
});

contactSchema.post('save', handleMongooseError);

const Contact = model("contact", contactSchema);


const addSchema = Joi.object({
    // owner: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite:  Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required()
});

const contactSchemas = {
    addSchema,
    updateFavoriteSchema
};


module.exports = {
    Contact,
    contactSchemas
};