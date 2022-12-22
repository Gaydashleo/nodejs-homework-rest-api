const express = require("express");
const { subscriptionJoiSchema } = require("../../joiSchemas.js");

const { auth, ctrlWrapper, contactValidation } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.patch(
  "/",
  auth,
  contactValidation(subscriptionJoiSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

module.exports = router;
