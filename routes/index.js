const express = require("express");
const router = express.Router();
const authorsRoute = require("./authors");
const booksRoute = require("./books");

module.exports = (params) => {
  router.get("/", (req, res) => {
    res.send("Hello from home page (/)");
  });
  router.use("/authors", authorsRoute(params));
  router.use("/books", booksRoute(params));
  return router;
};
