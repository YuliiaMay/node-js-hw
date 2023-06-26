const { Contact } = require('../../models');
const { ctrlWrapper } = require('../../helpers');

const getAll = async (req, res) => {
    const { _id: owner } = req.user;

    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    console.log(skip);

    const result = await Contact.find({ owner }, "-createdAt -updatedAt", { skip, limit });
    
    res.json(result);
};

module.exports = {
    getAll: ctrlWrapper(getAll),
};