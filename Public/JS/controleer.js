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