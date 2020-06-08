const Review = require("../models/Review");
const bodyParser = require("body-parser");
module.exports.index = async (req, res) => {
  res.send("ReviewController");
};
module.exports.post = async (req, res) => {
  const review = new Review({
    title: req.body.title,
    vote: req.body.vote,
    content: req.body.content,
    productId: req.body.productId,
    userId: req.user._id,
  });
  try {
    const saveReview = await review.save();
    res.json(saveReview);
  } catch (err) {
    res.json({ message: err });
  }
};
