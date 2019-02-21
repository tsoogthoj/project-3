const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
  userName: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String }
});

const Users = mongoose.model("Users", users);

module.exports = Users;
