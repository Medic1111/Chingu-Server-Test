const router = require("express").Router();
const { allProductsControl } = require("../controllers/products");

const allProducts = router.get("/api/v1/products", allProductsControl);

module.exports = allProducts;
