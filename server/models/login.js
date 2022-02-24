let mongoose = require('mongoose');

//create login model

let loginModel=mongoose.Schema(
    {
        username : String,
        password : String,
        email : String,
        address : String
    },
    {
        collection: "user"
    }
)

module.exports=mongoose.model('Login',loginModel);