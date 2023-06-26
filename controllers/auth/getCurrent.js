const { ctrlWrapper, HttpError } = require("../../helpers");

const getCurrent = async (req, res) => {
    const { email, subscription } = req.user;
    if (!email) throw HttpError(401, "Not authorized");
    console.log(req.user);
    res.status(200).json({
        user: {
            email: email,
            subscription: subscription            
        }
    })
};

module.exports = {
    getCurrent: ctrlWrapper(getCurrent)
};