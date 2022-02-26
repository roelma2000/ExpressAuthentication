 //  Filename: index.js
 //  Student Name: Rowel Almuete - 301137911 
 //  Date: 2022-Feb-23
 //  Modified: 2022-Feb-26
var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

 /* GET home page. */
 router.get('/', indexController.displayHomePage);

 /* GET home page. */
 router.get('/home', indexController.displayHomePage);

 /* GET About page. */
 router.get('/about', indexController.displayAboutPage);

 /* GET Services page. */
 router.get('/services', indexController.displayServicesPage);

 /* GET Products page. */
 router.get('/projects', indexController.displayProjects);

 /* GET Contact page. */
 router.get('/contacts', indexController.displayContactPage);

 /* GET Route for displaying the login page. */
 router.get('/login', indexController.displayLoginPage);

 /* Post Route for process the login page. */
 router.post('/login', indexController.processLoginPage);

 /* GET Route for display the register page. */
 router.get('/registration', indexController.displayRegisterPage);

 /* Post Route for process  the register page. */
 router.post('/registration', indexController.processRegisterPage);

 /** GET route to log out  */
 router.get('/logout', indexController.performLogout);


module.exports = router;
