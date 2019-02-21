const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  pin: { type: String },
  userName: { type: String, required: true },
  password: { type: String, required: true }
});

const Users = mongoose.model("Users", users);

module.exports = Users;
