const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateToken = (email, id) => {
    const token = jwt.sign({ email : email, id : id }, process.env.JWT_SECRET, {expiresIn : '5min'})
    return token
}

module.exports = generateToken