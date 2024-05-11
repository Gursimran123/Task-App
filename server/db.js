const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const mongoURL = process.env.MONGO_URI;

const mongoConnect = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("Connected to the database!");
  } catch (error) {
    console.log("Connection or Fetching error: ", error);
  }
};

module.exports = mongoConnect;
