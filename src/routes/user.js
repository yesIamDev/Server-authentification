const express = require('express')
const userAuthentification = require('../middlewares/auth')
const registerUser = require('../controllers/user/register')

const router = new express.Router()

// route to registe a new user

router.post('/api-v1/users', registerUser)


module.exports = router