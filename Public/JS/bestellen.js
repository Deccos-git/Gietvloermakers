// Adviesgesprek

function vraag(){
    const nameVraag = document.getElementById("vraag-naam").value
    const emailVraag = document.getElementById("vraag-email").value
    const vraagVraag = document.getElementById("vraag-textarea").value

    if(nameVraag == ""){
        alert("Vergeet niet uw naam in te vullen")
    } 

    if(emailVraag == ""){
        alert("Vergeet niet uw emailadres in te vullen")
    } 

    // Mail naar Karel
db.collection("mail").doc().set({
    to: "info@gietvloermakers.nl", 
    cc: "gvbeusekom84@hotmail.com",
message: {
subject: `Vraag over gietvloer op Gietvloermakers`,
html: `<h2>Naam</h2> ${nameVraag}<br>
        <h2>Emailadres</h2>${emailVraag}<br>
        <h2>Vraag</h2>${vraagVraag}<br>
        `,
}
        
}).catch((err) => {
    console.log(err)
}).then(() => {
    window.open("bedankt-vraag.html", "_self")
})
}