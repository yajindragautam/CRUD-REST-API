const express = require("express");
const songValidator = require("../validator/song-validator");
const validatorHandler = require("../handler/validator-handler");
const songController = require("../controllers/songController");
const router = express.Router();

router
  .route("/")
  .get(songController.getAllSongs)
  .post(songValidator, validatorHandler(songController.createSong));

router
  .route("/:id")
  .get(songController.getSongById)
  .put(songValidator, validatorHandler(songController.updateSong))
  .delete(songController.deleteSong);

// Exporting
module.exports = router;
