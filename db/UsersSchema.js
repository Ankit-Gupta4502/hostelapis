const mongoose = require("mongoose");

const HostelUsers = new mongoose.Schema({
  name: {
    required: true,
    maxLength: 100,
    type: String,
  },
  address: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  mobile: {
    type: String,
    required: true,
  },
  FathersName: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("HostelUsers", HostelUsers);
