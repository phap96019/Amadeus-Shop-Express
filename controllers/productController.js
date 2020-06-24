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
//========Chuyển dạng
const toSlug = str => {
  str = str.toLowerCase();
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
  str = str.replace(/(đ)/g, "d");
  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");
  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "-");
  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, "");
  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, "");
  // return
  return str;
};
//===================
module.exports.post = async (req, res) => {
  const nameURL = toSlug(req.body.name);
  const product = new Product({
    name: req.body.name,
    nameURL: nameURL,
    img: req.body.img,
    imgHD: req.body.imgHD,
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
      { $set: { nameURL: req.body.nameURL } },
      { $set: { img: req.body.img } },
      { $set: { imgHD: req.body.imgHD } },
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
  const product = await Product.findOne({
    nameURL: req.params.prodID,
  }).populate("reviews");
  res.json(product);
};

module.exports.search = async (req, res) => {
  const keySearch2 = toSlug(req.body.keySearch);
  const products = await Product.find({
    nameURL: { $regex: keySearch2 },
  });
  res.send(products);
};
