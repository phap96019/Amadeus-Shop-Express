require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Token = require("./token");

<<<<<<< HEAD

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: 'Your email is required',
        trim: true,
        lowercase: true
=======
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: "Your email is required",
      trim: true,
>>>>>>> 1788947699bde3a9871f89c024776c3ae1d0d0e3
    },

    username: {
      type: String,
      unique: true,
      required: "Your username is required",
    },

    password: {
      type: String,
      required: "Your password is required",
      max: 100,
    },

    nickname: {
      type: String,
      required: false,
      max: 255,
    },

    numphone: {
<<<<<<< HEAD
        type: Number,
        required: false,
        max: 255
=======
      type: String,
      required: false,
      max: 255,
>>>>>>> 1788947699bde3a9871f89c024776c3ae1d0d0e3
    },

    sex: {
      type: String,
      required: false,
      max: 255,
    },

    datebirth: {
      type: String,
      required: false,
      max: 255,
    },

    address: {
      type: String,
      required: false,
      max: 255,
    },

    profileImage: {
<<<<<<< HEAD
        type: String,
        required: false
=======
      type: String,
      required: false,
      max: 255,
>>>>>>> 1788947699bde3a9871f89c024776c3ae1d0d0e3
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    resetPasswordToken: {
      type: String,
      required: false,
    },

    resetPasswordExpires: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate());

  let payload = {
    id: this._id,
    email: this.email,
    username: this.username,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
};

UserSchema.methods.generateJWTrefresh = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  let payload = {
    id: this._id,
    email: this.email,
    username: this.username,
  };

<<<<<<< HEAD
    return jwt.sign(payload, process.env.JWT_SECRET_REFRESH, {
        expiresIn: '43200m' //expires in 30d
    });
=======
  return jwt.sign(payload, process.env.JWT_SECRET_REFRESH, {
    expiresIn: parseInt(expirationDate.getTime() / 1000, 10),
  });
>>>>>>> 1788947699bde3a9871f89c024776c3ae1d0d0e3
};
UserSchema.methods.generatePasswordReset = function () {
  this.resetPasswordToken = crypto.randomBytes(64).toString("hex");
  this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
};

UserSchema.methods.generateVerificationToken = function () {
  let payload = {
    userId: this._id,
    token: crypto.randomBytes(64).toString("hex"),
  };

  return new Token(payload);
};

<<<<<<< HEAD

mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('Users', UserSchema);
=======
mongoose.set("useFindAndModify", false);
module.exports = mongoose.model("User", UserSchema);
>>>>>>> 1788947699bde3a9871f89c024776c3ae1d0d0e3
