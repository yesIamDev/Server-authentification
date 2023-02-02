const express = require('express')
require('dotenv').config()

const { connectDB } = require('./src/services/mongoDB')

const PORT =  process.env.PORT

const app = express()
connectDB()


app.listen(PORT, () =>  console.log(`Server runing on port ${PORT}`))

