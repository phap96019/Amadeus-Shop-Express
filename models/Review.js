const mongoose = require("mongoose");
const ReviewSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  vote: {
    type: Number,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});
module.exports = mongoose.model("Review", ReviewSchema);
