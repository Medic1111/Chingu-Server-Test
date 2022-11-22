const { Product } = require("../models/models");
const productArr = require("../products");

const seedControl = async (req, res) => {
  await Product.insertMany(productArr)
    .then((dbRes) => console.log("Data inserted"))
    .catch((err) => console.log(err));
};

module.exports = { seedControl };
