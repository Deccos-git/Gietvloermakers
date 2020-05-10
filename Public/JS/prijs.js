// localStorage.clear()

// m2 uit localstorage
const m2 = document.getElementById("m2");
const m2Storage = localStorage.getItem('prijs-m2');

if(m2 == null){
    console.log("disregard error")
} else {
    m2.value = m2Storage
}

// // 100 km rond Zwolle -alert bij Assistentie
function zwolle(){

    const ass = document.getElementById("assistentie");
    const assOptions = ass.options;
    const assSelect = assOptions[assOptions.selectedIndex].value;

    if (assSelect == 500){
    const zwolle = document.getElementById("zwolle");
    zwolle.style.display = "block"
    } else if(assSelect == 0){
        zwolle.style.display = "none"
    } else {
        console.log("disregard error")
    }
}

// // Assistentie uit localstorage
const ass = document.getElementById("assistentie");
const assStorage = localStorage.getItem('assistentie');

if(assStorage == null){
    console.log("disregard error")
} else {
    ass.value = assStorage
}

//Prijs berekenen
function bereken(){

    // kleurkeuze alert
    const kleurSelect = document.getElementById("kleurselect");

    // m2
    const m2 = document.getElementById("m2");

    const m2value = m2.value;

            // m2 naar localStorage
            localStorage.setItem('prijs-m2', m2value)

    // Alert uit DOM halen        
    const alert = document.getElementById("alert-m2")

    // Prijs variabelen doorlopen
    let prijsVariable = 0

    if (m2value > 0 && m2value < 11){
        prijsVariable = 556
    } else if (m2value > 10 && m2value < 16) {
        prijsVariable = 645  
    } else if (m2value > 15 && m2value < 21) {
        prijsVariable = 734 
    } else if (m2value > 20 && m2value < 26) {
        prijsVariable = 1009   
    } else if (m2value > 25 && m2value < 31) {
        prijsVariable = 1098   
    } else if (m2value > 30 && m2value < 36) {
        prijsVariable = 1186 
    } else if (m2value > 35 && m2value < 41) {
        prijsVariable = 1275   
    } else if (m2value > 40 && m2value < 46) {
        prijsVariable = 1551   
    } else if (m2value > 45 && m2value < 51) {
        prijsVariable = 1831
    } else if (m2value > 50 && m2value < 56) {
        prijsVariable = 1920
    } else if (m2value > 55 && m2value < 61) {
        prijsVariable = 2009
    } else if (m2value > 60 && m2value < 66) {
        prijsVariable = 2284
    } else if (m2value > 65 && m2value < 71) {
        prijsVariable = 2373
    } else if (m2value > 70 && m2value < 76) {
        prijsVariable = 2462 
    } else if (m2value > 75 && m2value < 81) {
        prijsVariable = 2550    
    } else if (m2value > 80 && m2value < 91) {
        prijsVariable = 2914  
    } else if (m2value > 90 && m2value < 96) {
        prijsVariable = 3387   
    } else if (m2value > 95 && m2value < 101) {
        prijsVariable = 3476  
    } else if (m2value > 100 && m2value < 106) {
        prijsVariable = 3751 
    } else if (m2value > 105 && m2value < 111) {
        prijsVariable = 3840   
    } else if (m2value > 110 && m2value < 116) {
        prijsVariable = 3929   
    } else if (m2value > 115 && m2value < 121) {
        prijsVariable = 4017
    } else if (m2value > 120 && m2value < 126) {
        prijsVariable = 4293
    } else if (m2value > 125 && m2value < 131) {
        prijsVariable = 4382
    } else if (m2value > 130 && m2value < 136) {
        prijsVariable = 4470
    } else if (m2value > 135 && m2value < 141) {
        prijsVariable = 4559
    } else if (m2value > 140 && m2value < 146) {
        prijsVariable = 4834
    } else if (m2value > 145 && m2value < 151) {
        prijsVariable = 4923                           
    } else if (m2value > 150){
        alert.innerHTML = " Uw aanvraag is dermate groot, dat wij u willen vragen even contact op te nemen met een van onze adviseurs op info@gietvloermakers.nl of 06 432 378 66" 
        window.location.href = "#aantal-m2";  
        alert.style.display = "block" 
        m2.style.borderColor = "red"
        alert.style.color = "white"
        alert.style.padding = "5px" 
    } else {
        console.log("err")
    }

    const m2Number =  parseInt(prijsVariable, 10)

    const prijs = document.getElementById("prijs-vloer");

    const m2Euro = "€ " + m2Number

    prijs.innerHTML = m2Euro

    // Assistentie
    const ass = document.getElementById("assistentie");

    const assOptions = ass.options;

    const assValue = assOptions[assOptions.selectedIndex]

    const assSelect = assValue.value;
  
    const assNumber = parseInt(assSelect, 10)

            // Assistentie naar localStorage
            localStorage.setItem('assistentie', assSelect)

    const prijsAssistentie = document.getElementById("prijs-assistentie");
    prijsAssistentie.innerHTML = "€ " + assNumber 

    //Gereedschappen
    const tools = document.querySelectorAll(".tool")

            // array met tool prijs
    const arrayTools = [];
            // array met tool id's
    const arrayID = [];
            
    tools.forEach(t => {
    
        if(t.checked == true){
    const toolPrijs = t.value;

    const toolID = t.id

    arrayID.push(toolID) 

    const toolNumber = parseFloat(toolPrijs, 10)

    arrayTools.push(toolNumber)
    
    }   
    }) 

            // gereedschappen naar localStorage
            localStorage.setItem('bestelItem', arrayID)

            const DOM = document.getElementById("prijs-gereedschappen");

            function getSum(total, num) {
                return total + num;
            }

            const toolTotal = arrayTools.reduce(getSum, 0)

            if(!toolTotal == 0){

            const extraKosten = toolTotal + 15

            DOM.innerHTML = "€ " + extraKosten.toFixed(2) 

            // Totaal

            const totaal = document.getElementById("totaal");

            const totaalEuro =  m2Number + assNumber + extraKosten

            totaal.innerHTML = "€ " + totaalEuro.toFixed(2) + "  <h5>(Incl. btw)</h5>";

            } else {
            DOM.innerHTML = "€ " + toolTotal.toFixed(2)  

            // Totaal

            const totaal = document.getElementById("totaal");

            const totaalEuro =  m2Number + assNumber + toolTotal

            totaal.innerHTML = "€ " + totaalEuro.toFixed(2) + "  <h5>(Incl. btw)</h5>";
            }

      // Anchor link naar prijsoverzicht
      if (m2value == 0){
        window.location.href = "#aantal-m2";
        m2.style.borderColor = "red"
        alert.style.display = "block"
      } else if (kleurSelect.innerHTML == ""){
        kleurSelect.style.borderWidth = "1px"
        kleurSelect.style.borderStyle = "solid"
        kleurSelect.style.borderColor = "rgb(206, 74, 105)"
        kleurSelect.style.backgroundColor = "rgb(206, 74, 105)"
        kleurSelect.style.color = "white"
        kleurSelect.innerHTML = "Nog geen kleur gekozen? Bekijk de <a href='kleuren.html' >Kleurencollectie</a>"
        window.location.href = "#uw-kleur"
      } else {
        window.location.href = "#uw-prijs";
      }
};

// Naar bellen

function verder(){
    
    window.open("mijn-gietvloer.html", "_self")
}

// Naar controleren

function bestel(){
   const totaal = document.getElementById("totaal");
   localStorage.setItem('totaal-prijs', totaal.innerHTML);
   const bereken = document.getElementById("button2");
   const controleer = document.getElementById("button3");
   const vloerPrijs = document.getElementById("prijs-vloer");
   const prijs = document.getElementsByClassName("prijs");

   if (totaal.innerHTML == "€0"){
       function berekenen(){
        bereken.click();
        prijs.forEach( p => {
            p.style.color = "#A00025"
        })

       }
       berekenen().then( () => {

        controleer.click()
        });
    
   } else if (vloerPrijs.innerHTML == "€ 0"){
    
    const vloerAlert = document.getElementById("vloer-alert")

    vloerPrijs.style.color = "rgb(206, 74, 105)"
    vloerAlert.style.display = "block"
    window.location.href = "#totaal"
    } else {
    window.open("controleer.html", "_self")
   } 
};

// Gekozen kleur inladen
const kleurSelect = document.getElementById("kleurselect");

const kleurKeuze = localStorage.getItem('kleur');

if(kleurSelect == null){
    console.log("disregard error")
} else {
    kleurSelect.innerHTML = kleurKeuze;
}


        // Vloerkleur naar localstorage voor controle
        const kleurID = document.getElementsByClassName("colour");

        if(kleurID.length == 0){
            console.log("disregard error")
        } else {
            const kleurSend = kleurID[0].id

            localStorage.setItem('vloerkleur', kleurSend)
        }

 // Gereedschappen uit localstorage
const winkeltje = document.getElementsByClassName("tool");

const winkeltjeArray = Array.from(winkeltje);

winkeltjeArray.forEach(w => {
   
    const tool = w.id

        const storage = localStorage.getItem('bestel-item' + tool);

        const afvinken = document.getElementById(storage)

        if(afvinken == null){
            return console.log("Disregard error")
        } else {
            afvinken.checked = true
        }      
})


