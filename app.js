require("dotenv").config();

const logger = require("morgan");
const express = require("express");
const errorHandler = require("errorhandler");
const methodOverride = require("method-override");

const port = 3000;
const app = express();
const path = require("path");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(errorHandler());
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/collections", (req, res) => {
  res.render("pages/collections");
});

app.get("/detail:id", (req, res) => {
  res.render("pages/detail");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
