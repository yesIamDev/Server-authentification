const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth:{
        user : 'davidkeukeu88@gmail.com',
        pass : '1924030475'
    },
    secure : true
})

const mailData = {
    from : 'davidkeukeu8@gmail.com',
    to : 'davidkeukeu88@gmail.com',
    subject: 'SENDING EMAIL USING NODE JS',
    text: 'That was easy!'
}

transporter.sendMail(mailData, function(err,info){
    if(err){
        console.log(err)
    }else{
        console.log(info)
    }
})

module.exports = sendMail