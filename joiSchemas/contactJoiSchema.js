const Joi = require("joi");

const phoneRegexp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const contact = {
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
  favorite: Joi.boolean().required(),
};

const postJoiContactSchema = Joi.object({
  name: contact.name,
  email: contact.email,
  phone: contact.phone,
  favorite: contact.favorite.optional(),
});

const putJoiContactSchema = Joi.object({
  name: contact.name.optional(),
  email: contact.email.optional(),
  phone: contact.phone.optional(),
  favorite: contact.favorite.optional(),
});

const favoriteJoiSchema = Joi.object({
  favorite: contact.favorite,
});

module.exports = {
  postJoiContactSchema,
  putJoiContactSchema,
  favoriteJoiSchema,
};
