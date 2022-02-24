let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Login Model
let Login = require('../models/login');



/* GET Route for the Login List page - READ Operation */
router.get('/', (req, res, next) => {
    Login.find((err, loginList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
           // console.log(loginList);
           //'login' => views 
           //title: 'Login List' ==> Pass to view page
           //LoginList ==> object storage / same as loginList 
           res.render('login', {title: 'Login List', LoginList: loginList})            
        }
    });
});


module.exports = router;