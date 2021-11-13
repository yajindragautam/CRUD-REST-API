const exporess = require("express");
const router = exporess.Router();
// Importing Handlers
const cateController = require("../controller/catsController");
// BOOKS -ARRAY
let books = [];

// Get all Books
router.get("/categories", cateController.getAllcategories);

// Create new Book
router.post("/categories", cateController.createcategories);

// Get book by ID
router.get("/categories/:id", cateController.getCatById);

// Update Books
router.put("/categories/:id", cateController.updateCategories);

//DELETE books
router.delete("/categories/:id", cateController.deletecategories);

// Exporting Routers
module.exports = router;
