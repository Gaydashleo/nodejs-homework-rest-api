const Joi = require("joi");

const subscriptionJoiSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "busines").required(),
});

module.exports = subscriptionJoiSchema;
