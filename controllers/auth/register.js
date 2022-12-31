const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { User } = require("../../models/user");
const bcryptjs = require("bcryptjs");
const { nanoid } = require("nanoid");
const { sendEmail } = require("../../helpers");

const register = async (req, res) => {
  const { name, email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }
  const avatarURL = gravatar.url(email);
  const hashPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
  const verificationToken = nanoid();
  const result = await User.create({
    name,
    email,
    password: hashPassword,
    subscription,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Verify email",
    html: `<a href="http://localhost3000/api/users/verify/${verificationToken}">Click verify email</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    email: result.email,
    subscription: result.subscription,
  });
};

module.exports = register;
