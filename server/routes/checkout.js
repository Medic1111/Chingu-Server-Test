const router = require("express").Router();
const { checkoutControl } = require("../controllers/checkout");

const checkoutRoute = router.put(
  "/api/v1/:username/cart/checkout",
  checkoutControl
);

module.exports = checkoutRoute;
