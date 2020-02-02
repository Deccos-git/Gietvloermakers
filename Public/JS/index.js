// Hamburgermenu
function hamburgerMenu(){
    const menuItems = document.getElementById("menuItems");
    if (menuItems.style.display = "none"){
    menuItems.style.display = "flex"
    } else {
    menuItems.style.display = "none" 
    }
}

//Test
const testGegevens = { "aantalM2": "5", "kleur": "ind-bt-grijs", "assistentie": "Ja, graag (€500)", "gereedschappen": "Plastic zeil", "totale-prijs": "€ 964", "voornaam": "Gijs", "Achternaam": "Beusekom", "telefoonnummer": "+31624409843", "email": "gvbeusekom84@hotmail.com" }

const test = JSON.stringify(testGegevens, (key,value) =>{

    if (typeof value === "string"){
        return value.toUpperCase();
    } else {
        return value
    }

}, 1)




 