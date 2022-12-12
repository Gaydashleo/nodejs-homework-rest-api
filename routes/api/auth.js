const express = require("express");

const {
  contactValidation,
  ctrlWrapper,
  isValidId,
} = require("../../middlewares");
const { auth: ctrl } = require("../../controllers");
const { registerJoiSchema, loginJoiSchema } = require("../../joiSchemas.js");

const router = express.Router();

router.post(
  "/register",
  contactValidation(registerJoiSchema),
  ctrlWrapper(ctrl.register)
);

module.exports = router;
