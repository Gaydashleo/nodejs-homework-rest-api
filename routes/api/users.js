const express = require("express");
const { subscriptionJoiSchema } = require("../../joiSchemas");

const {
  auth,
  upload,
  ctrlWrapper,
  contactValidation,
} = require("../../middlewares");
const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.patch(
  "/",
  auth,
  contactValidation(subscriptionJoiSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
