//  Filename: contacts.js
//  Student Name: Rowel Almuete - 301137911
//  Date: 2022-Feb-26

let mongoose = require('mongoose');

//create contacts model

let contactsModel=mongoose.Schema(
    {
        contactName: String,
        contactNum: String,
        emailAddr: String
    },
   {
        collection: "contact_list"
    }
)

module.exports=mongoose.model('contacts',contactsModel);