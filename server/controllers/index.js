//  Filename: index.js
//  Student Name: Rowel Almuete - 301137911
//  Date: 2022-Feb-26

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let userModel = require('../models/user');
let User = userModel.User;

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' ,displayName: req.user ? req.user.displayName : ""});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About',displayName: req.user ? req.user.displayName : "" });
}

module.exports.displayProjects = (req, res, next) => {
    res.render('projects', { title: 'Projects',displayName: req.user ? req.user.displayName : "" });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services',displayName: req.user ? req.user.displayName : "" });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contacts', { title: 'Contacts',displayName: req.user ? req.user.displayName : "" });
}

//if the user is not login - render else redirect
module.exports.displayLoginPage = (req, res, next) => {
    if (!req.user) {
        res.render('auth/login', {
            title: "Login", messages: req.flash('loginMessage'),
            //if req.user exists displayName; else display blank
            displayName: req.user ? req.user.displayName : ""
        });
    } else {

        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    //err and user are predefined variables
    //function callback
    passport.authenticate('local', (err, user, info) => {

        if (err) {

            return next(err);
        }
        if (!user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');

        }
        req.login(user, (err) => {
            if (err) {

                return next(err);
            }
            //Get whatever user entered in the form
            const payload = {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email

            }
            //Give access
            return res.redirect('/contact-list');
        });
    })(req, res, next);

}

module.exports.displayRegisterPage = (req, res, next) => {
    if (!req.user) {
        res.render('auth/registration', {
            title: "Register", messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ""
        });
    } else {

        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName

    })
    //password will be sent to register module(passport) to hash
    User.register(newUser, req.body.password, (err) => {
        if (err) {
            console.log("Error registering new user");
            if (err.name = "UserExistsError") {

                req.flash(
                    'registerMessage', 'Registration Error: User Already Exists'

                );
                console.log('Error: User already Exists');
            }
            return res.render('auth/registration', {
                title: 'Register', messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ""

            });

        }
        else {

            return passport.authenticate('local')(req, res, () => {

                res.redirect('/contact-list')

            });
        }

    });

}

module.exports.performLogout = (req,res,next) =>{
    req.logout();
    res.redirect('/');

}