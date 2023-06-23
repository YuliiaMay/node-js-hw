const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');


const contactSchema = new Schema({
    // owner: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'user',
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

// contactSchema.post("save", handleMongooseError);


const Contact = model("contact", contactSchema);

module.exports = Contact;