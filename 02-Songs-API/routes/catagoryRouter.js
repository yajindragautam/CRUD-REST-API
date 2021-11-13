const express = require("express");
const categoryValidator = require("../validator/category-validator");
const validatorHandler = require("../handler/validator-handler");
const catController = require("../controllers/catController");
const router = express.Router();

router
  .route("/")
  .get( catController.getAllCatagories)
  .post(categoryValidator, validatorHandler(catController.createCatagory));

router
  .route("/:id")
  .get(catController.getCatagoryById)
  .put(categoryValidator, catController.updateCatagory)
  .delete(catController.deleteCatagory);

// Exporting
module.exports = router;
