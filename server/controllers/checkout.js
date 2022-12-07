const { User } = require("../models/models");

const checkoutControl = async (req, res) => {
  let username = req.params.username;
  await User.findOne({ username: username })
    .then((user) => {
      user.cart = [];
      user.save((err, saved) => {
        if (err)
          return res
            .status(500)
            .json({ message: "Oops, something went wrong" });
        res.status(200).json({ message: "Checked out" });
      });
    })
    .catch((noUser) => {
      res.status(404).json({ message: "User not found" });
    });
};

module.exports = { checkoutControl };
