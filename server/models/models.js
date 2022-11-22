const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, require, unique: true },
  username: { type: String, require, unique: true },
  password: { type: String, require },
  cart: {
    type: Array,
    default: [],
  },
});

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const User = new mongoose.model("User", userSchema);
const Product = new mongoose.model("Product", productSchema);
module.exports = { User, Product };
