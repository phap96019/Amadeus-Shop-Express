const express = require("express");

const router = express.Router();
const controller = require("../controllers/paymentController");
router.get("/", controller.index);
router.post("/resolve", controller.resolve);
module.exports = router;
