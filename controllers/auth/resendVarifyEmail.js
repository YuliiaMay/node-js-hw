const { HttpError, sendEmail, ctrlWrapper } = require("../../helpers");
const { User } = require("../../models");

const resendVarifyEmail = async (req, res) => {
    const { BASE_URL } = process.env;
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        throw HttpError(400);
    };

    if (user.verify) {
        throw HttpError(400, "Verification has already been passed")
    };

    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click verify</a>`,
    };

    await sendEmail(verifyEmail);

    res.status(200).json({
        message: "Verify email send"
    });
};

module.exports = {
    resendVarifyEmail: ctrlWrapper(resendVarifyEmail)
}