let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();

// connect to our Login Model
let Login = require('../models/login');

/* GET Route for the Login List page - READ Operation */
module.exports.displayUserList = (req, res, next) => {
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
          res.render('login/list', { title: 'Login List', LoginList: loginList,displayName: req.user ? req.user.displayName : ""  });
        }
    });
}

//Display the Add Form Only
module.exports.displayAddUserPage = (req, res, next) => {
    res.render('login/add', { title: 'Add User' })
}

//Sending and processing the contents of form to add to DB
module.exports.processAddPage = (req, res, next) => {
    let newUser = Login({
        "username": req.body.username,
        "password": req.body.password,
        "email": req.body.email,
        "address": req.body.address
    })

    Login.create(newUser, (err, Login) => {

        if (err) {

            console.log(err);
            res.end(err);
        } else {

            res.redirect('/login-list')
        }


    })

}

//Display Edit Page with the contents of the particular ID
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Login.findById(id, (err, loginToEdit) => {
        if (err) {

            console.log(err);
            res.end(err);
        } else {
            res.render('login/edit', { title: 'Edit Login Details', login: loginToEdit })
        }

    });


}

//Process the edited form and updateOne to MongoDB
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updatedLogin = Login({
        "_id": id,
        "username": req.body.username,
        "password": req.body.password,
        "email": req.body.email,
        "address": req.body.address
    })
    Login.updateOne({ _id: id }, updatedLogin, (err) => {

        if (err) {

            console.log(err);
            res.end(err);
        } else {

            res.redirect('/login-list')
        }


    })


}

//Delete per ID

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Login.remove({ _id: id }, (err) => {
        if (err) {

            console.log(err);
            res.end(err);
        } else {
            res.redirect('/login-list');
        }

    });



}