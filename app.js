const express = require('express')
require('dotenv').config()
const userRouters = require('./src/routes/user')

const { connectDB } = require('./src/services/mongoDB')

const PORT =  process.env.PORT

const app = express()
connectDB()

app.use(express.json())
app.use(userRouters)


app.listen(PORT, () =>  console.log(`Server runing on port ${PORT}`))

