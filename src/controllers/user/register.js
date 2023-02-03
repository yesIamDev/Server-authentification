const User = require('../../models/user')
const hashePassword = require('../../lib/password')
const generateToken = require('../../lib/jwt')

const registerUser = async (req, res) => {

    if( !req.body ) {
        console.log('Content can not be empty')
        res.status(400).send('Content can not be empty')
    }

    try{
        let user = new User({
            email : req.body.email,
            password : await hashePassword (req.body.password)
        })

        const authToken = generateToken( user.email, user.id)

        user.Token = authToken

        await user.save()

        res.status(200).send(user)

    }catch(e){
        res.status(501).send({ message: "something went wrong please try again", errr: e });
        console.log(e);
    }
}

module.exports = registerUser