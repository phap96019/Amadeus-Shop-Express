const Users = require("../models/user");
const Order = require("../models/Order");
const CartItem = require("../models/cartItem");
const Product = require("../models/Product");
const bodyParser = require("body-parser");

module.exports.index = async (req, res) => {
  res.send("OrderController");
};
module.exports.postNewOrder = async (req, res) => {
  //find cartItem
  const items = await CartItem.find({ userId: req.user._id }).populate({
    path: "productId",
    select: "price nameURL",
    model: Product,
  });
  const cart = items.map(x => {
    return {
      productId: x.productId._id,
      nameURL: x.productId.nameURL,
      quantity: x.count,
      price: x.productId.price,
    };
  });

  if (cart.length == 0) res.json("Cart is empty");
  else {
    let totalPrice = 0;
    if (cart.length > 1) {
      totalPrice = cart.reduce((a, b) => {
        return a.price * a.quantity + b.price * b.quantity;
      });
    } else {
      if (cart.length == 1) {
        totalPrice = cart[0].quantity * cart[0].price;
      }
    }

    //create a order
    //console.log(cart);

    const order = new Order({
      userId: req.user._id,
      email: req.body.email,
      products: cart,
      total: totalPrice,
    });

    try {
      const saveOrder = await order.save();
      //delete all cart item
      const deleteCartItem = CartItem.deleteMany(
        { userId: req.user._id },
        err => {}
      );
      res.status(200).json({ message: "create order success" });
    } catch (err) {
      res.json({ message: err });
    }
  }
};

module.exports.getAllOrderUser = async (req, res) => {
  const items = await Order.find({ userId: req.user._id });
  res.json(items);
};
