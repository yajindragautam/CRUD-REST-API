const mongoose= require("mongoose");


(async () => {
  try {
    await mongoose.connect(process.env.DATABASE_LOCAL);
    console.log("MongoDB Connected Successfully !...");
  } catch (e) {
    console.error("Error during connection with mongo", e);
  }
})();

require('../model/songModel');
