const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    
    email : {
        type : String,
        required : true,
        unique : true,
        validate(v){
            if(!validator.isEmail(v)){
                console.log('Invalid Email !')
            }
        }
    },
    password : {
        type : String,
        required : true,
        validate(v){
            if(!validator.isLength(v, { min : 5, max : 10})) {
                console.log('Invalid password')
            }
        }
    },
    Token : String
})

const User = mongoose.model('User', UserSchema)

module.exports = User