const { ctrlWrapper, HttpError, sendEmail } = require("../../helpers");
const { User } = require("../../models");
const bcrypt = require('bcrypt')
const gravatar = require("gravatar");
const { v4: uuid } = require('uuid');

const { BASE_URL } = process.env;


const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if (user) throw HttpError(409, `Email '${email}' in use`);
    
    const hashedPasword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const verificationToken = uuid();
    

    const result = await User.create({
        ...req.body,
        password: hashedPasword,
        avatarURL,
        verificationToken
    });
    
    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click in order to verify email</a>`
    };

    await sendEmail(verifyEmail);


    res.status(201).json({
        message: "Created new user",
        user: {
            email: result.email,
            subscription: result.subscription,
        }
    });
};

module.exports = {
    register: ctrlWrapper(register)
};