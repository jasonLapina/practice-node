const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  return console.log(req.url);
});
router.get("/product", (req, res, next) => {
  return console.log(req.url);
});

module.exports = router;
