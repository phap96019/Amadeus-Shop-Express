"use strict";

var express = require("express");
var dotenv = require("dotenv");
var path = require("path");
var productRouter = require("./routes/product");
var bodyParser = require("body-parser");
//const cros = require("cors"); khi nào code xong frontend sẽ cần
var cors = require('cors');
var passport = require("passport");

dotenv.config({ path: "./.env" });

var app = express();
app.use(bodyParser.json());
//app.use(cros());
// 1) GLOBAL MIDDLEWARES

//Serving static files
app.use(express.static(path.join(__dirname, "public")));

// 2) ROUTES
app.get("/", function (req, res) {
  return res.send("Welcome to Amadeus!");
});
app.use("/products", productRouter);

//=== 1 - CREATE APP
// Creating express app and configuring middleware needed for authentication
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//=== 3 - INITIALIZE PASSPORT MIDDLEWARE
app.use(passport.initialize());
require("./middlewares/jwt")(passport);

//=== 4 - CONFIGURE ROUTES
//Configure Route
require('./routes/index')(app);

module.exports = app;
//# sourceMappingURL=app.js.map