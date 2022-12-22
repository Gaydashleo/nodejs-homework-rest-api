const { User } = require("../../models");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  if (subscription === null || subscription === undefined) {
    res.status(400).json(`missing field subscription`);
  }

  const result = await User.findByIdAndUpdate(_id, { subscription });
  res.status(200).json({ result });
};

module.exports = updateSubscription;
