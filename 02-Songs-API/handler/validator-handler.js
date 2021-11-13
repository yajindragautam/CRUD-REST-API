const { check, validationResult } = require("express-validator");

// Validate the request body
const catchValidationError = (fn) => {
  return function (req, res, next) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return fn(req, res, next).catch(next);
    }
    let errorData = errors.mapped();
    return res.status(422).json(errorData);
  };
};

module.exports = catchValidationError;
