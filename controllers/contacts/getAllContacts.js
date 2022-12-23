const { Contact } = require("../../models");

const getAllContacts = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find(
    { owner: _id },
    "name,email,phone,favorite,owner",
    { skip, limit: Number(limit) }
  );
  res.status(200).json({ contacts });
};

module.exports = getAllContacts;
