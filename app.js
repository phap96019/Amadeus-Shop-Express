const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: "./.env" });

const app = express();

// 1) GLOBAL MIDDLEWARES

//Serving static files
app.use(express.static(path.join(__dirname, "public")));

// 2) ROUTES
app.get("/", (req, res) => {
    return res.send("Welcome to Amadeus!");
});

module.exports = app;
