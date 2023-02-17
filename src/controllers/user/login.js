const User = require('../../models/user')
const bcrypt = require('bcrypt')
const generateToken = require('../../lib/jwt')

const loginUser = async (req,res) => {
    
    try {

        const user = await User.findOne({ email : req.body.email })
        if (!user) return res.status(401).send({ message: "User not found please check your email !" });

        const compare = bcrypt.compare(user.password, req.body.password)
        if (!compare) return res.status(403).json({ message: "invalid password." });

        const authToken = generateToken(user.email, user.id)

        user.Token = authToken

        res.status(200).send(user)
        console.log('your are login!')

    }catch(e){
        console.log(e);
        res.status(500).json({ message: "something went wrong please try again later." })
    }
}

module.exports = loginUser