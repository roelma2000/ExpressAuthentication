let express = require('express');
let mongoose = require('mongoose');
let passport = require('passport')
let loginController=require('../controllers/login');
let router = express.Router();

function requireAuth(req, res, next) {
    if (!req.isAuthenticated) {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Login List page - READ Operation */
router.get('/', loginController.displayUserList);

/* GET Route for the add page -  Create Operation */
router.get('/add',requireAuth,loginController.displayAddUserPage);

/* POST Route for the add page -  Create Operation */
router.post('/add',requireAuth,loginController.processAddPage);

/* GET Route for the edit page -  Update Operation */
router.get('/edit/:id',requireAuth, loginController.displayEditPage);

/* POST Route for the edit page -  Update Operation */
router.post('/edit/:id',requireAuth,loginController.processEditPage);

/* GET Route for the delete  -  Delete Operation */

router.get('/delete/:id',requireAuth, loginController.performDelete);

module.exports = router;