//Prijs berekenen

function bereken(){

    // m2
    const m2 = document.getElementById("m2");

    const m2value = m2.value;

            // m2 naar localStorage
            localStorage.setItem('prijs-m2', m2value)


    let prijsVariable = 0
    if (m2value == 0){
        alert("U bent vergeten om uw gietvloer oppervlakte in te vullen")
    }
   else if (m2value > 0 && m2value < 11){
        prijsVariable = 454
    } else if (m2value > 10 && m2value < 16) {
        prijsVariable = 523    
    } else if (m2value > 15 && m2value < 21) {
        prijsVariable = 593  
    } else if (m2value > 20 && m2value < 26) {
        prijsVariable = 815   
    } else if (m2value > 25 && m2value < 31) {
        prijsVariable = 884   
    } else if (m2value > 30 && m2value < 36) {
        prijsVariable = 953 
    } else if (m2value > 35 && m2value < 41) {
        prijsVariable = 1023   
    } else if (m2value > 40 && m2value < 46) {
        prijsVariable = 1245   
    } else if (m2value > 45 && m2value < 51) {
        prijsVariable = 1314
    } else if (m2value > 50 && m2value < 56) {
        prijsVariable = 1546
    } else if (m2value > 55 && m2value < 61) {
        prijsVariable = 1616
    } else if (m2value > 60 && m2value < 66) {
        prijsVariable = 1837
    } else if (m2value > 65 && m2value < 71) {
        prijsVariable = 1907
    } else if (m2value > 70 && m2value < 76) {
        prijsVariable = 1976 
    } else if (m2value > 75 && m2value < 81) {
        prijsVariable = 2045    
    } else if (m2value > 80 && m2value < 91) {
        prijsVariable = 2336  
    } else if (m2value > 90 && m2value < 96) {
        prijsVariable = 2406   
    } else if (m2value > 95 && m2value < 101) {
        prijsVariable = 2475  
    } else if (m2value > 100 && m2value < 106) {
        prijsVariable = 2860 
    } else if (m2value > 105 && m2value < 111) {
        prijsVariable = 2920   
    } else if (m2value > 110 && m2value < 116) {
        prijsVariable = 2998   
    } else if (m2value > 115 && m2value < 121) {
        prijsVariable = 3068
    } else if (m2value > 120 && m2value < 126) {
        prijsVariable = 3290
    } else if (m2value > 125 && m2value < 131) {
        prijsVariable = 3359
    } else if (m2value > 130 && m2value < 136) {
        prijsVariable = 3428
    } else if (m2value > 135 && m2value < 141) {
        prijsVariable = 3498
    } else if (m2value > 140 && m2value < 146) {
        prijsVariable = 3720
    } else if (m2value > 145 && m2value < 151) {
        prijsVariable = 3789                           
    } else {
        alert (" Uw aanvraag is dermate groot, dat wij u willen vragen even contact op te nemen met een van onze adviseurs op info@gietvloermakers.nl of 06 432 378 66")     
    }

    const m2Number =  parseInt(prijsVariable, 10)

    const prijs = document.getElementById("prijs-vloer");

    const m2Euro = "€ " + m2Number

    prijs.innerHTML = m2Euro;

    // Assistentie
    const ass = document.getElementById("assistentie");
    const assOptions = ass.options;
    const assSelect = assOptions[assOptions.selectedIndex].value;

    console.log(assSelect)  
    const assNumber = parseInt(assSelect, 10)

            // Assistentie naar localStorage
            localStorage.setItem('assistentie', assSelect)

    const prijsAssistentie = document.getElementById("prijs-assistentie");
    prijsAssistentie.innerHTML = "€ " + assNumber;

    //Gereedschappen
    const tools = document.querySelectorAll(".tool")

    const arrayTools = [];

    const arrayID = [];
            
  
    tools.forEach(t => {
    
        if(t.checked == true){
    const toolPrijs = t.value;

    const toolID = t.id

    arrayID.push(toolID) 

    const toolNumber = parseInt(toolPrijs, 10)

    arrayTools.push(toolNumber)
    
    }   
    }) 

            // Assistentie naar localStorage
            localStorage.setItem('tools', arrayID)

    const DOM = document.getElementById("prijs-gereedschappen");

    function getSum(total, num) {
        return total + num;
      }
    const toolTotal = arrayTools.reduce(getSum, 0)

    DOM.innerHTML = "€ " + toolTotal

        // Totaal

const totaal = document.getElementById("totaal");

const totaalEuro =  m2Number + assNumber + toolTotal

totaal.innerHTML = "€ " + totaalEuro 
    
};

// Naar controleren

function bestel(){
   const totaal = document.getElementById("totaal")
   localStorage.setItem('totaal-prijs', totaal.innerHTML)

    window.open("controleer.html", "_self")
}

// Gekozen kleur inladen
// const bestelnone = document.getElementById("bestel");
// bestelnone.style.display = "none";

const kleurSelect = document.getElementById("kleurselect");

const kleurKeuze = localStorage.getItem('kleur');

kleurSelect.innerHTML = kleurKeuze;


        // Vloerkleur naar localstorage voor controle
        const kleurID = document.getElementsByClassName("colour");
        // kleurID.forEach(colour => {
        //     const colourID = colour.id

        //     console.log(colourID)

        localStorage.setItem('vloerkleur', kleurID.id)
    

