var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/eventos", function(req, res, next) {
  res.json(events);
});

module.exports = router;
