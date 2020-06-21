const Users = require("../models/user");
const Order = require("../models/Order");
const bodyParser = require("body-parser");

module.exports.index = async (req, res) => {
  res.send("OrderController");
};
module.exports.postNewOrder = async (req, res) => {
  const total = req.body.products.reduce((a, b) => {
    return a.price * a.quantity + b.price * b.quantity;
  });
  const order = new Order({
    userId: req.user._id,
    email: req.body.email,
    products: req.body.products,
    total: total,
    // total: req.body.products.reduce((a, b) => {
    //   return a.price * a.quantity + b.price * b.quantity;
    // }),
  });
  console.log(order);

  res.send("PostController");
};
