// Adviesgesprek

function vraag(){
    const nameVraag = document.getElementById("vraag-naam").value
    const emailVraag = document.getElementById("vraag-email").value
    const phoneVraag = document.getElementById("vraag-phone").value
    const vraagVraag = document.getElementById("vraag-textarea").value

    const nameInput = document.getElementById("vraag-naam")
    const emailInput = document.getElementById("vraag-email")
    const phoneInput = document.getElementById("vraag-phone")

    if(nameVraag === ""){
        nameInput.style.borderColor = "red"
        nameInput.scrollIntoView()
    } else if (phoneVraag === ""){
        phoneInput.style.borderColor = "red"
        phoneInput.scrollIntoView()
        emailInput.style.borderColor = "lightgray"
    } else if (emailVraag === ""){
        emailInput.style.borderColor = "red"
        emailInput.scrollIntoView()
        nameInput.style.borderColor = "lightgray"
    } else {
        emailInput.style.borderColor = "lightgray"

        sendMailToGietvloermakers(nameVraag, emailVraag, phoneVraag, vraagVraag)

    };
};

function sendMailToGietvloermakers(nameVraag, emailVraag, phoneVraag, vraagVraag){

    db.collection("mail").doc().set({
        to: "info@gietvloermakers.nl", 
        cc: "gvbeusekom84@hotmail.com",
    message: {
    subject: `Vraag over gietvloer op Gietvloermakers`,
    html: `<h2>Naam</h2> ${nameVraag}<br>
            <h2>Emailadres</h2>${emailVraag}<br>
            <h2>Telefoonnummer</h2>${phoneVraag}<br>
            <h2>Vraag</h2>${vraagVraag}<br>
            `,
    }
            
    }).catch((err) => {
        console.log(err)
    }).then(() => {
        sendMailToClient(nameVraag, emailVraag, phoneVraag, vraagVraag)
    });
    };

function sendMailToClient(nameVraag, emailVraag, phoneVraag, vraagVraag){

    db.collection("mail").doc().set({
        to: emailVraag, 
        cc: "info@gietvloermakers.nl",
    message: {
    subject: `Jouw adviesvraag op Gietvloermakers`,
    html: `<h2>Bedankt voor je adviesvraag op Gietvloermakers.</h2>
            Ik zal zo spoedig mogelijk contact met je opnemen om je vraag door te spreken. <br>
            Als je vragen heeft kun je mij altijd even bellen op 06 432 378 66 
            of een mailtje sturen naar info@gietvloermakers.nl <br><br>

            <h2>Jouw adviesvraag</h2>
            
            <h2>Naam</h2> ${nameVraag}<br>
            <h2>Emailadres</h2>${emailVraag}<br>
            <h2>Telefoonnummer</h2>${phoneVraag}<br>
            <h2>Vraag</h2>${vraagVraag}<br><br>

            Met vriendelijke groet, <br><br>

            Karel<br><br>
            <a href="www.gietvloermakers.nl">www.gietvloermakers.nl</a>
            `,
    }
            
    }).catch((err) => {
        console.log(err)
    }).then(() => {
        window.open("bedankt-vraag.html", "_self")
    })
};