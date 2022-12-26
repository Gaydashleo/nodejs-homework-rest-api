const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { User } = require("../../models/user");
const bcryptjs = require("bcryptjs");

const register = async (req, res) => {
  const { name, email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }
  const avatarURL = gravatar.url(email);
  const hashPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
  const result = await User.create({
    name,
    email,
    password: hashPassword,
    subscription,
    avatarURL
  });

  res.status(201).json({
    email: result.email,
    subscription: result.subscription,
    avatarURL:result.avatarURL
  });
};

module.exports = register;
