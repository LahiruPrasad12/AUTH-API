const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

const sendEmail = async options => {
    // 1) Create a transporter
    // const transporter = nodemailer.createTransport({
    //   host: process.env.EMAIL_HOST,
    //   port: process.env.EMAIL_PORT,
    //   auth: {
    //     user: process.env.EMAIL_USERNAME,
    //     pass: process.env.EMAIL_PASSWORD
    //   }
    // });


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "menakajayasekara9@gmail.com",
            pass: "Menu123@#"
        }
    });


    // 2) Define the email options
    const mailOptions = {
        from: 'SLIIT <SLIIT@gmail.com>',
        to: options.email,
        subject: options.subject,
        html: options.message,
    };

    // 3) Actually send the email
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
