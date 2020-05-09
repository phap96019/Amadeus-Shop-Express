const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

const connectDB = () => {
  //Configure mongoose's promise to global promise
  mongoose.promise = global.Promise;
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true
    });
};

module.exports = connectDB;
