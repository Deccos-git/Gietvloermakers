// localStorage.clear()


// Utilities

!function nextStep(){

    const stepButtons = document.getElementsByClassName("next-step")
    const stepDivs = document.getElementsByClassName("step-div")

    stepButtons[0].addEventListener("click", () => {
        stepDivs[0].style.display = "none"
        stepDivs[1].style.display = "flex"
    });

    stepButtons[1].addEventListener("click", () => {
        stepDivs[1].style.display = "none"
        stepDivs[2].style.display = "flex"
        m2ToLocalStorage()
        priceM2ToLocaleStorage()
    });

    stepButtons[2].addEventListener("click", () => {
        stepDivs[2].style.display = "none"
        stepDivs[3].style.display = "flex"
        assistanceToSelectionForm()
        assistanceToLocalStorage()
        assistanceToPriceTable()
    });

    stepButtons[3].addEventListener("click", () => {
        stepDivs[3].style.display = "none"
        stepDivs[4].style.display = "flex"
        // toolsToLocalStorage()
        // toolsToSelection()
        // toolsToPriceTable()
        toolboxToLocalStorage()
        toolboxToSelection()
        toolboxToPriceTable()
        totalPriceTable()
    });

    stepButtons[4].addEventListener("click", () => {
        stepDivs[4].style.display = "none"
        stepDivs[5].style.display = "flex"
    });

    stepButtons[5].addEventListener("click", () => {
        stepDivs[5].style.display = "none"
        stepDivs[6].style.display = "flex"
    });

}();

!function previousStep(){

    const backButtons = document.getElementsByClassName("step-back")
    const stepDivs = document.getElementsByClassName("step-div")

    backButtons[0].addEventListener("click", () => {
        stepDivs[1].style.display = "none"
        stepDivs[0].style.display = "flex"
    });

    backButtons[1].addEventListener("click", () => {
        stepDivs[2].style.display = "none"
        stepDivs[1].style.display = "flex"
    });

    backButtons[2].addEventListener("click", () => {
        stepDivs[3].style.display = "none"
        stepDivs[2].style.display = "flex"
    });

    backButtons[3].addEventListener("click", () => {
        stepDivs[4].style.display = "none"
        stepDivs[3].style.display = "flex"
    });

    backButtons[4].addEventListener("click", () => {
        stepDivs[5].style.display = "none"
        stepDivs[4].style.display = "flex"
    });

    backButtons[5].addEventListener("click", () => {
        stepDivs[6].style.display = "none"
        stepDivs[5].style.display = "flex"
    });

}();

// Set order items to local storage

    // Color

        // Gebeurt in kleurcollectie

    // M2

    function m2ToLocalStorage(){

        const m2Input = document.getElementById("m2-input").value
        const m2Selection = document.getElementById("m2-selection")
    
        if(m2Input != 0){
            localStorage.setItem("m2", m2Input)
            m2Selection.innerText = m2Input
        } else if (m2Input === ""){
            m2Selection.innerText = 0
        };
    };

    // Assistence

    function assistanceToLocalStorage(){

        const assistance = document.getElementById("assistentie");
        const assOptions = assistance.options;
        const assValue = assOptions[assOptions.selectedIndex]
        const assSelect = assValue.value;
    
        localStorage.setItem('assistance', assSelect)

    };
     
    // Tools

    function toolboxToLocalStorage(){

        const select = document.getElementById("toolbox-select");
        const options = select.options;
        const value = options[options.selectedIndex]
        const selected = value.value;
    
        localStorage.setItem("ToolPrice", selected)
    
    };

    // function toolsToLocalStorage(){

    //     const priceArray = []
    //     const idArray = []

    //     const tools = document.querySelectorAll(".tool")

    //     tools.forEach(tool => {
        
    //         if(tool.checked == true){
    //             const toolPrice = tool.value;
    //             const toolNumber = parseFloat(toolPrice, 10)

    //             priceArray.push(toolNumber)
    //             idArray.push(tool.id)
            
    //         };  
    //     }); 

    //     localStorage.setItem("ToolPrice", priceArray)
    //     localStorage.setItem("ToolID", idArray)
    // };


// Set previous selected items in DOM from local storage

    // Color

    !function colourFromLocalStorage(){

        const colourDiv = document.getElementById("selected-colour")

        const color = localStorage.getItem('kleur');
        const style = localStorage.getItem('style')

        const colorP = document.createElement("p")
        const styleP = document.createElement("p")

        if(color === null || style === null){
            colorP.style.display = "none"
            styleP.innerHTML = `Bekijk de <a href="kleurencollectie.html">kleurencollectie</a>`
        } else {
            colorP.innerText = `Kleur: ${color}`
            styleP.innerText = `Stijl: ${style}`
        }

        colourDiv.appendChild(styleP)
        colourDiv.appendChild(colorP)

        colourDiv.style.backgroundImage = `url("Arturo-kleuren/${color}.jpg")`
    }();

    // M2

    !function setDefaultM2(){

        const m2Input = document.getElementById("m2-input")

        const m2 = localStorage.getItem('m2')

            if(m2 === ""){
                m2Input.value = 0
            } else {
                m2Input.value = m2
            };
    }();

    // Assistence

    !function setDefaultAssistance(){

        const assistanceLocalStorage = localStorage.getItem("assistance")
        const assistance = document.getElementById("assistentie")

        if(assistanceLocalStorage === "500"){
            assistance.selectedIndex = 1
        } else {
            assistance.selectedIndex = 0
        };

    }();

     // Tools

    !function preselectToolboxFromLocaleStorage(){

        const toolsDOM = document.getElementsByClassName("toolbox-select")
        const tolboxFromLocalStorage = localStorage.getItem("ToolPrice")

    
        if(tolboxFromLocalStorage === "55"){
            toolsDOM.selectedIndex = 1
        } else {
            toolsDOM.selectedIndex = 0
        };
        
    }();

    // !function preselectToolsFromLocaleStorage(){

    //     const toolsDOM = document.getElementsByClassName("tool");

    //     const toolsArray = Array.from(toolsDOM);

    //     toolsArray.forEach(toolDOM => {

    //         const storageID = localStorage.getItem("ToolID");

    //         const storageIDArray = storageID.split(",")

    //         storageIDArray.forEach(toolStorage => {

    //             if(toolDOM.id === toolStorage){

    //             toolDOM.checked = true 
    //             }; 
    //         });
    //     });
    // }();

// Fill selectionform

    // Color

    !function fillSelectionFormColor(){
        const colorSelection = document.getElementById("color-selection")
        const m2Selection = document.getElementById("m2-selection")
        const color = localStorage.getItem('kleur');
        const style = localStorage.getItem('style')
        const m2 = localStorage.getItem('m2')
    
        if(color === null){
            colorSelection.innerHTML = `Bekijk de <a href="kleurencollectie.html">kleurencollectie</a>`
        } else {
            colorSelection.innerHTML = `<b>Stijl</b>: ${style} <br> <b>Kleur</b>: ${color}`
        }
    
        if(m2 === null){
            m2Selection.innerText = "0"
            console.log(m2Selection.innerText)
        } else {
            m2Selection.innerText = m2
        };
    }();

    // M2

    function priceM2ToPriceTable(prijsVariable){

        const priceM2PriceTable = document.getElementById("prijs-vloer")
    
        const priceClean =  parseInt(prijsVariable, 10)
    
        priceM2PriceTable.innerHTML = `€${priceClean}`
    
    };

    // Assistance

    function assistanceToSelectionForm(){

        const assistanceSelection = document.getElementById("assistance-selection")
        const assistanceLocalStorage = localStorage.getItem("assistance")
    
        if(assistanceLocalStorage === "500"){
            assistanceSelection.innerText = "Ja (€500)" 
        } else {
            assistanceSelection.innerText = "Nee"
        };
    };

    // Tools

    function toolboxToSelection(){

        const toolSelection = document.getElementById("tools-selection")
       
        const toolsFromStorage = localStorage.getItem("ToolPrice")

        if(toolsFromStorage === '55'){
            toolSelection.innerText = 'Ja (€55)'
        } else {
            toolSelection.innerText = 'Nee'
        }
    };


    // function toolsToSelection(){

    //     const toolSelection = document.getElementById("tools-selection")
    //     const toolUl = document.createElement("ul")

    //     toolSelection.innerText = ""

    //     const toolsFromStorage = localStorage.getItem("ToolID")

    //     let toolLi = ""

    //     if(toolsFromStorage === ""){
    //         toolP = document.createElement("p")
    //         toolP.innerText = "Geen"
    //         toolSelection.appendChild(toolP)
    //     } else {

    //         const tools = toolsFromStorage.split(",")

    //         tools.forEach(tool => {

    //         toolLi = document.createElement("li")

    //         toolLi.innerText = tool

    //         toolUl.appendChild(toolLi)

    //         });

    //         toolSelection.appendChild(toolUl)
    //     };
    // };



// Fill priceform

    // Color

    // M2

    function priceM2ToLocaleStorage(){

        const m2value = document.getElementById("m2-input").value
    
        let prijsVariable = 0
    
        if (m2value > 0 && m2value < 11){
            prijsVariable = 678
        } else if (m2value > 10 && m2value < 16) {
            prijsVariable = 786 
        } else if (m2value > 15 && m2value < 21) {
            prijsVariable = 895 
        } else if (m2value > 20 && m2value < 26) {
            prijsVariable = 1230   
        } else if (m2value > 25 && m2value < 31) {
            prijsVariable = 1338   
        } else if (m2value > 30 && m2value < 36) {
            prijsVariable = 1445 
        } else if (m2value > 35 && m2value < 41) {
            prijsVariable = 1553   
        } else if (m2value > 40 && m2value < 46) {
            prijsVariable = 1889   
        } else if (m2value > 45 && m2value < 51) {
            prijsVariable = 2231
        } else if (m2value > 50 && m2value < 56) {
            prijsVariable = 2339
        } else if (m2value > 55 && m2value < 61) {
            prijsVariable = 2448
        } else if (m2value > 60 && m2value < 66) {
            prijsVariable = 2783
        } else if (m2value > 65 && m2value < 71) {
            prijsVariable = 2891
        } else if (m2value > 70 && m2value < 76) {
            prijsVariable = 2999 
        } else if (m2value > 75 && m2value < 81) {
            prijsVariable = 3106    
        } else if (m2value > 80 && m2value < 91) {
            prijsVariable = 3549  
        } else if (m2value > 90 && m2value < 96) {
            prijsVariable = 4126   
        } else if (m2value > 95 && m2value < 101) {
            prijsVariable = 4237  
        } else if (m2value > 100 && m2value < 106) {
            prijsVariable = 4569 
        } else if (m2value > 105 && m2value < 111) {
            prijsVariable = 4678   
        } else if (m2value > 110 && m2value < 116) {
            prijsVariable = 4786   
        } else if (m2value > 115 && m2value < 121) {
            prijsVariable = 5003
        } else if (m2value > 120 && m2value < 126) {
            prijsVariable = 5229
        } else if (m2value > 125 && m2value < 131) {
            prijsVariable = 5338
        } else if (m2value > 130 && m2value < 136) {
            prijsVariable = 5445
        } else if (m2value > 135 && m2value < 141) {
            prijsVariable = 5554
        } else if (m2value > 140 && m2value < 146) {
            prijsVariable = 5889
        } else if (m2value > 145 && m2value < 151) {
            prijsVariable = 5997                           
        } else if (m2value > 150){
            alert.innerHTML = " Uw aanvraag is dermate groot, dat wij u willen vragen even contact op te nemen met een van onze adviseurs op info@gietvloermakers.nl of 06 432 378 66" 
        } else {
            console.log("err")
        }
    
        localStorage.setItem("PriceM2", prijsVariable)
    
        priceM2ToPriceTable(prijsVariable)
    
        return prijsVariable
    
    };

    // Assistance

    function assistanceToPriceTable(){

        const assistancePriceTable = document.getElementById("prijs-assistentie")

        const assistanceFromStorage = localStorage.getItem("assistance")
    
        if(assistanceFromStorage === "500"){
            assistancePriceTable.innerHTML = "€500"
        } else {
            assistancePriceTable.innerHTML = "€0"
        };
    
    };

    // Tools

    function toolboxToPriceTable(){

        const toolsPriceTable = document.getElementById("prijs-gereedschappen")

        const toolsPrice = localStorage.getItem("ToolPrice")

        if(toolsPrice=== "55"){
            toolsPriceTable.innerHTML = "€55"
        } else {
            toolsPriceTable.innerHTML = "€0"
        };
    };


    // function toolsToPriceTable(){

    //     const toolsPriceTable = document.getElementById("prijs-gereedschappen")

    //     const toolsPrice = localStorage.getItem("ToolPrice")

    //     if(toolsPrice === ""){

    //         toolsPriceTable.innerHTML = "€" + 0

    //         return 0

    //     } else {

    //         const priceArray = toolsPrice.split(",")

    //         const numberArray = []

    //         priceArray.forEach(price => {
    //             const priceNumber = parseFloat(price)

    //             numberArray.push(priceNumber)
    //         })

    //         const sum = numberArray.reduce(function(a, b){
    //             return a + b;
    //         }, 0);

    //         const extraCosts = sum + 15

    //         toolsPriceTable.innerHTML = "€" + extraCosts.toFixed(2) 

    //         return extraCosts

    //     };

    // };


    // Total price

    function assistanceTotalPrice(){

        const assistanceFromStorage = localStorage.getItem("assistance")

        if(assistanceFromStorage === "500"){
            return 500
        } else {
            return 0
        };
    };

    function toolboxTotalPrice(){

        const toolsPrice = localStorage.getItem("ToolPrice")

        if(toolsPrice === "55"){
            return 55
        } else {
            return 0
        };

    };

    function totalPriceTable(){

        const total = priceM2ToLocaleStorage() + assistanceTotalPrice() + toolboxTotalPrice()

        const totalPrice = document.getElementById("totaal")
        const priceSelection = document.getElementById("price-selection")

        totalPrice.innerText = "€" + total.toFixed(2) 
        priceSelection.innerText = "€" + total.toFixed(2)

    };

// Complete order

!function sendOrder(){

    const button = document.getElementById("order-button")

    button.addEventListener("click", () => {

        const m2 = document.getElementById("m2-selection").innerHTML
        const color = document.getElementById("color-selection").innerHTML
        const assistance = document.getElementById("assistance-selection").innerHTML
        const tools = document.getElementById("tools-selection").innerHTML
        const price = document.getElementById("price-selection").innerHTML
        const name = document.getElementById("name").value
        const street = document.getElementById("street").value
        const phone = document.getElementById("phone").value
        const email = document.getElementById("email").value
        const zip = document.getElementById("zip").value
        const town = document.getElementById("town").value

        sendMailToGietvloermakers(name, street, zip, town, phone, email, m2, color, assistance, tools, price)

    });
}();

function sendMailToGietvloermakers(name, street, zip, town, phone, email, m2, color, assistance, tools, price){
    db.collection("mail").doc().set({
        to: "info@gietvloermakers.nl", 
        cc: "gvbeusekom84@hotmail.com",
    message: {
    subject: `Nieuwe bestelling op Gietvloermakers`,
    html: `<h2>Naam</h2> ${name}<br>
            <h2>Straat & huisnummer</h2>${street}<br>
            <h2>Postcode</h2>${zip}<br>
            <h2>Woonplaats</h2>${town}
            <h2>Telefoonnummer</h2>${phone}<br>
            <h2>Emailadres</h2>${email}<br>
            <h2>Aantal m2</h2>${m2}<br>
            <h2>Kleur</h2>${color}<br>
            <h2>Assistentie</h2>${assistance}<br>
            <h2>Gereedschappen</h2>${tools}<br>
            <h2>Totale prijs</h2>${price}<br>
            `,
    }
            
    }).catch((err) => {
        console.log(err)
    }).then(() => {
        sendMailToClient(name, street, zip, town, phone, email, m2, color, assistance, tools, price)
    })
};

function sendMailToClient(name, street, zip, town, phone, email, m2, color, assistance, tools, price){
    db.collection("mail").doc().set({
        to: email, 
        cc: "info@gietvloermakers.nl",
    message: {
    subject: `Jouw bestelling op Gietvloermakers`,
    html: ` <h2>Bedankt voor je bestelling op Gietvloermakers.</h2>
            Wij zullen spoedig contact met je opnemen om de bestelling even met je door te nemen. <br>
            Als je vragen hebt kun je ons altijd even bellen op 06 432 378 66 
            of een mailtje sturen naar info@gietvloermakers.nl <br><br>

            <h2>Jouw bestelling</h2>
            
            <h3>Naam</h3> ${name}<br> 
            <h3>Straat & huisnummer</h3>${street}<br>
            <h3>Postcode</h3>${zip}<br>
            <h3>Woonplaats</h3>${town}
            <h3>Telefoonnummer</h3>${phone}<br>
            <h3>Emailadres</h3>${email}<br>
            <h3>Aantal m2</h3>${m2}<br>
            <h3>Kleur</h3>${color}<br>
            <h3>Assistentie</h3>${assistance}<br>
            <h3>Gereedschappen</h3>${tools}<br>
            <h3>Totale prijs</h3>${price}<br><br>

            Met vriendelijke groet, <br><br>

            Het Gietvloermakers team.<br><br>
            <a href="www.gietvloermakers.nl">www.gietvloermakers.nl</a>
            `,
    }
            
    }).catch((err) => {
        console.log(err)
    }).then(() => {
        window.open("bedankt.html", "_self")
    })
};
