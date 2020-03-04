const functions = require('firebase-functions');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(express.static('Public'));

const urlencodedParser = bodyParser.urlencoded({extended: true});

app.post("/api/user", urlencodedParser, (req, res) => {
 
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
          pass: 'Gietvloermakers1984!'
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

      const html = '<html><style>body{display:flex; flex-direction: column; align-items: center; background-image: url(../Images/woonkamer.jpg);background-attachment: fixed;background-repeat: no-repeat;background-position: center;background-size: cover; padding: 15px; margin-top: 200px; display:flex; flex-direction: column; align-items: center; } h1{ color: #A00025;} #bedankt{ background-color: rgba(255,255,255,0.9); border: 1px solid #ffffff; border-radius: 15px; display:flex; flex-direction: column; align-items: center; padding: 10px;}</style><head><body><div id="bedankt" ><h1>Bedankt voor uw bestelling</h1><p>Uw bestelling is verzonden. U ontvangt uw bestelling zo spoedig mogelijk.<p><a id="logo" href="../index.html"><p>Terug naar</p><img src="../Images/logo350x50Rood.png" height="50px" width="300"></a></div><body><head><html>'
      res.send(html)
    });

exports.app1 = functions.https.onRequest(app);

