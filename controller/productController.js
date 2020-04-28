const Product = require("../model/Product");
const bodyParser = require("body-parser");
module.exports.index = async (req, res) => {
  try {
    console.log("watting finding data");
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
  });
  try {
    const saveProduct = await product.save();
    res.json(saveProduct);
  } catch (err) {
    res.json({ message: err });
  }
  console.log(req.body);
};
