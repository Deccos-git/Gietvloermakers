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
function click(){
    const checken = document.getElementByID("checkvb");
    const lineThru = document.getElementById("voorbeeld");

    checken.style.backgroundImage = "url('Images/check-groen.png)"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";

}

function click1(){
    const checken = document.getElementById("check1");
    const lineThru = document.getElementById("1.1");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click2(){
    const checken = document.getElementById("check2");
    const lineThru = document.getElementById("1.2");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click3(){
    const checken = document.getElementById("check3");
    const lineThru = document.getElementById("1.3");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click4(){
    const checken = document.getElementById("check4");
    const lineThru = document.getElementById("1.4");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click5(){
    const checken = document.getElementById("check5");
    const lineThru = document.getElementById("1.5");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click6(){
    const checken = document.getElementById("check6");
    const lineThru = document.getElementById("1.6");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click7(){
    const checken = document.getElementById("check7");
    const lineThru = document.getElementById("1.7");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click8(){
    const checken = document.getElementById("check8");
    const lineThru = document.getElementById("1.8");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click9(){
    const checken = document.getElementById("check9");
    const lineThru = document.getElementById("1.9");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click10(){
    const checken = document.getElementById("check10");
    const lineThru = document.getElementById("1.10");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click11(){
    const checken = document.getElementById("check11");
    const lineThru = document.getElementById("1.11");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click12(){
    const checken = document.getElementById("check12");
    const lineThru = document.getElementById("1.12");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click13(){
    const checken = document.getElementById("check13");
    const lineThru = document.getElementById("1.13");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click14(){
    const checken = document.getElementById("check14");
    const lineThru = document.getElementById("1.14");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click15(){
    const checken = document.getElementById("check15");
    const lineThru = document.getElementById("1.15");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click16(){
    const checken = document.getElementById("check16");
    const lineThru = document.getElementById("1.16");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click17(){
    const checken = document.getElementById("check17");
    const lineThru = document.getElementById("1.17");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click18(){
    const checken = document.getElementById("check18");
    const lineThru = document.getElementById("1.18");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click19(){
    const checken = document.getElementById("check19");
    const lineThru = document.getElementById("1.19");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click20(){
    const checken = document.getElementById("check20");
    const lineThru = document.getElementById("1.20");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click21(){
    const checken = document.getElementById("check21");
    const lineThru = document.getElementById("1.21");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click22(){
    const checken = document.getElementById("check22");
    const lineThru = document.getElementById("1.22");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click23(){
    const checken = document.getElementById("check23");
    const lineThru = document.getElementById("1.23");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click24(){
    const checken = document.getElementById("check24");
    const lineThru = document.getElementById("1.24");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click25(){
    const checken = document.getElementById("check25");
    const lineThru = document.getElementById("1.25");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click26(){
    const checken = document.getElementById("check26");
    const lineThru = document.getElementById("1.26");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click27(){
    const checken = document.getElementById("check27");
    const lineThru = document.getElementById("1.27");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click28(){
    const checken = document.getElementById("check28");
    const lineThru = document.getElementById("1.28");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click29(){
    const checken = document.getElementById("check29");
    const lineThru = document.getElementById("1.29");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click30(){
    const checken = document.getElementById("check30");
    const lineThru = document.getElementById("1.30");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click31(){
    const checken = document.getElementById("check31");
    const lineThru = document.getElementById("1.31");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click32(){
    const checken = document.getElementById("check32");
    const lineThru = document.getElementById("1.32");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click33(){
    const checken = document.getElementById("check33");
    const lineThru = document.getElementById("1.33");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click34(){
    const checken = document.getElementById("check34");
    const lineThru = document.getElementById("1.34");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click35(){
    const checken = document.getElementById("check35");
    const lineThru = document.getElementById("1.35");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click36(){
    const checken = document.getElementById("check36");
    const lineThru = document.getElementById("1.36");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click37(){
    const checken = document.getElementById("check37");
    const lineThru = document.getElementById("1.37");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click38(){
    const checken = document.getElementById("check38");
    const lineThru = document.getElementById("1.38");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click39(){
    const checken = document.getElementById("check39");
    const lineThru = document.getElementById("1.39");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click40(){
    const checken = document.getElementById("check40");
    const lineThru = document.getElementById("1.40");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click41(){
    const checken = document.getElementById("check41");
    const lineThru = document.getElementById("1.41");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click42(){
    const checken = document.getElementById("check42");
    const lineThru = document.getElementById("1.42");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click43(){
    const checken = document.getElementById("check43");
    const lineThru = document.getElementById("1.43");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click44(){
    const checken = document.getElementById("check44");
    const lineThru = document.getElementById("1.44");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click45(){
    const checken = document.getElementById("check45");
    const lineThru = document.getElementById("1.45");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click46(){
    const checken = document.getElementById("check46");
    const lineThru = document.getElementById("1.46");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click47(){
    const checken = document.getElementById("check47");
    const lineThru = document.getElementById("1.47");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click48(){
    const checken = document.getElementById("check48");
    const lineThru = document.getElementById("1.48");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click49(){
    const checken = document.getElementById("check49");
    const lineThru = document.getElementById("1.49");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click50(){
    const checken = document.getElementById("check50");
    const lineThru = document.getElementById("1.50");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click51(){
    const checken = document.getElementById("check51");
    const lineThru = document.getElementById("1.51");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click52(){
    const checken = document.getElementById("check52");
    const lineThru = document.getElementById("1.52");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click53(){
    const checken = document.getElementById("check53");
    const lineThru = document.getElementById("1.53");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click54(){
    const checken = document.getElementById("check54");
    const lineThru = document.getElementById("1.54");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click55(){
    const checken = document.getElementById("check55");
    const lineThru = document.getElementById("1.55");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click56(){
    const checken = document.getElementById("check56");
    const lineThru = document.getElementById("1.56");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click57(){
    const checken = document.getElementById("check57");
    const lineThru = document.getElementById("1.57");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click58(){
    const checken = document.getElementById("check58");
    const lineThru = document.getElementById("1.58");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click59(){
    const checken = document.getElementById("check59");
    const lineThru = document.getElementById("1.59");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click60(){
    const checken = document.getElementById("check60");
    const lineThru = document.getElementById("1.60");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click61(){
    const checken = document.getElementById("check61");
    const lineThru = document.getElementById("1.61");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click62(){
    const checken = document.getElementById("check62");
    const lineThru = document.getElementById("1.62");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click63(){
    const checken = document.getElementById("check63");
    const lineThru = document.getElementById("1.63");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}

function click64(){
    const checken = document.getElementById("check64");
    const lineThru = document.getElementById("1.64");

    checken.style.backgroundImage = "url('Images/check-groen.png')"
    lineThru.style.textDecoration = "line-through"
    lineThru.style.color = "#999999";
}





