const express = require("express");
const app = express();
const routes = require("./routes");

const BookService = require("./services/BookService");
const AuthorService = require("./services/AuthorService");

const bookService = new BookService("./data/books.json");
const authorService = new AuthorService("./data/authors.json");

app.use(
  "/",
  routes({ bookService: bookService, authorService: authorService })
);

app.listen(3000);
