// BOOKS -ARRAY
let books = [];

// Get all Books
exports.getAllBooks = (req, res) => {
  res.status(200).json(books);
};

// Create new Book
exports.createBooks = (req, res) => {
  let catId = books.find((cat) => cat.id === parseInt(req.params.id));
  if (!catId) res.status(404).send("Please Enter Category ID.");
  books.push(req.body);
  res.status(201).json(req.body);
};

// Get book by ID
exports.getBookById = (req, res) => {
  let book = books.find((book) => book.id === parseInt(req.params.id));
  if (!book) res.status(404).send("Book with given ID was not found.");
  res.json(book);
};

// Update Books
exports.updateBooks = (req, res) => {
  let bookIndex = books.findIndex(
    (book) => book.id === parseInt(req.params.id)
  );
  if (bookIndex === -1) {
    return res.status(404).json({
      error: "Book not found",
    });
  }
  books[bookIndex] = req.body;

  res.json(req.body);
};

// DELETE books
exports.deleteBooks = (req, res) => {
  let bookIndex = books.findIndex(
    (book) => book.id === parseInt(req.params.id)
  );
  if (bookIndex === -1) {
    return res.status(404).json({
      error: "Book not found",
    });
  }
  books.splice(bookIndex, 1);
  res.status(204).json({
    message: "Book has been deleted. Successfully!",
  });
};
