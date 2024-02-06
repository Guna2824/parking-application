const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  vehicleNo: {
    type: String,
    required: true,
    uppercase: true,
  },
  vehicleType: {
    type: String,
    required: true,
    uppercase: true,
  },
  userName: {
    type: String,
    required: true,
    uppercase: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    uppercase: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: null,
  },
  status: {
    type: String,
    default: "vehicle IN",
    uppercase: true,
  },
});

module.exports = mongoose.model("user", userSchema);
