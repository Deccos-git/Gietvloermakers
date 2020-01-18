const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5600
const nodemailer = require('nodemailer');


const urlencodedParser = bodyParser.urlencoded({extended: true});

const jsonParser = bodyParser.json()

app.use(express.static('Public'));

app.post("/api/user", jsonParser, (req, res) => {
  console.log(req.body)
});

app.post("/api/user", urlencodedParser, (req, res) => {
  console.log(req.body)
});

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'gietvloermakers@gmail.com',
//       pass: 'Gietvloermakers2020!'
//     }
//   });
  
//   var mailOptions = {
//     from: 'gietvloermakers@gmail.com',
//     to: 'gvbeusekom84@hotmail.com',
//     subject: 'Sending Email using Node.js',
//     html: '<h1>That was easy!</h1>'
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });

  app.listen(port);

  console.log(port)
