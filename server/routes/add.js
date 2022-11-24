const router = require("express").Router();
const { addControl } = require("../controllers/add");

const addRoute = router.put("/api/v1/:user/cart/new/:product", addControl);

module.exports = addRoute;
