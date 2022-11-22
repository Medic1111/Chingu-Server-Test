const router = require("express").Router();
const { seedControl } = require("../controllers/seed");

const seedDatabase = router.get("/api/v1/dev/seed", seedControl);

module.exports = seedDatabase;
