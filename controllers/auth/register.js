const { ctrlWrapper, HttpError } = require("../../helpers");
const { User } = require("../../models");
const bcrypt = require('bcrypt')
const gravatar = require("gravatar");

const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if (user) throw HttpError(409, `Email '${email}' in use`);

    const hashedPasword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const result = await User.create({...req.body, password: hashedPasword, avatarURL});
    
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