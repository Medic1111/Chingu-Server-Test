const { Product } = require("../models/models");

const allProductsControl = (req, res) => {
  Product.find()
    .then((docs) => res.status(200).json(docs))
    .catch((err) =>
      res.status(500).json({ message: "Oops, something went wrong =(" })
    );
};

module.exports = { allProductsControl };
