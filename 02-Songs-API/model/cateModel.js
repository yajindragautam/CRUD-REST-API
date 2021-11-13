const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Category Is Required..!"],
    trim: true,
    unique: [true, "Category Is Already Exist..!"],
  },
  description: {
    type: String,
    trim: true,
  },
});

// Exporting Models
const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
