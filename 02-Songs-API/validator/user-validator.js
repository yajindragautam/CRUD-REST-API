const { checkSchema } = require("express-validator");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const UserValidator = checkSchema({
  name: {
    trim: true,
    isString: true,
    isLength: {
      options: { min: 3, max: 20 },
      errorMessage: "Name must be between 3 and 20 characters",
    },
  },
  email: {
    isLength: {
      options: { min: 2, max: 255 },
      errorMessage: "Email is required",
    },
    isEmail: {
      errorMessage: "Invalid email",
    },
    trim: true,
    custom: {
      options: async (value, { req, location, path }) => {
        let user;
        if (req.method == "PUT") {
          user = await User.findOne({
            $and: [
              {
                _id: {
                  $ne: req.params.id,
                },
              },
              {
                email: value,
              },
            ],
          });
        } else {
          user = await User.findOne({ email: value });
        }

        if (user) {
          throw new Error("Email is already taken!");
        }
        return true;
      },
    },
  },
  phone: {
    trim: true,
    isLength: {
      options: { min: 10, max: 10 },
      errorMessage: "The Phone Number Must Be Of 10 Digits",
    },
  },
  age: {
    isInt: {
      options: { min: 1, max: 100 },
      errorMessage: "Age Must Be Between 1 and 100",
    },
  },
  status: {
    isBoolean: true,
  },
});

// eXPORTING THE VALIDATOR
module.exports = UserValidator;
