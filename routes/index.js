 //  Filename: index.js
 //  Student Name: Rowel Almuete - 301137911 
 //  Date: 2022-Feb-03 
var express = require('express');
var router = express.Router();

/*   GET home page and  RENDER page views.*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Contact' });
});
module.exports = router;
