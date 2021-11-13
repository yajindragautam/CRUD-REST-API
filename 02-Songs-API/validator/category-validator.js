const { checkSchema } = require("express-validator");
const mongoose = require("mongoose");


const CategoryValidator = checkSchema({
  name: {
    isString: true,
    trim: true,
    isLength: {
      options: { min: 1, max: 100 },
      errorMessage: "Category name must be between 1 and 100 characters",
    },
  },
  description: {
    isString: true,
    trim: true,
    isLength: {
      options: { min: 1, max: 200 },
      errorMessage: "Description must be between 1 and 200 characters",
    },
  },

});

module.exports = CategoryValidator;
