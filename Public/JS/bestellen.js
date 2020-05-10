// Bestelling uit localStorage halen
const aantalM2 = document.getElementById("aantalM2")
const m2Local = localStorage.getItem('prijs-m2')
aantalM2.value = m2Local;

const kleur = document.getElementById("kleur");
const kleurLocal = localStorage.getItem('vloerkleur');

kleur.value = kleurLocal

const assistentie = document.getElementById("assistentie");
const assistentieLocal = localStorage.getItem('assistentie');

if (assistentieLocal == 0){
    assistentie.value = "Nee, bedankt (€0)"
} else {
    assistentie.value = "Ja, graag (€500)"
}

const tools = document.getElementById("gereedschappen");
const toolsLocal = localStorage.getItem('bestelItem');

if(toolsLocal === 0){
    tools.value = "Geen"
} else {
    tools.value = toolsLocal
}

const totaal = document.getElementById("totale-prijs");
const totaalLocal = localStorage.getItem('totaal-prijs');

const totaalClean2 = totaalLocal.replace("<h5>", "")
const totaalClean1 = totaalClean2.replace("</h5>", "")

totaal.value = totaalClean1


// Email nieuwe bestelling

function verzenden(){

    const m2 = document.getElementById("aantalM2").value
    const kleur = document.getElementById("kleur").value
    const assistentie = document.getElementById("assistentie").value
    const gereedschappen = document.getElementById("gereedschappen").value
    const totalePrijs = document.getElementById("totale-prijs").value
    const klant = document.getElementById("naam").value
    const straat = document.getElementById("straat").value
    const telefoon = document.getElementById("telefoon").value
    const postcode = document.getElementById("postcode").value
    const emailadres = document.getElementById("email").value


    console.log(m2, kleur,assistentie,gereedschappen,totalePrijs,klant, straat, postcode, emailadres,telefoon)

// Mail naar Karel
db.collection("mail").doc().set({
    to: "info@gietvloermakers.nl", 
    cc: "gvbeusekom84@hotmail.com",
message: {
subject: `Nieuwe bestelling op Gietvloermakers`,
html: `<h2>Naam</h2> ${klant}<br>
        <h2>Straat & huisnummer</h2>${straat}<br>
        <h2>Postcode</h2>${postcode}<br>
        <h2>Telefoonnummer</h2>${telefoon}<br>
        <h2>Emailadres</h2>${emailadres}<br>
        <h2>Aantal m2</h2>${m2}<br>
        <h2>Kleur</h2>${kleur}<br>
        <h2>Assistentie</h2>${assistentie}<br>
        <h2>Gereedschappen</h2>${gereedschappen}<br>
        <h2>Totale prijs</h2>${totalePrijs}<br>
        `,
}
        
}).catch((err) => {
    console.log(err)
}).then(() => {
    window.open("bedankt.html", "_self")
})
}

// Mijn gietvloer

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