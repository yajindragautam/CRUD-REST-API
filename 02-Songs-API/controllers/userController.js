const mongoose = require("mongoose");
require("dotenv").config();
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getProfile = (req, res) => {
  console.log(req.user);
  try {
    let user = { ...req.user.toJSON() };
    delete user.password;
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error: "User Not Found",
    });
  }
};

const getAllUser = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const createUser = async (req, res) => {
  // const user = new User(req.body); - EASY TO DO
  const { email, password, name, status, phone, address, age } = req.body;
  const user = new User({ email, password, name, status, phone, address, age });
  await user.save();
  delete user.password;
  res.status(201).json(user);
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error: "User Not Found",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "ID not found" });
    }
    user.email = req.body.email;
    user.name = req.body.name;
    user.status = req.body.status;
    user.phone = req.body.phone;
    user.address = req.body.address;
    user.age = req.body.age;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "Fail",
      message: "User Not Found.Try Again..",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    await user.remove();
    return res.status(204).json({ message: "Successfully Deleted" });
  } catch (error) {
    // console.log(error);
    res.status(404).json({
      error: "User Not Found",
      message: {
        error: "Please Check Your ID and Try Again..!",
      },
    });
  }
};

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({ error: "Invalid Email or Password" });
  }
  const matchPassword = await bcrypt.compare(req.body.password, user.password);
  if (!matchPassword) {
    return res.status(401).json({ error: "Invalid Email / Password" });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  return res.status(200).json({
    token,
  });
};

module.exports = {
  getAllUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  login,
  getProfile,
};
