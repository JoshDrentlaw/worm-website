const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const server = express();

require('dotenv').config();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static('client'))

server.post('/', (req, res) => {
    mail({
        email: req.body.email,
        worms: req.body.worms,
        compost: req.body.compost,
        deliveryOption: req.body.deliveryOption,
        comment: req.body.comment
    }).catch(console.error());
});

server.get('/', (req, res) => {
    console.log(req.body.email);
    // main().catch(console.error);
});

async function mail(data) {
    // Create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });

    // Setup email data with unicode symbols
    let mailOptions = {
        from: process.env.USER,
        to: process.env.USER,
        subject: "Test",
        html: `
            <h1>Submitted Data</h1>
            <ul>
                <li>Email: ${data.email}</li>
                <li>Worms: ${data.worms}</li>
                <li>Compost: ${data.compost}</li>
                <li>Delivery Option: ${data.deliveryOption}</li>
                <li>Comment: ${data.comment}</li>
            </ul>
        `
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    console.log("message sent: %s", info.messageId);
}

let port = process.env.PORT || 5500;
server.listen(port, () => {
    console.log(`Server listening on port ${port}....`);
});