const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const updateContactById = require("./updateContactById");
const removeContact = require("./removeContact");
const updateFavorite = require("./updateFavorite");

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContact,
  updateFavorite,
};
