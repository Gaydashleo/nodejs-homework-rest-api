const Joi = require("joi");

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const user = {
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
};

const registerJoiSchema = Joi.object({
  email: user.email,
  password: user.password,
});

const loginJoiSchema = Joi.object({
  email: user.email,
  password: user.password,
});

const subscriptionJoiSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "busines").required(),
});

module.exports = {
  registerJoiSchema,
  loginJoiSchema,
  subscriptionJoiSchema,
};
