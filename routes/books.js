const express = require("express");
const router = express.Router();

module.exports = (params) => {
  const { bookService } = params;

  router.get("/", async (req, res) => {
    const books = await bookService.getBooks();
    //console.log(books);
    return res.json(books);
  });
  router.get("/:bookname", async (req, res) => {
    const book = await bookService.getBook(req.params.bookname);
    return res.json(book);
  });
  router.post("/", (req, res) => {
    return res.send("Added new book");
  });
  return router;
};
