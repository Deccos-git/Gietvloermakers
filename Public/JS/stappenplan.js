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


function folie(){
    const folie = document.getElementsByClassName("modalBG")[0];
    if (folie.style.display = "none")
    folie.style.display = "block";

}

function weg(){
    const folieW = document.getElementsByClassName("modalBG")[0];
    folieW.style.display = "none";
}

function plakband(){
    const folie = document.getElementsByClassName("modalPlakband")[0];
    if (folie.style.display = "none")
    folie.style.display = "block";

}

function wegPlakband(){
    const folieW = document.getElementsByClassName("modalPlakband")[0];
    folieW.style.display = "none";
}

//check
function check(x,y,z,a,){
    x.style.backgroundImage = "url('Images/check-groen.png')"
    y.style.textDecoration = "line-through"
    z.style.color = "#999999";

    localStorage.setItem("checked" + a, a)
}

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

function click(){

    const checken = document.getElementByID("checkvb");
    const lineThru = document.getElementById("voorbeeld");

    check(checken, lineThru, lineThru);  
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

    check(checken, lineThru, lineThru); 
}

function click5(){
    const checken = document.getElementById("check5");
    const lineThru = document.getElementById("1.5");

    check(checken, lineThru, lineThru); 
}

function click6(){
    const checken = document.getElementById("check6");
    const lineThru = document.getElementById("1.6");

    check(checken, lineThru, lineThru); 
}

function click7(){
    const checken = document.getElementById("check7");
    const lineThru = document.getElementById("1.7");

    check(checken, lineThru, lineThru); 
}

function click8(){
    const checken = document.getElementById("check8");
    const lineThru = document.getElementById("1.8");

    check(checken, lineThru, lineThru); 
}

function click9(){
    const checken = document.getElementById("check9");
    const lineThru = document.getElementById("1.9");

    check(checken, lineThru, lineThru); 
}

function click10(){
    const checken = document.getElementById("check10");
    const lineThru = document.getElementById("1.10");

    check(checken, lineThru, lineThru); 
}

function click11(){
    const checken = document.getElementById("check11");
    const lineThru = document.getElementById("1.11");

    check(checken, lineThru, lineThru); 
}

function click12(){
    const checken = document.getElementById("check12");
    const lineThru = document.getElementById("1.12");

    check(checken, lineThru, lineThru); 
}

function click13(){
    const checken = document.getElementById("check13");
    const lineThru = document.getElementById("1.13");

    check(checken, lineThru, lineThru); 
}

function click14(){
    const checken = document.getElementById("check14");
    const lineThru = document.getElementById("1.14");

    check(checken, lineThru, lineThru); 
}

function click15(){
    const checken = document.getElementById("check15");
    const lineThru = document.getElementById("1.15");

    check(checken, lineThru, lineThru); 
}

function click16(){
    const checken = document.getElementById("check16");
    const lineThru = document.getElementById("1.16");

    check(checken, lineThru, lineThru); 
}

function click17(){
    const checken = document.getElementById("check17");
    const lineThru = document.getElementById("1.17");

    check(checken, lineThru, lineThru); 
}

function click18(){
    const checken = document.getElementById("check18");
    const lineThru = document.getElementById("1.18");

    check(checken, lineThru, lineThru); 
}

function click19(){
    const checken = document.getElementById("check19");
    const lineThru = document.getElementById("1.19");

    check(checken, lineThru, lineThru); 
}

function click20(){
    const checken = document.getElementById("check20");
    const lineThru = document.getElementById("1.20");

    check(checken, lineThru, lineThru); 
}

function click21(){
    const checken = document.getElementById("check21");
    const lineThru = document.getElementById("1.21");

    check(checken, lineThru, lineThru); 
}

function click22(){
    const checken = document.getElementById("check22");
    const lineThru = document.getElementById("1.22");

    check(checken, lineThru, lineThru); 
}

function click23(){
    const checken = document.getElementById("check23");
    const lineThru = document.getElementById("1.23");

    check(checken, lineThru, lineThru); 
}

function click24(){
    const checken = document.getElementById("check24");
    const lineThru = document.getElementById("1.24");

    check(checken, lineThru, lineThru); 
}

function click25(){
    const checken = document.getElementById("check25");
    const lineThru = document.getElementById("1.25");

    check(checken, lineThru, lineThru); 
}

function click26(){
    const checken = document.getElementById("check26");
    const lineThru = document.getElementById("1.26");

    check(checken, lineThru, lineThru); 
}

function click27(){
    const checken = document.getElementById("check27");
    const lineThru = document.getElementById("1.27");

    check(checken, lineThru, lineThru); 
}

function click28(){
    const checken = document.getElementById("check28");
    const lineThru = document.getElementById("1.28");

    check(checken, lineThru, lineThru); 
}

function click29(){
    const checken = document.getElementById("check29");
    const lineThru = document.getElementById("1.29");

    check(checken, lineThru, lineThru); 
}

function click30(){
    const checken = document.getElementById("check30");
    const lineThru = document.getElementById("1.30");

    check(checken, lineThru, lineThru); 
}

function click31(){
    const checken = document.getElementById("check31");
    const lineThru = document.getElementById("1.31");

    check(checken, lineThru, lineThru); 
}

function click32(){
    const checken = document.getElementById("check32");
    const lineThru = document.getElementById("1.32");

    check(checken, lineThru, lineThru); 
}

function click33(){
    const checken = document.getElementById("check33");
    const lineThru = document.getElementById("1.33");

    ccheck(checken, lineThru, lineThru); 
}

function click34(){
    const checken = document.getElementById("check34");
    const lineThru = document.getElementById("1.34");

    check(checken, lineThru, lineThru); 
}

function click35(){
    const checken = document.getElementById("check35");
    const lineThru = document.getElementById("1.35");

    check(checken, lineThru, lineThru); 
}

function click36(){
    const checken = document.getElementById("check36");
    const lineThru = document.getElementById("1.36");

    check(checken, lineThru, lineThru); 
}

function click37(){
    const checken = document.getElementById("check37");
    const lineThru = document.getElementById("1.37");

    check(checken, lineThru, lineThru); 
}

function click38(){
    const checken = document.getElementById("check38");
    const lineThru = document.getElementById("1.38");

    check(checken, lineThru, lineThru); 
}

function click39(){
    const checken = document.getElementById("check39");
    const lineThru = document.getElementById("1.39");

    check(checken, lineThru, lineThru); 
}

function click40(){
    const checken = document.getElementById("check40");
    const lineThru = document.getElementById("1.40");

    check(checken, lineThru, lineThru); 
}

function click41(){
    const checken = document.getElementById("check41");
    const lineThru = document.getElementById("1.41");

    check(checken, lineThru, lineThru); 
}

function click42(){
    const checken = document.getElementById("check42");
    const lineThru = document.getElementById("1.42");

    check(checken, lineThru, lineThru); 
}

function click43(){
    const checken = document.getElementById("check43");
    const lineThru = document.getElementById("1.43");

    check(checken, lineThru, lineThru); 
}

function click44(){
    const checken = document.getElementById("check44");
    const lineThru = document.getElementById("1.44");

    check(checken, lineThru, lineThru); 
}

function click45(){
    const checken = document.getElementById("check45");
    const lineThru = document.getElementById("1.45");

    check(checken, lineThru, lineThru); 
}

function click46(){
    const checken = document.getElementById("check46");
    const lineThru = document.getElementById("1.46");

    check(checken, lineThru, lineThru); 
}

function click47(){
    const checken = document.getElementById("check47");
    const lineThru = document.getElementById("1.47");

    check(checken, lineThru, lineThru); 
}

function click48(){
    const checken = document.getElementById("check48");
    const lineThru = document.getElementById("1.48");

    check(checken, lineThru, lineThru); 
}

function click49(){
    const checken = document.getElementById("check49");
    const lineThru = document.getElementById("1.49");

    check(checken, lineThru, lineThru); 
}

function click50(){
    const checken = document.getElementById("check50");
    const lineThru = document.getElementById("1.50");

    check(checken, lineThru, lineThru); 
}

function click51(){
    const checken = document.getElementById("check51");
    const lineThru = document.getElementById("1.51");

    check(checken, lineThru, lineThru); 
}

function click52(){
    const checken = document.getElementById("check52");
    const lineThru = document.getElementById("1.52");

   check(checken, lineThru, lineThru); 
}

function click53(){
    const checken = document.getElementById("check53");
    const lineThru = document.getElementById("1.53");

    check(checken, lineThru, lineThru); 
}

function click54(){
    const checken = document.getElementById("check54");
    const lineThru = document.getElementById("1.54");

    check(checken, lineThru, lineThru); 
}

function click55(){
    const checken = document.getElementById("check55");
    const lineThru = document.getElementById("1.55");

    check(checken, lineThru, lineThru); 
}

function click56(){
    const checken = document.getElementById("check56");
    const lineThru = document.getElementById("1.56");

    check(checken, lineThru, lineThru); 
}

function click57(){
    const checken = document.getElementById("check57");
    const lineThru = document.getElementById("1.57");

    check(checken, lineThru, lineThru); 
}

function click58(){
    const checken = document.getElementById("check58");
    const lineThru = document.getElementById("1.58");

    check(checken, lineThru, lineThru); 
}

function click59(){
    const checken = document.getElementById("check59");
    const lineThru = document.getElementById("1.59");

    check(checken, lineThru, lineThru); 
}

function click60(){
    const checken = document.getElementById("check60");
    const lineThru = document.getElementById("1.60");

    check(checken, lineThru, lineThru); 
}

function click61(){
    const checken = document.getElementById("check61");
    const lineThru = document.getElementById("1.61");

    check(checken, lineThru, lineThru); 
}

function click62(){
    const checken = document.getElementById("check62");
    const lineThru = document.getElementById("1.62");

    check(checken, lineThru, lineThru); 
}

function click63(){
    const checken = document.getElementById("check63");
    const lineThru = document.getElementById("1.63");

    check(checken, lineThru, lineThru); 
}

function click64(){
    const checken = document.getElementById("check64");
    const lineThru = document.getElementById("1.64");

    check(checken, lineThru, lineThru); 
}

// In winkelwagen

function bestelFolie(){
    localStorage.setItem('bestel-item', "folie");

    window.open("bestellen.html#GereedschappenTitel", "_self");
}



