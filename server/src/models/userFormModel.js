const mongoose = require("mongoose");
const userFormSchema = require("../schemas/userFormSchema");

const UserForm = mongoose.model("UserForm", userFormSchema);
module.exports = UserForm;