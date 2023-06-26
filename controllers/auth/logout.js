const { ctrlWrapper, } = require("../../helpers");
const { User } = require("../../models");

const logout = async (req, res) => {
    const { _id } = req.user;
    console.log(_id);
    await User.findByIdAndUpdate(_id, {token: ""});

    res.status(200).json({
        message: "Logout success"
    })
};

module.exports = {
    logout: ctrlWrapper(logout),
};