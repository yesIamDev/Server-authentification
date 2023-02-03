const User = require('../models/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const userAuthentification = async (req, res, next) => {
    
    try {
        
        const authToken = req.header('Authorization').replace('Bearer ','')
        const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET)

        let user = User.findOne( { _id : decodedToken.id, 'authTokens.authToken': authToken})

        if(!user){ throw new Error () }

        next()

    }catch(e){
        console.log(e)
        res.status(401).send('Authentication fails please make sure that you are authenticated !')
    }
}

module.exports = userAuthentification