const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 5600
const nodemailer = require('nodemailer');

app.use(express.static('Public'));

app.use(bodyParser.urlencoded({ extended: true }));

const urlencodedParser = bodyParser.urlencoded({extended: true});

app.post("/api/user", urlencodedParser, (req, res) => {
  res.send("Je bestelling is verstuurd!")
  console.log(req.body)
  const persGegevens = req.body

  const string = JSON.stringify(persGegevens, null, 10)

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

// app.use(bodyParser.json())

// const jsonParser = bodyParser.json()

// app.post("/api/user", jsonParser, (req, res) => {
//   res.send("Je bestelling is verstuurd")
//   console.log(req.body)


  app.listen(port);

  console.log(port)
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


