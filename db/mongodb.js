require("dotenv").config();
const mongoose = require("mongoose");

const populateDB = require("./populateDB");

const connectMongoDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`);

  populateDB();
};

module.exports = connectMongoDB;
