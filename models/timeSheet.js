const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timeSheet = new Schema({
  id: { type: String, required: true },
  time: { type: String }
});

const TimeSheet = mongoose.model("TimeSheet", timeSheet);

module.exports = TimeSheet;
