const mongoose = require('mongoose')

const dailySchema = new mongoose.Schema({
    name: String,
    password: String
})

const Daily = mongoose.model('Daily',dailySchema)

module.exports = Daily

