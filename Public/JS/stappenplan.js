// localStorage.clear()

//dagen
const overzicht1 = document.getElementById("Dag1");
const overzicht2 = document.getElementById("Dag2");
const overzicht3 = document.getElementById("Dag3");
const overzicht4 = document.getElementById("Dag4");
const overzicht5 = document.getElementById("Dag5");

    // Submenu gedeeltelijk verbergen
    const menuDag1 = document.getElementById("dag1")
    const menuDag2 = document.getElementById("dag2")
    const menuDag3 = document.getElementById("dag3")
    const menuDag4 = document.getElementById("dag4")
    const menuDag5 = document.getElementById("dag5")


    function load(){
        menuDag1.style.display = "none"
        menuDag2.style.display = "block"
        menuDag3.style.display = "none"
        menuDag4.style.display = "none"
        menuDag5.style.display = "none"
    }
    window.onload = load()

function dag1(){
    overzicht1.style.display = "block";
    overzicht2.style.display = "none";
    overzicht3.style.display = "none";
    overzicht4.style.display = "none";
    overzicht5.style.display = "none";

    menuDag1.style.display = "none"
    menuDag2.style.display = "block"
    menuDag3.style.display = "none"
    menuDag4.style.display = "none"
    menuDag5.style.display = "none"
}

function dag2(){
    overzicht1.style.display = "none";
    overzicht2.style.display = "block";
    overzicht3.style.display = "none";
    overzicht4.style.display = "none";
    overzicht5.style.display = "none";

    menuDag1.style.display = "none"
    menuDag2.style.display = "none"
    menuDag3.style.display = "block"
    menuDag4.style.display = "none"
    menuDag5.style.display = "none"
}

function dag3(){
    overzicht1.style.display = "none";
    overzicht2.style.display = "none";
    overzicht3.style.display = "block";
    overzicht4.style.display = "none";
    overzicht5.style.display = "none";

    menuDag1.style.display = "none"
    menuDag2.style.display = "none"
    menuDag3.style.display = "none"
    menuDag4.style.display = "block"
    menuDag5.style.display = "none"
}

function dag4(){
    overzicht1.style.display = "none";
    overzicht2.style.display = "none";
    overzicht3.style.display = "none";
    overzicht4.style.display = "block";
    overzicht5.style.display = "none";

    menuDag1.style.display = "none"
    menuDag2.style.display = "none"
    menuDag3.style.display = "none"
    menuDag4.style.display = "none"
    menuDag5.style.display = "block"
}

function dag5(){

    overzicht1.style.display = "none";
    overzicht2.style.display = "none";
    overzicht3.style.display = "none";
    overzicht4.style.display = "none";
    overzicht5.style.display = "block";

    menuDag1.style.display = "none"
    menuDag2.style.display = "none"
    menuDag3.style.display = "none"
    menuDag4.style.display = "none"
    menuDag5.style.display = "none"
}

//Modal

    // In winkelwagen
    const winkel = document.getElementsByClassName("bestel-item");
    const winkelArray = Array.from(winkel);

    winkelArray.forEach(w => {
        w.addEventListener("click", (e) => {
    
    const tool = w.dataset.tool

    console.log(tool)

    localStorage.setItem('bestel-item' + tool, tool);
    window.open("bestellen.html#GereedschappenTitel", "_self");
        })
    })

    //Kruisje
        const weg = document.getElementsByClassName("weg");

        const wegArray = Array.from(weg)

        wegArray.forEach(w => {
            w.addEventListener("click", () => {
                const modal = document.getElementsByClassName("modalBG")
                const modalArray = Array.from(modal)
                    modalArray.forEach(m => {
                        m.style.display = "none";
                    }) 
            })   
        });

        //youtube functie

        function youtube(a,b){
            const DOM = document.getElementsByClassName("youtube");
            const node = DOM[a]

            const h2 = document.createElement("h2")
            const iframe = document.createElement("iframe")
                iframe.setAttribute("height", "315")
                iframe.setAttribute("width", "420")
                iframe.setAttribute("src", b)
                
            h2.innerHTML= "Bekijk video"

            node.appendChild(h2)
            node.appendChild(iframe)
        }

        // Modals
        function modal(a){
            const modalBG = document.getElementsByClassName("modalBG");

            console.log(modalBG)

            const mode = modalBG[a]

            console.log(modalBG)

            if(mode == undefined){
                return console.log("disregard error")
            } else {
            mode.style.display = "block";
            }
            
        }

        

        modal()

        function plakband(){
            modal(1)
            youtube(1, "https://www.youtube.com/embed/KmfS_SO5Ia4")
        }

        function mengspiraal(){
            modal(4)
            youtube(4, "https://www.youtube.com/embed/KuyTLwSFF2w")
        }

        function vlakkeSpaan(){
            modal(5)
            youtube(5, "https://www.youtube.com/embed/LnYPCb_GOYQ")
        }

        function wegwerpKwast(){
            modal(6)
            youtube(6, "https://www.youtube.com/embed/mqzEi-Juhs4")
        }

        function handschoenen(){
            modal(7)
            youtube(7, "https://www.youtube.com/embed/rQoP1vOdc8k")
        }

        function kwast(){
            modal(11)
            youtube(11, "https://www.youtube.com/embed/mqzEi-Juhs4")
        }

        function microvezelRoller(){
            modal(14)
            youtube(14, "https://www.youtube.com/embed/lT0qx8uiCgQ")
        }

        // Modal taken

        function kleding(){
            modal(26)
            youtube(26, "https://www.youtube.com/embed/ie0MrmKvIJ0")
        }

        function eenSetSchrap(){
            modal(27)
            youtube(27, "https://www.youtube.com/embed/fokgDWdg8pI")
        }

        function gietAbijBSchrap(){
            modal(28)
            youtube(28, "https://www.youtube.com/embed/fokgDWdg8pI")
        }

        function mengenSchrap(){
            modal(29)
            youtube(29, "https://www.youtube.com/embed/fokgDWdg8pI")
        }

        function rilletjeSchrap(){
            modal(30)
            youtube(30, "")
        }

        function spanenSchrap(){
            modal(31)
            youtube(31, "")
        }

        function spanenSchrap(){
            modal(32)
            youtube(32, "")
        }

        function spanenSchrap(){
            modal(33)
            youtube(33, "")
        }

        function reinigSpaan(){
            modal(34)
            youtube(34, "https://www.youtube.com/embed/N4H5z2gOkVw")
        }

        function gietvloer(){
            modal(26)
            youtube(26, "")
        }

        function beginnen(){
            modal(39)
            youtube(39, "https://www.youtube.com/embed/ZZciwCw_3vI")
        }

        function kleding(){
            modal(40)
            youtube(40, "https://www.youtube.com/embed/ie0MrmKvIJ0")
        }

        function eenSetGiet(){
            modal(41)
            youtube(41, "https://www.youtube.com/embed/fokgDWdg8pI")
        }

        function gietAbijBGiet(){
            modal(42)
            youtube(42, "https://www.youtube.com/embed/fokgDWdg8pI")
        }

        function mengenGiet(){
            modal(43)
            youtube(43, "https://www.youtube.com/embed/fokgDWdg8pI")
        }

        function emmerGiet(){
            modal(44)
            youtube(44, "https://www.youtube.com/embed/RLdgg2k7oM0")
        }

        function rilletjeGiet(){
            modal(45)
            youtube(45, "https://www.youtube.com/embed/NTxYd85o1Tw")
        }

        function spanenGiet(){
            modal(46)
            youtube(46, "https://www.youtube.com/embed/V8mRJwSAHzo")
        }

        function spanenGiet(){
            modal(47)
            youtube(47, "https://www.youtube.com/embed/V8mRJwSAHzo")
        }

        function spanenGiet(){
            modal(48)
            youtube(48, "https://www.youtube.com/embed/V8mRJwSAHzo")
        }

        function spanenGiet(){
            modal(49)
            youtube(49, "https://www.youtube.com/embed/V8mRJwSAHzo")
        }

        function reinigSpaan(){
            modal(50)
            youtube(50, "https://www.youtube.com/embed/N4H5z2gOkVw")
        }

        function laklaag(){
            modal(26)
            youtube(26, "")
        }

        function kleding(){
            modal(57)
            youtube(57, "https://www.youtube.com/embed/ie0MrmKvIJ0")
        }

        function gietAbijBLak(){
            modal(59)
            youtube(59, "")
        }

        function mengenLak(){
            modal(60)
            youtube(60, "")
        }

        function randenLak(){
            modal(61)
            youtube(61, "https://www.youtube.com/embed/dSdlrdsNJ4M")
        }

        function rollenLak(){
            modal(62)
            youtube(62, "https://www.youtube.com/embed/eiUaOdzJa3Y")
        }

        function rollenLak(){
            modal(63)
            youtube(63, "https://www.youtube.com/embed/eiUaOdzJa3Y")
        }

        function rollenLak(){
            modal(64)
            youtube(64, "https://www.youtube.com/embed/eiUaOdzJa3Y")
        }

        function rollenLak(){
            modal(65)
            youtube(65, "https://www.youtube.com/embed/eiUaOdzJa3Y")
        }


        


//check
function check(x,y,z,a){

    if (x.style.backgroundImage == 'url("Images/check-groen.png")'){
        x.style.backgroundImage = "none" 
        y.style.textDecoration = "none"
        z.style.color = "#3d3d3d";
        localStorage.removeItem("checked" + a)
        } else {
            x.style.backgroundImage = 'url("Images/check-groen.png")' 
            y.style.textDecoration = "line-through"
            z.style.color = "#999999";  
            localStorage.setItem("checked" + a, a)
        }  
}


// Check from local storage
const checkId = document.querySelectorAll(".check-id");
const arrayCheck = Array.from(checkId);

arrayCheck.forEach(check => {
    const data = check.dataset.nr;
    
    const getData = localStorage.getItem("checked" + data)

    const getChecken = document.getElementById("check" + getData);

    if(getChecken == null){
        return (console.log("disregard error"))
    } else {
        getChecken.style.backgroundImage = "url('Images/check-groen.png')"
    }

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


