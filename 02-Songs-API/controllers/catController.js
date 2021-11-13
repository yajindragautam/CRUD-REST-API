const mongoose = require("mongoose");
const Category = require("../model/cateModel");

// Get All Categories
exports.getAllCatagories = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json({
      message: "Category Created Successfully",
      data: {
        category,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Cannot fetch Categories..!",
      data: {
        error,
      },
    });
  }
};

// Get Category By ID
exports.getCatagoryById = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id);
    res.status(200).json({
      message: "Category Found Successfully",
      data: {
        category,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Fail to fetch - Check your ID",
      data: {
        error,
      },
    });
  }
};

// Create Category
exports.createCatagory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(200).json({
      message: "Category Created Successfully",
      data: {
        category,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Fail to create category - Try again..!",
      data: {
        error,
      },
    });
  }
};

// Update Category
exports.updateCatagory = async (req, res) => {
  try {
    const categry = await Category.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: {
        categry,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "fail",
      data: {
        error,
      },
    });
  }
};

// Delete Category
exports.deleteCatagory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    res.status(204).json({
      message: "Category Deleted Successfully",
      data: {
        category,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Fail to delete category - Try again..!",
      data: {
        error,
      },
    });
  }
};
