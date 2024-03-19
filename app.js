const http = require("http");

const express = require("express");
const parser = require("body-parser");

const app = express();

app.use(
  parser.urlencoded({
    extended: false,
  })
);

const server = http.createServer(app);

server.listen(3000);
