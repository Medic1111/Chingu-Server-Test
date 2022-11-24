const router = require("express").Router();
const { removeControl } = require("../controllers/remove");

const removeRoute = router.put(
  "/api/v1/:user/cart/remove/:product",
  removeControl
);

module.exports = removeRoute;
