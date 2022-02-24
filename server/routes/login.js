let express = require('express');
let mongoose = require('mongoose');

let loginController=require('../controllers/login');
let router = express.Router();


/* GET Route for the Login List page - READ Operation */
router.get('/', loginController.displayUserList);
// router.get('/', (req, res, next) => {
//     Login.find((err, loginList) => {
//         if(err)
//         {
//             return console.error(err);
//         }
//         else
//         {
//            // console.log(loginList);
//            //'login' => views 
//            //title: 'Login List' ==> Pass to view page
//            //LoginList ==> object storage / same as loginList 
//            res.render('login/list', {title: 'Login List', LoginList: loginList})            
//         }
//     });
// });

/* GET Route for the add page -  Create Operation */
router.get('/add',loginController.displayAddUserPage);

/* POST Route for the add page -  Create Operation */
router.post('/add',loginController.processAddPage);

/* GET Route for the edit page -  Update Operation */
router.get('/edit/:id', loginController.displayEditPage);

/* POST Route for the edit page -  Update Operation */
router.post('/edit/:id',loginController.processEditPage);

/* GET Route for the delete  -  Delete Operation */

router.get('/delete/:id', loginController.performDelete);

module.exports = router;