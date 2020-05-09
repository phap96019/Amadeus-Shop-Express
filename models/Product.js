const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  img: {
    type: String,
    require: true,
  },
  decription: {
    type: String,
    require: true,
  },
  conf: {
    //configuration
    type: String,
    require: true,
  },
  category: {
    type: Array,
    require: true,
  },
  producer: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Product", ProductSchema);