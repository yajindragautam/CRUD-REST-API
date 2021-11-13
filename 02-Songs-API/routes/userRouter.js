const express = require("express");
const router = express.Router();
const loginValidation = require("../validator/login-validation");
const userController = require("../controllers/userController");
const userValidator = require("../validator/user-validator");
const catchError = require("../handler/validator-handler");
const verifyToken = require("../middlewares/auth");
const checkObjId = require("../middlewares/object-id-check");

// Login
router.post("/login", loginValidation, catchError(userController.login));

// get all users, Request Method: Get
router.get("/users", verifyToken, userController.getAllUser);

// create new users, Request Method: POST
router.post("/register", catchError(userController.createUser));

// Profile
router.get("/profile", verifyToken, userController.getProfile);

// get user by id, Request Method: Get
router.get("/users/:id", /* checkObjId,*/ userController.getUserById);

router.put(
  "/users/:id",
  verifyToken,
  userValidator,
  catchError(userController.updateUser)
);
// DELETE
router.delete("/users/:id",/* checkObjId,*/ verifyToken, userController.deleteUser);

module.exports = router;
