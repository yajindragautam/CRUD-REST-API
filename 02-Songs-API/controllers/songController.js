const mongoose = require("mongoose");
const Song = require("../model/songModel");
// Get all songs
exports.getAllSongs = async (req, res) => {
  try {
    const song = await Song.find();
    res.json({
      message: "Fetched Songs Success..!",
      data: {
        song,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// Get Song By Id
exports.getSongById = async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id).populate({
      path: "category",
      select: "-__v",
    });
    console.log(song);
    res.status(200).json({
      message: "Song Fetched Successfully..!",
      data: {
        song,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Songs Not Found",
      data: {
        error,
      },
    });
  }
};

// Create New Song
exports.createSong = async (req, res) => {
  try {
    // Create new song and update category id
    const newSong = await Song.create(req.body);
    res.json({
      message: "Song Created Successfully..!",
      data: {
        newSong,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      data: {
        error,
      },
    });
  }
};

// Update Song
exports.updateSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      message: "Song Updated Successfully..!",
      data: {
        song,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Invalid ID",
      status: "fail",
    });
  }
};
// Delete Song By ID
exports.deleteSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    res.status(204).json({
      message: "Song Deleted Successfully..!",
      data: {
        song,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Invalid ID",
      status: "fail",
    });
  }
};
