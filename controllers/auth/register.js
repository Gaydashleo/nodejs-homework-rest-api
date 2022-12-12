const { Conflict } = require("http-errors");
const { User } = require("../../models/user");

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }
  const result = await User.create({ email, password, subscription });

  res.status(201).json({
    email: result.email,
    subscription: result.subscription,
  });
};

module.exports = register;
