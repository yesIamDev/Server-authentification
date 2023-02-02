require('dotenv').config()
const mongoose = require('mongoose')

MONGO_URL = process.env.MONGO_URL

async function connectDB(){

    mongoose.set('strictQuery', true);

    try{
        await mongoose.connect(MONGO_URL)
        console.log('Connexion to dataBase is done !')
    }catch(e){
        console.log(e)
    }  
}

module.exports = { connectDB }

