const mongoose = require("mongoose");

const userFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  profileImage: {
    type: String, 
    required: false,
  },
  message: {
    type: String,
    required: false,
  }
},{
  timestamps:true,
  versionKey: false
});


module.exports = userFormSchema;
