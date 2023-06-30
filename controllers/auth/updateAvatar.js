const path = require('path');
const { ctrlWrapper } = require("../../helpers");
const { User } = require('../../models');
const Jimp = require('jimp');



const updateAvatar = async (req, res) => {
    const { _id } = req.user;
    const { originalname } = req.file;

    const tmpDir = path.join(__dirname, "../../", "tmp", originalname);

    const newFileName = `${_id}_${originalname}`;
    const avatarsDir = path.join(__dirname, "../../", "public", "avatars");
    const resultUpload = path.join(avatarsDir, newFileName);

    const image = await Jimp.read(tmpDir);
    await image.resize(250, 250).writeAsync(resultUpload);
    
    const avatarURL = path.join("avatars", newFileName);
    await User.findByIdAndUpdate(_id, { avatarURL });

    res.json({
        avatarURL
    })
};

module.exports = {
    updateAvatar: ctrlWrapper(updateAvatar),
}