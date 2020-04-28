const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const productRouter = require("./router/product");
const bodyParser = require("body-parser");
//const cros = require("cors"); khi nào code xong frontend sẽ cần

dotenv.config({ path: "./.env" });

const app = express();
app.use(bodyParser.json());
//app.use(cros());
// 1) GLOBAL MIDDLEWARES

//Serving static files
app.use(express.static(path.join(__dirname, "public")));

// 2) ROUTES
app.get("/", (req, res) => {
  return res.send("Welcome to Amadeus!");
});
app.use("/products", productRouter);

module.exports = app;
