const mongoose = require("mongoose");
require('dotenv').config()


const connectDB = async () => {
  try {

    const conn = await mongoose.connect(process.env.MONGO_DB_URI, {
        dbName: process.env.MONGO_DB_USERNAME,
    })
    console.log(`MongoDB Connected 💪 `);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;