require("dotenv").config();
const express = require("express");
// Importing Routers
const bookRouter = require("./routes/bookRouters");
const catRouter = require("./routes/catRouters");
const app = express();

// Middlewares
app.use(express.json()); // Used to convert req , res into JSON

// Routes
app.use("/", bookRouter);
app.use("/", catRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello From The Server",
    notice: "Your Are In Hone Page Now.",
  });
});

// SERVER
//module.exports = app;
const port = process.env.port || 8000;
app.listen(port, () => {
  console.log(`App Running On Port: http://127.0.0.1:${port}`);
});
