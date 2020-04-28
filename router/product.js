const express = require("express");
const router = express.Router();
const Product = require("../model/Product");
const controller = require("../controller/productController");

router.get("/", controller.index);
router.post("/", controller.post);

module.exports = router;
