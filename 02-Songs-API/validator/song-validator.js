const { checkSchema } = require("express-validator");
const mongoose = require("mongoose");
const Song = mongoose.model("Song");

const SongValidator = checkSchema({
  title: {
    isString: true,
    trim: true,
    isLength: {
      options: { min: 1, max: 200 },
      errorMessage: "Title must be between 1 and 200 characters",
    },
  },
  artist: {
    isString: true,
    trim: true,
    isLength: {
      options: { min: 1, max: 100 },
      errorMessage: "Artist must be between 1 and 100 characters",
    },
  },
  album: {
    isString: true,
    trim: true,
  },
});

module.exports = SongValidator;
