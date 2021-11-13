require("dotenv").config();
require("./config/database");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const songRouter = require("./routes/songRouter");
const catRouter = require("./routes/catagoryRouter");
const userRouter = require("./routes/userRouter");

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/songs", songRouter);
app.use("/catagories", catRouter);
app.use("/", userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port http://127.0.0.1:${port}`);
});
