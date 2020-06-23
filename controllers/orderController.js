const Users = require("../models/user");
const Order = require("../models/Order");
const CartItem = require("../models/cartItem");
const Product = require("../models/Product");
const bodyParser = require("body-parser");

module.exports.index = async (req, res) => {
  res.send("OrderController");
};
module.exports.postNewOrder = async (req, res) => {
  const items = await CartItem.find({ userId: req.user._id }).populate({
    path: "productId",
    select: "price",
    model: Product,
  });
  const cart = items.map(x => {
    return {
      productId: x.productId._id,
      quantity: x.count,
      price: x.productId.price,
    };
  });
  const total = cart.reduce((a, b) => {
    return a.price * a.quantity + b.price * b.quantity;
  });

  const order = new Order({
    userId: req.user._id,
    email: req.body.email,
    products: cart,
    total: total,
  });
  console.log(order);

  res.send("PostController");
};
