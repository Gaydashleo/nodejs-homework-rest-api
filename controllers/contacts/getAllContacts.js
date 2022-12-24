const { Contact } = require("../../models");

const getAllContacts = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 3, favorite } = req.query;
  const skip = (page - 1) * limit;

  if (favorite) {
    const filterContacts = await Contact.find(
      {
        owner: _id,
        favorite: true,
      },
      "name email phone favorite owner",
      { skip, limit: Number(limit) }
    );
    res.status(200).json({ filterContacts });
  }

  const contacts = await Contact.find(
    { owner: _id },
    "name email phone favorite owner",
    { skip, limit: Number(limit) }
  );
  res.status(200).json({ contacts });
};

module.exports = getAllContacts;
