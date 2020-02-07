// localStorage.clear()

//dagen
const overzicht1 = document.getElementById("Dag1");
const overzicht2 = document.getElementById("Dag2");
const overzicht3 = document.getElementById("Dag3");
const overzicht4 = document.getElementById("Dag4");
const overzicht5 = document.getElementById("Dag5");

function dag1(){
    overzicht1.style.display = "block";
    overzicht2.style.display = "none";
    overzicht3.style.display = "none";
    overzicht4.style.display = "none";
    overzicht5.style.display = "none";
}

function dag2(){

    overzicht1.style.display = "none";
    overzicht2.style.display = "block";
    overzicht3.style.display = "none";
    overzicht4.style.display = "none";
    overzicht5.style.display = "none";
}

function dag3(){

    overzicht1.style.display = "none";
    overzicht2.style.display = "none";
    overzicht3.style.display = "block";
    overzicht4.style.display = "none";
    overzicht5.style.display = "none";
}

function dag4(){

    overzicht1.style.display = "none";
    overzicht2.style.display = "none";
    overzicht3.style.display = "none";
    overzicht4.style.display = "block";
    overzicht5.style.display = "none";
}

function dag5(){

    overzicht1.style.display = "none";
    overzicht2.style.display = "none";
    overzicht3.style.display = "none";
    overzicht4.style.display = "none";
    overzicht5.style.display = "block";
}

//Modal

    // Modal creeren
    function creerModal (image,youtube,data){
        const DOM = document.getElementById("modalDOM");
                    
        const modalBG = document.createElement("section")
                modalBG.setAttribute("class", "modalBG")
        const kruisje = document.createElement("img")
                kruisje.setAttribute("class", "weg")
                kruisje.setAttribute("src","Images/kruis.png")
                kruisje.setAttribute("height", "28")
                kruisje.setAttribute("width", "55")
        const modalDiv = document.createElement("div")
            modalDiv.setAttribute("class", "modal")
        const div = document.createElement("div")
        const h2 = document.createElement("h2")
        const img = document.createElement("img")
            img.setAttribute("src", image)
            img.setAttribute("height", "158")
            img.setAttribute("width", "210")
        const uitleg = document.createElement("div")
            uitleg.setAttribute("id", "uitleg")
        const uitlegH2 = document.createElement("h2")
        const iframe = document.createElement("iframe")
            iframe.setAttribute("src", youtube)
            iframe.setAttribute("height", "315")
            iframe.setAttribute("width", "420")
        const bestel = document.createElement("div")
        const bestelH2 = document.createElement("h2")
        const shoppingcart = document.createElement("img")
            shoppingcart.setAttribute("class", "bestel-item")
            shoppingcart.setAttribute("data-tool", data)
            shoppingcart.setAttribute("src", "Images/Choppingcart.png")
            shoppingcart.setAttribute("height", "50")
        const vraag = document.createElement("div")
        const vraagH2 = document.createElement("h2")
        const vraagLink = document.createElement("a")
            vraagLink.setAttribute("href", "experts.html")


        h2.innerHTML = "Voorbeeld"
        uitlegH2.innerHTML = "Uitleg"
        bestelH2.innerHTML = "In winkelwagen"
        vraagH2.innerHTML = "Toch nog een vraag?"
        vraagLink.innerHTML = "Neem contact op met onze experts voor meer ondersteuning"

        DOM.appendChild(modalBG)
        modalBG.appendChild(kruisje)
        modalBG.appendChild(modalDiv)
        modalDiv.appendChild(div)
        div.appendChild(h2)
        div.appendChild(img)
        modalDiv.appendChild(uitleg)
        uitleg.appendChild(uitlegH2)
        uitleg.appendChild(iframe)
        modalDiv.appendChild(bestel)
        bestel.appendChild(bestelH2)
        bestelH2.appendChild(shoppingcart)
        modalDiv.appendChild(vraag)
        vraag.appendChild(vraagH2)
        vraag.appendChild(vraagLink)

    }

    creerModal()

    //Kruisje
        const weg = document.getElementsByClassName("weg");

        const wegArray = Array.from(weg)

        wegArray.forEach(w => {
            
            w.addEventListener("click", (e) => {
                const modal = document.getElementsByClassName("modalBG")
                const modalArray = Array.from(modal)
                    modalArray.forEach(m => {
                        m.style.display = "none";
                    }) 
            })   
        });

    // Modal diplay block bij onclick
    function modal(a){
        const modalBG = document.getElementsByClassName("modalBG");

        const mode = modalBG[a]
        mode.style.display = "block";
    }

    function folie(){
        modal(0)
    }

    function plakband(){
        modal(1)
    }

    // In winkelwagen
    const winkel = document.getElementsByClassName("bestel-item");
        const winkelArray = Array.from(winkel);

        winkelArray.forEach(w => {
            w.addEventListener("click", (e) => {
           
           const tool = w.dataset.tool
           localStorage.setItem('bestel-item' + tool, tool);
           window.open("bestellen.html#GereedschappenTitel", "_self");
            })
        })

//check
function check(x,y,z,a){

    if (x.style.backgroundImage == "url('Images/check-groen.png')" ){
        x.style.backgroundImage = "none" 
        y.style.textDecoration = "none"
        z.style.color = "black";
        } else {
            x.style.backgroundImage = "url('Images/check-groen.png')" 
            y.style.textDecoration = "line-through"
            z.style.color = "#999999";  
        }
        localStorage.setItem("checked" + a, a)
}

// Check from local storage
const checkId = document.querySelectorAll(".check-id");
const arrayCheck = Array.from(checkId);

arrayCheck.forEach(check => {
    const data = check.dataset.nr;
    
    const getData = localStorage.getItem("checked" + data)

    const getChecken = document.getElementById("check" + getData);
    getChecken.style.backgroundImage = "url('Images/check-groen.png')"
    const getLineThru = document.getElementById("1." + getData);
    getLineThru.style.textDecoration = "line-through"
    getLineThru.style.color = "#999999";
})

// Checken
function click(){

    const checken = document.getElementByID("checkvb");
    const lineThru = document.getElementById("voorbeeld");

    check(checken, lineThru, lineThru, data);  
}

function click1(){
    const checken = document.getElementById("check1");
    const lineThru = document.getElementById("1.1");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click2(){
    const checken = document.getElementById("check2");
    const lineThru = document.getElementById("1.2");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data);  
}

function click3(){
    const checken = document.getElementById("check3");
    const lineThru = document.getElementById("1.3");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data);  
}

function click4(){
    const checken = document.getElementById("check4");
    const lineThru = document.getElementById("1.4");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click5(){
    const checken = document.getElementById("check5");
    const lineThru = document.getElementById("1.5");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click6(){
    const checken = document.getElementById("check6");
    const lineThru = document.getElementById("1.6");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click7(){
    const checken = document.getElementById("check7");
    const lineThru = document.getElementById("1.7");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click8(){
    const checken = document.getElementById("check8");
    const lineThru = document.getElementById("1.8");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click9(){
    const checken = document.getElementById("check9");
    const lineThru = document.getElementById("1.9");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click10(){
    const checken = document.getElementById("check10");
    const lineThru = document.getElementById("1.10");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click11(){
    const checken = document.getElementById("check11");
    const lineThru = document.getElementById("1.11");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click12(){
    const checken = document.getElementById("check12");
    const lineThru = document.getElementById("1.12");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click13(){
    const checken = document.getElementById("check13");
    const lineThru = document.getElementById("1.13");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click14(){
    const checken = document.getElementById("check14");
    const lineThru = document.getElementById("1.14");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click15(){
    const checken = document.getElementById("check15");
    const lineThru = document.getElementById("1.15");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click16(){
    const checken = document.getElementById("check16");
    const lineThru = document.getElementById("1.16");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click17(){
    const checken = document.getElementById("check17");
    const lineThru = document.getElementById("1.17");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click18(){
    const checken = document.getElementById("check18");
    const lineThru = document.getElementById("1.18");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click19(){
    const checken = document.getElementById("check19");
    const lineThru = document.getElementById("1.19");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click20(){
    const checken = document.getElementById("check20");
    const lineThru = document.getElementById("1.20");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click21(){
    const checken = document.getElementById("check21");
    const lineThru = document.getElementById("1.21");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click22(){
    const checken = document.getElementById("check22");
    const lineThru = document.getElementById("1.22");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click23(){
    const checken = document.getElementById("check23");
    const lineThru = document.getElementById("1.23");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click24(){
    const checken = document.getElementById("check24");
    const lineThru = document.getElementById("1.24");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click25(){
    const checken = document.getElementById("check25");
    const lineThru = document.getElementById("1.25");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click26(){
    const checken = document.getElementById("check26");
    const lineThru = document.getElementById("1.26");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click27(){
    const checken = document.getElementById("check27");
    const lineThru = document.getElementById("1.27");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click28(){
    const checken = document.getElementById("check28");
    const lineThru = document.getElementById("1.28");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click29(){
    const checken = document.getElementById("check29");
    const lineThru = document.getElementById("1.29");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click30(){
    const checken = document.getElementById("check30");
    const lineThru = document.getElementById("1.30");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click31(){
    const checken = document.getElementById("check31");
    const lineThru = document.getElementById("1.31");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click32(){
    const checken = document.getElementById("check32");
    const lineThru = document.getElementById("1.32");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click33(){
    const checken = document.getElementById("check33");
    const lineThru = document.getElementById("1.33");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click34(){
    const checken = document.getElementById("check34");
    const lineThru = document.getElementById("1.34");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click35(){
    const checken = document.getElementById("check35");
    const lineThru = document.getElementById("1.35");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click36(){
    const checken = document.getElementById("check36");
    const lineThru = document.getElementById("1.36");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click37(){
    const checken = document.getElementById("check37");
    const lineThru = document.getElementById("1.37");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click38(){
    const checken = document.getElementById("check38");
    const lineThru = document.getElementById("1.38");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click39(){
    const checken = document.getElementById("check39");
    const lineThru = document.getElementById("1.39");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click40(){
    const checken = document.getElementById("check40");
    const lineThru = document.getElementById("1.40");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click41(){
    const checken = document.getElementById("check41");
    const lineThru = document.getElementById("1.41");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click42(){
    const checken = document.getElementById("check42");
    const lineThru = document.getElementById("1.42");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click43(){
    const checken = document.getElementById("check43");
    const lineThru = document.getElementById("1.43");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click44(){
    const checken = document.getElementById("check44");
    const lineThru = document.getElementById("1.44");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click45(){
    const checken = document.getElementById("check45");
    const lineThru = document.getElementById("1.45");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click46(){
    const checken = document.getElementById("check46");
    const lineThru = document.getElementById("1.46");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click47(){
    const checken = document.getElementById("check47");
    const lineThru = document.getElementById("1.47");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click48(){
    const checken = document.getElementById("check48");
    const lineThru = document.getElementById("1.48");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click49(){
    const checken = document.getElementById("check49");
    const lineThru = document.getElementById("1.49");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click50(){
    const checken = document.getElementById("check50");
    const lineThru = document.getElementById("1.50");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click51(){
    const checken = document.getElementById("check51");
    const lineThru = document.getElementById("1.51");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click52(){
    const checken = document.getElementById("check52");
    const lineThru = document.getElementById("1.52");
    const data = checken.dataset.nr

   check(checken, lineThru, lineThru, data); 
}

function click53(){
    const checken = document.getElementById("check53");
    const lineThru = document.getElementById("1.53");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click54(){
    const checken = document.getElementById("check54");
    const lineThru = document.getElementById("1.54");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click55(){
    const checken = document.getElementById("check55");
    const lineThru = document.getElementById("1.55");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click56(){
    const checken = document.getElementById("check56");
    const lineThru = document.getElementById("1.56");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click57(){
    const checken = document.getElementById("check57");
    const lineThru = document.getElementById("1.57");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click58(){
    const checken = document.getElementById("check58");
    const lineThru = document.getElementById("1.58");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click59(){
    const checken = document.getElementById("check59");
    const lineThru = document.getElementById("1.59");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click60(){
    const checken = document.getElementById("check60");
    const lineThru = document.getElementById("1.60");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click61(){
    const checken = document.getElementById("check61");
    const lineThru = document.getElementById("1.61");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click62(){
    const checken = document.getElementById("check62");
    const lineThru = document.getElementById("1.62");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click63(){
    const checken = document.getElementById("check63");
    const lineThru = document.getElementById("1.63");
    const data = checken.dataset.nr

    check(checken, lineThru, lineThru, data); 
}

function click64(){
    const checken = document.getElementById("check64");
    const lineThru = document.getElementById("1.64");
    const data = checken.dataset.nr
    
    check(checken, lineThru, lineThru, data); 
}




