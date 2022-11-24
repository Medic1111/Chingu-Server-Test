const { Product, User } = require("../models/models");

const addControl = async (req, res) => {
  const { user, product } = req.params;

  await Product.findOne({ _id: product })
    .then(async (doc) => {
      await User.findOne({ username: user })
        .then(async (user) => {
          await user.cart.push(doc);
          user.save((err, update) => {
            if (err)
              return res
                .status(500)
                .json({ message: "Oops, something went wrong" });
            res.status(201).json({ message: "Added to cart" });
          });
        })
        .catch((userErr) => {
          return res.status(404).json({ message: "User Not Found" });
        });
    })
    .catch((err) => {
      return res.status(404).json({ message: "Product Not Found" });
    });
};

module.exports = { addControl };
