const { ctrlWrapper } = require("../../helpers");
const { User } = require("../../models");

// const { User } = require("../../models");


const register = async (req, res) => {
    const newUser = await User.create(req.body);
        
    res.status(201).json(newUser);
    // {
    //     email: newUser.email,
    //     password: newUser.password
    // }

};

module.exports = {
    register: ctrlWrapper(register)
};