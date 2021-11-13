// categories -ARRAY
let categories = [];

// Get all categories
exports.getAllcategories = (req, res) => {
  res.status(200).json(categories);
};

// Create new Book
exports.createcategories = (req, res) => {
  categories.push(req.body);
  res.status(201).json(req.body);
};

// Get book by ID
exports.getCatById = (req, res) => {
  let book = categories.find((book) => book.id === parseInt(req.params.id));
  if (!book) res.status(404).send("Book with given ID was not found.");
  res.json(book);
};

// Update categories
exports.updateCategories = (req, res) => {
  let bookIndex = categories.findIndex(
    (book) => book.id === parseInt(req.params.id)
  );
  if (bookIndex === -1) {
    return res.status(404).json({
      error: "Book not found",
    });
  }
  categories[bookIndex] = req.body;

  res.json(req.body);
};

// DELETE categories
exports.deletecategories = (req, res) => {
  let bookIndex = categories.findIndex(
    (book) => book.id === parseInt(req.params.id)
  );
  if (bookIndex === -1) {
    return res.status(404).json({
      error: "Book not found",
    });
  }
  categories.splice(bookIndex, 1);
  res.status(204).json({
    message: "Book has been deleted. Successfully!",
  });
};
