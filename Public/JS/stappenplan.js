// localStorage.clear()

//dagen
const overzicht1 = document.getElementById("menu-dag-1");
const overzicht2 = document.getElementById("menu-dag-2");
const overzicht3 = document.getElementById("menu-dag-3");
const overzicht4 = document.getElementById("menu-dag-4");
const overzicht5 = document.getElementById("menu-dag-5");

const menuUp = document.getElementById("menu-up")

function subMenu(a,b){
    a.addEventListener("click", () => {
        window.location.href = "#" + b;
    })
}   

subMenu(overzicht1, "landing-Dag1")
subMenu(overzicht2, "landing-Dag2")
subMenu(overzicht3, "landing-Dag3")
subMenu(overzicht4, "landing-Dag4")
subMenu(overzicht5, "landing-Dag5")

subMenu(menuUp, "menu")

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
            const mode = modalBG[a]

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

        function schuinSchrap(){
            modal(32)
            youtube(32, "")
        }

        function massaSchrap(){
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

        function vlakGiet(){
            modal(47)
            youtube(47, "https://www.youtube.com/embed/V8mRJwSAHzo")
        }

        function drukGiet(){
            modal(48)
            youtube(48, "https://www.youtube.com/embed/V8mRJwSAHzo")
        }

        function rilGiet(){
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

        function haaksLak(){
            modal(63)
            youtube(63, "https://www.youtube.com/embed/eiUaOdzJa3Y")
        }

        function vakLak(){
            modal(64)
            youtube(64, "https://www.youtube.com/embed/eiUaOdzJa3Y")
        }

        function nogmaalsLak(){
            modal(65)
            youtube(65, "https://www.youtube.com/embed/eiUaOdzJa3Y")
        }


        

