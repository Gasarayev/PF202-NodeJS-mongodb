const mongoose = require("mongoose");
const { DB_URI, DB_PASS } = require("./config");

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI.replace("<db_password>", DB_PASS));
    console.log(`MongoDB Connected 🥭`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;