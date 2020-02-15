const functions = require('firebase-functions');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 5600
const nodemailer = require('nodemailer');

app.use(express.static('Public'));

app.use(bodyParser.urlencoded({ extended: true }));

const urlencodedParser = bodyParser.urlencoded({extended: true});

app.post("/user", urlencodedParser, (req, res) => {
  res.sendFile('../Public/bedankt.html', {root: __dirname })
  const persGegevens = req.body

  const string = JSON.stringify(persGegevens, (key, value) =>{

    if (typeof value === "string"){
      return value.toUpperCase();
  } else {
      return value
  }
}, 1);

  var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'gietvloermakers@gmail.com',
          pass: 'Gietvloermakers2020!'
        }
      });
      
      var mailOptions = {
        from: 'gietvloermakers@gmail.com',
        to: 'gvbeusekom84@hotmail.com',
        subject: 'Nieuwe bestelling op Gietvloermakers',
        html: string
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    });


  app.listen(port);

  console.log(port)


