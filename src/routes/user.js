const express = require('express')
const userAuthentification = require('../middlewares/auth')
const registerUser = require('../controllers/user/register')
const loginUser = require('../controllers/user/login')
const logOutUser = require('../controllers/user/logout')

const router = new express.Router()

// route to registe a new user

router.post('/api-v1/users', registerUser)

// route to login user

router.get('/api-v1/users/login', userAuthentification, loginUser)

// route to logOut user

router.post('/api-v1/users/logOut',userAuthentification, logOutUser)

module.exports = router