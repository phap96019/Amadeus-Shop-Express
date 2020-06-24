const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    require: true,
  },
  paid: {
    type: Boolean,
    default: false,
  },
  products: [
    {
      productId: mongoose.Schema.Types.ObjectId,
      nameURL: String,
      quantity: Number,
      price: Number,
    },
  ],
  total: {
    type: Number,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
