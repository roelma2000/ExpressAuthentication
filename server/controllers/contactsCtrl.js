//  Filename: contactsCtrl.js
//  Student Name: Rowel Almuete - 301137911
//  Date: 2022-Feb-03
//  Modified: 2022-Feb-25

let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();

// connect to our contacts Model
let Contacts = require('../models/contacts');

/* GET Route for the Contact List page - READ Operation */
module.exports.displayUserList = (req, res, next) => {
    Contacts.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //'contacts' => views
            //title: 'Contact List' ==> Pass to view page
            //ContactList ==> object storage / same as contactList
            res.render('contacts/list', { title: 'Contact List', ContactList: contactList,displayName: req.user ? req.user.displayName : ""  });
        }
    });
}

//Display the Add Form Only
module.exports.displayAddUserPage = (req, res, next) => {
    res.render('contacts/add', { title: 'Add User' })
}

//Sending and processing the contents of form to add to DB
module.exports.processAddPage = (req, res, next) => {
    let newUser = Contacts({
        "contactName": req.body.contactName,
        "contactNum": req.body.contactNum,
        "emailAddr": req.body.email
    })

    Contacts.create(newUser, (err, Contact) => {

        if (err) {

            console.log(err);
            res.end(err);
        } else {

            res.redirect('/contact-list')
        }


    })

}

//Display Edit Page with the contents of the particular ID
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contacts.findById(id, (err, contactToEdit) => {
        if (err) {

            console.log(err);
            res.end(err);
        } else {
            res.render('contacts/edit', { title: 'Edit Contact Details', contact: contactToEdit })
        }

    });


}

//Process the edited form and updateOne to MongoDB
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updatedContact = Contacts({
        "_id": id,
        "contactName": req.body.contactName,
        "contactNum": req.body.contactNum,
        "emailAddr": req.body.email
    })
    Contacts.updateOne({ _id: id }, updatedContact, (err) => {

        if (err) {

            console.log(err);
            res.end(err);
        } else {

            res.redirect('/contact-list')
        }
    })
}

//Delete per ID

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contacts.remove({ _id: id }, (err) => {
        if (err) {

            console.log(err);
            res.end(err);
        } else {
            res.redirect('/contact-list');
        }

    });



}