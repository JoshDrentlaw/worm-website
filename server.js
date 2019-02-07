"use strict";
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/', (req, res) => {
    console.log(req.body.email);
    main().catch(console.error);
});

async function main() {
    const user = "joshdrentlaw@gmail.com";
    const pass = "v.u5xQo0g";

    // Create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: pass
        }
    });

    // Setup email data with unicode symbols
    let mailOptions = {
        from: user,
        to: user,
        subject: "Test",
        html: `<h1>TEST</h1>`
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    console.log("message sent: %s", info.messageId);
}

server.listen(5500, console.log('Server listening on port 5500....'));