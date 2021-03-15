const nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'pepi_petrov@outlook.com',
        pass: '2010pepi2207sv'
    }
});
var mailOptions = {
    from: 'pepi_petrov@outlook.com',
    to: 'nadya_arnaudova@hotmail.com',
    subject: 'Привет!',
    text: '',
    html: "<em>Привет!</em>"
};
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});