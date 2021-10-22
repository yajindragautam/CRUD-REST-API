const exporess = require("express");
const router = exporess.Router();
// Importing Handlers
const bookController = require("../controller/booksController");

// BOOKS -ARRAY
let books = [];

// Get all Books
router.get("/books", bookController.getAllBooks);

// Create new Book
router.post("/books", bookController.createBooks);

// Get book by ID
router.get("/books/:id", bookController.getBookById);

// Update Books
router.put("/books/:id", bookController.updateBooks);

//DELETE books
router.delete("/books/:id", bookController.deleteBooks);

// Exporting Routers
module.exports = router;
