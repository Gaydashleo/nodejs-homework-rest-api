const {
  postJoiContactSchema,
  putJoiContactSchema,
  favoriteJoiSchema,
} = require("./contactJoiSchema");
const {
  registerJoiSchema,
  loginJoiSchema,
  subscriptionJoiSchema,
} = require("./userJoiSchema");

module.exports = {
  postJoiContactSchema,
  putJoiContactSchema,
  favoriteJoiSchema,
  registerJoiSchema,
  loginJoiSchema,
  subscriptionJoiSchema,
};
