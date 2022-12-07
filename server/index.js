const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const app = express();

// MIDDLEWARES
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

//  MONGO CONNECTION
const db_connection = require("./config/dbconn.config");
db_connection();

// ROUTES
const seedDatabase = require("./routes/seed");
const validate = require("./routes/validate");
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");
const allProducts = require("./routes/products");
const addRoute = require("./routes/add");
const removeRoute = require("./routes/remove");
const checkoutRoute = require("./routes/checkout");
const { Product, User } = require("./models/models");

// PERSONAL MIDDLEWARES
app.use("/", seedDatabase);
app.use("/", validate);
app.use("/", loginRoute);
app.use("/", registerRoute);
app.use("/", allProducts);
app.use("/", addRoute);
app.use("/", removeRoute);
app.use("/", checkoutRoute);

// DEV :

// UNIVERSAL ROUTE

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Export APP

module.exports = app;
