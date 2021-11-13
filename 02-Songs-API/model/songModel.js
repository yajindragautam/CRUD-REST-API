const mongoose = require("mongoose");
const { Schema } = mongoose;

const SongSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  artist: {
    type: String,
    required: true,
    trim: true,
  },
  album: {
    type: String,
    trim: true,
  },
  category: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },
  ],
});

// Export the model
const Song = mongoose.model("Song", SongSchema);
module.exports = Song;
