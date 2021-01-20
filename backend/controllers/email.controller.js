var nodemailer = require('nodemailer');  

module.exports.post = async function(req, res) {  
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.email,
            pass: process.env.pass
        }
    })
    transporter.verify(function(error, success) {
        if (error) {
            console.log(error);
        } else { 
        }
    });
    var mailOptions = {
        from: process.env.email, 
        to: process.env.emailTo,
        subject: 'Đã có người liên hệ bạn',
        html: `<p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Subject: ${req.body.subject}</p><p>Message: ${req.body.message}</p>`
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    }) 

	res.status(200).send('ok');
} 