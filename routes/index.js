var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(200, "Welcome to the backend of the useless app");
});

module.exports = router;
