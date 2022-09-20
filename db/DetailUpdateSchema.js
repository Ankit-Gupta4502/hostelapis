const mongoose = require("mongoose");
const DetailUpadte = new mongoose.Schema({
  emptyRooms: {
    type: Number,
    default: 0,
  },
  totalPersons: {
    type: Number,
    default: 0,
  },
  totalBoys: {
    type: Number,
    default: 0,
  },
  totalGirls: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("DetailUpadte", DetailUpadte);
