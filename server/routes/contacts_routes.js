//  Filename: contacts_routes.js
//  Student Name: Rowel Almuete - 301137911
//  Date: 2022-Feb-26

let express = require('express');
let mongoose = require('mongoose');
let passport = require('passport')
let contactsController=require('../controllers/contactsCtrl');
let router = express.Router();

function requireAuth(req, res, next) {
    if (!req.isAuthenticated) {
        return res.redirect('/contacts');
    }
    next();
}

/* GET Route for the Login List page - READ Operation */
router.get('/', contactsController.displayUserList);

/* GET Route for the add page -  Create Operation */
router.get('/add',requireAuth,contactsController.displayAddUserPage);

/* POST Route for the add page -  Create Operation */
router.post('/add',requireAuth,contactsController.processAddPage);

/* GET Route for the edit page -  Update Operation */
router.get('/edit/:id',requireAuth, contactsController.displayEditPage);

/* POST Route for the edit page -  Update Operation */
router.post('/edit/:id',requireAuth,contactsController.processEditPage);

/* GET Route for the delete  -  Delete Operation */

router.get('/delete/:id',requireAuth, contactsController.performDelete);

module.exports = router;