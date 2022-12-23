const express = require("express");
const {
  auth,
  contactValidation,
  ctrlWrapper,
  isValidId,
} = require("../../middlewares");

const {
  postJoiContactSchema,
  putJoiContactSchema,
  favoriteJoiSchema,
} = require("../../joiSchemas/index.js");

const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAllContacts));

router.get("/:contactId", auth, isValidId, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  auth,
  contactValidation(postJoiContactSchema),
  ctrlWrapper(ctrl.addContact)
);

router.put(
  "/:contactId",
  isValidId,
  contactValidation(putJoiContactSchema),
  ctrlWrapper(ctrl.updateContactById)
);

router.patch(
  "/:contactId/favorite",
  auth,
  isValidId,
  contactValidation(favoriteJoiSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

router.delete("/:contactId", auth, ctrl.removeContact);

module.exports = router;
