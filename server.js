const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const port = process.env.port || 8000;
app.listen(port, () => {
  console.log(`App Running On Port: http://127.0.0.1:${port}`);
});
