const { User } = require("../../models");
const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

// const updateAvatar = async (req, res) => {
//   const { path: tempUpload, originalname } = req.file;
//   const { _id: id } = req.user;
//   const imageName = `${id}_${originalname}`;
//   try {
//     const resultUpload = path.join(avatarsDir, imageName);
//     Jimp.read(tempUpload)
//       .then((avatar) => {
//         return avatar.resize(250, 250).write(resultUpload);
//       })
//       .catch((error) => console.log(error));
//     await fs.rename(tempUpload, resultUpload);
//     const avatarURL = path.join("public", "avatars", imageName);
//     await User.findByIdAndUpdate(req.user._id, { avatarURL });
//     res.json({ avatarURL });
//   } catch (error) {
//     await fs.unlink(tempUpload);
//     throw error;
//   }
// };

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;

  const filename = `${_id}.${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);

  await fs.rename(tempUpload, resultUpload);
  const resizeAvatar = await Jimp.read(resultUpload);
  await resizeAvatar.resize(250, 250).write(resultUpload);
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });
  res.json({
    avatarURL,
  });
};
module.exports = updateAvatar;
