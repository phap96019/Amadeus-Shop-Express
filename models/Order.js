const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  total: Number,
  products: [
    {
      product: mongoose.Schema.Types.ObjectId,
      quantity: Number,
      price: Number,
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Order", OrderSchema);
