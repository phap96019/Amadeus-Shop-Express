const Product = require("../models/Product");
const bodyParser = require("body-parser");
module.exports.index = async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
};
module.exports.post = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    img: req.body.img,
    decription: req.body.decription,
    conf: req.body.conf,
    category: req.body.category,
    producer: req.body.producer,
    price: req.body.price,
    number: req.body.number,
  });
  try {
    const saveProduct = await product.save();
    res.json(saveProduct);
  } catch (err) {
    res.json({ message: err });
  }
  console.log(req.body);
};
module.exports.delete = async (req, res) => {
  try {
    const removeProduct = await Product.remove({ _id: req.params.prodID });
    res.json(removeProduct);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports.update = async (req, res) => {
  try {
    const updateProduct = await Product.updateOne(
      { _id: req.params.prodID },
      { $set: { name: req.body.name } },
      { $set: { img: req.body.img } },
      { $set: { decription: req.body.decription } },
      { $set: { conf: req.body.conf } },
      { $set: { category: req.body.category } },
      { $set: { producer: req.body.producer } },
      { $set: { price: req.body.price } },
      { $set: { number: req.body.number } }
    );
    res.json(updateProduct);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports.getOne = async (req, res) => {
  const product = await Product.findOne({ _id: req.params.prodID }).populate(
    "reviews"
  );
  res.json(product);
};
