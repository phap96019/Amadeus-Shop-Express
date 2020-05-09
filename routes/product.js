const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const controller = require("../controllers/productController");

router.get("/", controller.index);
router.post("/", controller.post);

module.exports = router;