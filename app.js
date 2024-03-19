const http = require("http");

const express = require("express");
const parser = require("body-parser");

const app = express();

app.use(
  parser.urlencoded({
    extended: false,
  })
);

app.get("/", () => {
  return console.log("hello");
});

const server = http.createServer(app);

server.listen(3000);
