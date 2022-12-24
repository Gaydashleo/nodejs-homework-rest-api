const express = require("express");

const { auth, contactValidation, ctrlWrapper } = require("../../middlewares");
const { auth: ctrl } = require("../../controllers");
const { registerJoiSchema, loginJoiSchema } = require("../../joiSchemas");

const router = express.Router();

router.post(
  "/register",
  contactValidation(registerJoiSchema),
  ctrlWrapper(ctrl.register)
);

router.post(
  "/login",
  contactValidation(loginJoiSchema),
  ctrlWrapper(ctrl.login)
);

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
