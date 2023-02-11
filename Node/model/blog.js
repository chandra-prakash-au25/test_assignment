const mongoose = require("mongoose");

const blogPost = new mongoose.Schema({
    title: { type: String},
    post: { type: String },
    image: { type: String },

}, { timestamps: true });

module.exports = mongoose.model("post", blogPost);