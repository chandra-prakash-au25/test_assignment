const mongoose = require("mongoose");

const steps = new mongoose.Schema({
    steps: { type: String},

}, { timestamps: true });

module.exports = mongoose.model("step", steps);