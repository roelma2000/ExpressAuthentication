//  Filename: users.js
//  Student Name: Rowel Almuete - 301137911
//  Date: 2022-Feb-03


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
