const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const { User } = require("../../models/user");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, subscription, password } = req.body;
  const user = await User.findOne({ email });

  const passCompare = bcryptjs.compareSync(password, user.password);
  if (!user || !passCompare) {
    throw new Unauthorized("Email or password is wrong");
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.status(200).json({
    token,
    email,
    subscription,
  });
};

module.exports = login;
// res.status(201).json({
//   email: result.email,
//   subscription: result.subscription,
// });
