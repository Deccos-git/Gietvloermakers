
// Menu
const industrie = document.getElementById("industrieel");
const sportief = document.getElementById("sportief");
const stedelijk = document.getElementById("stedelijk")
const minimalistisch = document.getElementById("minimalistisch")
const organisch = document.getElementById("organisch");
const speels = document.getElementById("speels");
const cultuur = document.getElementById("cultuur");
const luxe = document.getElementById("luxe");
const klassiekers = document.getElementById("klassiekers");

window.onload = function(){
    industrie.style.display = "flex";
    sportief.style.display = "flex";
    stedelijk.style.display = "flex";
    minimalistisch.style.display = "flex";
    organisch.style.display = "flex";
    speels.style.display = "flex";
    cultuur.style.display = "flex";
    luxe.style.display = "flex";
    klassiekers.style.display = "flex";
}

function indi(){
    industrie.style.display = "flex";
    sportief.style.display = "none";
    stedelijk.style.display = "none";
    minimalistisch.style.display = "none";
    organisch.style.display = "none";
    speels.style.display = "none";
    cultuur.style.display = "none";
    luxe.style.display = "none";
    klassiekers.style.display = "none";

    // window.location.href = "#industrieel";  
}

function sprt(){
    industrie.style.display = "none";
    sportief.style.display = "flex";
    stedelijk.style.display = "none";
    minimalistisch.style.display = "none";
    organisch.style.display = "none";
    speels.style.display = "none";
    cultuur.style.display = "none";
    luxe.style.display = "none";
    klassiekers.style.display = "none";
}

function std(){
    stedelijk.style.display = "flex";
    industrie.style.display = "none";
    sportief.style.display = "none";
    minimalistisch.style.display = "none";
    organisch.style.display = "none";
    speels.style.display = "none";
    cultuur.style.display = "none";
    luxe.style.display = "none";
    klassiekers.style.display = "none";
}

function mnm(){
    minimalistisch.style.display = "flex";
    stedelijk.style.display = "none";
    industrie.style.display = "none";
    sportief.style.display = "none";
    organisch.style.display = "none";
    speels.style.display = "none";
    cultuur.style.display = "none";
    luxe.style.display = "none";
    klassiekers.style.display = "none";
}

function org(){
    organisch.style.display = "flex";
    stedelijk.style.display = "none";
    industrie.style.display = "none";
    sportief.style.display = "none";
    minimalistisch.style.display = "none";
    speels.style.display = "none";
    cultuur.style.display = "none";
    luxe.style.display = "none";
    klassiekers.style.display = "none";
}

function spl(){
    speels.style.display = "flex";
    stedelijk.style.display = "none";
    industrie.style.display = "none";
    minimalistisch.style.display = "none";
    sportief.style.display = "none";
    organisch.style.display = "none";
    cultuur.style.display = "none";
    luxe.style.display = "none";
    klassiekers.style.display = "none";
}

function clt(){
    cultuur.style.display = "flex";
    stedelijk.style.display = "none";
    industrie.style.display = "none";
    minimalistisch.style.display = "none";
    sportief.style.display = "none";
    organisch.style.display = "none";
    speels.style.display = "none";
    luxe.style.display = "none";
    klassiekers.style.display = "none";
}

function lux(){
    luxe.style.display = "flex";
    stedelijk.style.display = "none";
    industrie.style.display = "none";
    minimalistisch.style.display = "none";
    sportief.style.display = "none";
    organisch.style.display = "none";
    speels.style.display = "none";
    cultuur.style.display = "none";
    klassiekers.style.display = "none";
}

function kls(){
    klassiekers.style.display = "flex";
    stedelijk.style.display = "none";
    industrie.style.display = "none";
    sportief.style.display = "none";
    minimalistisch.style.display = "none";
    organisch.style.display = "none";
    speels.style.display = "none";
    cultuur.style.display = "none";
    luxe.style.display = "none";
}

// Kleurselectie
const bestel = document.getElementById("bestel");

    // Industrieel
function indPickrood(){

    const kleurentest = document.getElementsByClassName("kleurvlak")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/ind-rood.jpg')";
    }

function indPicklichtgrijs(){

    const kleurentest = document.getElementsByClassName("kleurvlak")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/ind-lichtgrijs.jpg')";
    }

function indPickblauw(){

        const kleurentest = document.getElementsByClassName("kleurvlak")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/ind-blauw.jpg')";
        kleurentest.style.backgroundRepeat = "no-repeat";
        kleurentest.style.backgroundPosition = "center";
        kleurentest.style.backgroundSize = "cover";
        }
    
function indPickdonkergrijs(){
    
        const kleurentest = document.getElementsByClassName("kleurvlak")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/ind-donkergrijs.jpg')";
        }

function indBtPicklichtgrijs(){

    const kleurentest = document.getElementsByClassName("kleurvlak")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/ind-bt-lichtgrijs.jpg')"
    }

function indBtPickgrijs(){

    const kleurentest = document.getElementsByClassName("kleurvlak")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/ind-bt-grijs.jpg')";
    }

// Sportief
function sprPickBlauw(){

    const kleurentest = document.getElementsByClassName("kleurvlakSpr")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/spr-blauw.jpg')";
    kleurentest.style.backgroundRepeat = "no-repeat";
    kleurentest.style.backgroundPosition = "center";
    kleurentest.style.backgroundSize = "cover";
    }

function sprPickGeel(){

    const kleurentest = document.getElementsByClassName("kleurvlakSpr")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/spr-geel.jpg')";
    }

function sprPickLichtblauw(){

        const kleurentest = document.getElementsByClassName("kleurvlakSpr")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/spr-lichtblauw.jpg')";
        }
    
function sprPickRood(){
    
        const kleurentest = document.getElementsByClassName("kleurvlakSpr")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/spr-rood.jpg')";
        }

function sprBtPickDonkergrijs(){

    const kleurentest = document.getElementsByClassName("kleurvlakSpr")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/spr-bt-donkergrijs.jpg')";
    }

function sprBtPickLichtgrijs(){

    const kleurentest = document.getElementsByClassName("kleurvlakSpr")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/spr-bt-lichtgrijs.jpg')";
    }

// Stedelijk
function stdPickBlauw(){

    const kleurentest = document.getElementsByClassName("kleurvlakStd")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/std-blauw.jpg')";
    kleurentest.style.backgroundRepeat = "no-repeat";
    kleurentest.style.backgroundPosition = "center";
    kleurentest.style.backgroundSize = "cover";
    }

function stdPickGroen(){

    const kleurentest = document.getElementsByClassName("kleurvlakStd")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/std-groen.jpg')";
    kleurentest.style.backgroundRepeat = "no-repeat";
        kleurentest.style.backgroundPosition = "center";
        kleurentest.style.backgroundSize = "cover";
    }

function stdPickTaupe(){

        const kleurentest = document.getElementsByClassName("kleurvlakStd")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/std-taupe.jpg')";
        kleurentest.style.backgroundRepeat = "no-repeat";
        kleurentest.style.backgroundPosition = "center";
        kleurentest.style.backgroundSize = "cover";
        }
    
function stdPickViolet(){
    
        const kleurentest = document.getElementsByClassName("kleurvlakStd")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/std-violet.jpg')";
        }

function stdBtPickBlauw(){

    const kleurentest = document.getElementsByClassName("kleurvlakStd")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/std-bt-blauw.jpg')";
    }

function stdBtPickGrijs(){

    const kleurentest = document.getElementsByClassName("kleurvlakStd")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/std-bt-grijs.jpg')";
    }

// Minimalistisch
function mnmPickBlauw(){

    const kleurentest = document.getElementsByClassName("kleurvlakMnm")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/mnm-blauw.jpg')";
    }

function mnmPickGrijs(){

    const kleurentest = document.getElementsByClassName("kleurvlakMnm")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/mnm-grijs.jpg')";
    }

function mnmPickLichtgrijs(){

        const kleurentest = document.getElementsByClassName("kleurvlakMnm")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/mnm-lichtgrijs.jpg')";
        kleurentest.style.backgroundRepeat = "no-repeat";
        kleurentest.style.backgroundPosition = "center";
        kleurentest.style.backgroundSize = "cover";
        }
    
function mnmPickWit(){
    
        const kleurentest = document.getElementsByClassName("kleurvlakMnm")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/mnm-wit.jpg')";
        }

function mnmBtPickLichtgrijs(){

    const kleurentest = document.getElementsByClassName("kleurvlakMnm")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/mnm-bt-lichtgrijs.jpg')"
    }

function mnmBtPickKlei(){

    const kleurentest = document.getElementsByClassName("kleurvlakMnm")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/mnm-bt-klei.jpg')";
    }

// Organisch
function orgPickBeige(){

    const kleurentest = document.getElementsByClassName("kleurvlakOrg")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/org-beige.jpg')";
    }

function orgPickBruingroen(){

    const kleurentest = document.getElementsByClassName("kleurvlakOrg")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/org-bruingroen.jpg')";
        kleurentest.style.backgroundRepeat = "no-repeat";
        kleurentest.style.backgroundPosition = "center";
        kleurentest.style.backgroundSize = "cover";
    }

function orgPickGeelgroen(){

        const kleurentest = document.getElementsByClassName("kleurvlakOrg")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/org-geelgroen.jpg')";
        kleurentest.style.backgroundRepeat = "no-repeat";
        kleurentest.style.backgroundPosition = "center";
        kleurentest.style.backgroundSize = "cover";
        }
    
function orgPickGroen(){
    
        const kleurentest = document.getElementsByClassName("kleurvlakOrg")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/org-groen.jpg')";
        }

function orgBtPickDonkergrijs(){

    const kleurentest = document.getElementsByClassName("kleurvlakOrg")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/org-bt-donkergrijs.jpg')"
    }

function orgBtPickLichtgrijs(){

    const kleurentest = document.getElementsByClassName("kleurvlakOrg")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/org-bt-lichtgrijs.jpg')";
    }

// Speels
function splPickBlauw(){

    const kleurentest = document.getElementsByClassName("kleurvlakSpl")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/spl-blauw.jpg')";
    }

function splPickGroen(){

    const kleurentest = document.getElementsByClassName("kleurvlakSpl")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/spl-groen.jpg')";
    kleurentest.style.backgroundRepeat = "no-repeat";
        kleurentest.style.backgroundPosition = "center";
        kleurentest.style.backgroundSize = "cover";
    }

function splPickRoze(){

        const kleurentest = document.getElementsByClassName("kleurvlakSpl")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/spl-roze.jpg')";
        kleurentest.style.backgroundRepeat = "no-repeat";
        kleurentest.style.backgroundPosition = "center";
        kleurentest.style.backgroundSize = "cover";
        }
    
function splPickWit(){
    
        const kleurentest = document.getElementsByClassName("kleurvlakSpl")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/spl-wit.jpg')";
        }

function splBtPickBlauw(){

    const kleurentest = document.getElementsByClassName("kleurvlakSpl")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/spl-bt-blauw.jpg')"
    }

function splBtPickRood(){

    const kleurentest = document.getElementsByClassName("kleurvlakSpl")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/spl-bt-rood.jpg')";
    }

// Cultuur
function cltPickBeige(){

    const kleurentest = document.getElementsByClassName("kleurvlakClt")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/clt-beige.jpg')";
    kleurentest.style.backgroundRepeat = "no-repeat";
        kleurentest.style.backgroundPosition = "center";
        kleurentest.style.backgroundSize = "cover";
    }

function cltPickGoud(){

    const kleurentest = document.getElementsByClassName("kleurvlakClt")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/clt-goud.jpg')";
    kleurentest.style.backgroundRepeat = "no-repeat";
        kleurentest.style.backgroundPosition = "center";
        kleurentest.style.backgroundSize = "cover";
    }

function cltPickGrijs(){

        const kleurentest = document.getElementsByClassName("kleurvlakClt")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/clt-grijs.jpg')";
        kleurentest.style.backgroundRepeat = "no-repeat";
        kleurentest.style.backgroundPosition = "center";
        kleurentest.style.backgroundSize = "cover";
        }
    
function cltPickTerracotta(){
    
        const kleurentest = document.getElementsByClassName("kleurvlakClt")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/clt-terracotta.jpg')";
        }

function cltBtPickLichtgrijs(){

    const kleurentest = document.getElementsByClassName("kleurvlakClt")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/clt-bt-lichtgrijs.jpg')"
    }

function cltBtPickBruin(){

    const kleurentest = document.getElementsByClassName("kleurvlakClt")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/clt-bt-bruin.jpg')";
    }

// Lux
function luxPickBrons(){

    const kleurentest = document.getElementsByClassName("kleurvlakLux")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/lux-brons.jpg')";
    }

function luxPickBruin(){

    const kleurentest = document.getElementsByClassName("kleurvlakLux")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/lux-bruin.jpg')";
    }

function luxPickGrijs(){

        const kleurentest = document.getElementsByClassName("kleurvlakLux")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/lux-grijs.jpg')";
        kleurentest.style.backgroundRepeat = "no-repeat";
        kleurentest.style.backgroundPosition = "center";
        kleurentest.style.backgroundSize = "cover";
        }
    
function luxPickGroen(){
    
        const kleurentest = document.getElementsByClassName("kleurvlakLux")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/lux-groen.jpg')";
        }

function luxBtPickGroen(){

    const kleurentest = document.getElementsByClassName("kleurvlakLux")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/lux-bt-groen.jpg')"
    }

function luxBtPickPaars(){

    const kleurentest = document.getElementsByClassName("kleurvlakLux")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/lux-bt-paars.jpg')";
    }

// Klassiekers
function klsPickBlauwgrijs(){

    const kleurentest = document.getElementsByClassName("kleurvlakKls")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/kls-blauwgrijs.jpg')";
    }

function klsPickBruingrijs(){

    const kleurentest = document.getElementsByClassName("kleurvlakKls")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/kls-bruingrijs.jpg')";
    }

function klsPickGrijs(){

        const kleurentest = document.getElementsByClassName("kleurvlakKls")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/kls-grijs.jpg')";
        kleurentest.style.backgroundRepeat = "no-repeat";
        kleurentest.style.backgroundPosition = "center";
        kleurentest.style.backgroundSize = "cover";
        }
    
function klsPickGrijsgrijs(){
    
        const kleurentest = document.getElementsByClassName("kleurvlakKls")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/kls-grijsgrijs.jpg')";
        }

function klsPickLichtgrijs(){

            const kleurentest = document.getElementsByClassName("kleurvlakKls")[0];
            kleurentest.style.backgroundImage = "url('Arturo-kleuren/kls-lichtgrijs.jpg')";
            }
        
function klsPickRoodgrijs(){
        
            const kleurentest = document.getElementsByClassName("kleurvlakKls")[0];
            kleurentest.style.backgroundImage = "url('Arturo-kleuren/kls-roodgrijs.jpg')";
            }
        
function klsPickWit(){
        
                const kleurentest = document.getElementsByClassName("kleurvlakKls")[0];
                kleurentest.style.backgroundImage = "url('Arturo-kleuren/kls-wit.jpg')";
                kleurentest.style.backgroundRepeat = "no-repeat";
                kleurentest.style.backgroundPosition = "center";
                kleurentest.style.backgroundSize = "cover";
                }

function klsBtBlauwgrijs(){

    const kleurentest = document.getElementsByClassName("kleurvlakKls")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/kls-bt-blauwgrijs.jpg')"
    }

function klsBtPickDonkergrijs(){

    const kleurentest = document.getElementsByClassName("kleurvlakKls")[0];
    kleurentest.style.backgroundImage = "url('Arturo-kleuren/kls-bt-donkergrijs.jpg')";

    }

function klsBtPickGrijs(){

        const kleurentest = document.getElementsByClassName("kleurvlakKls")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/kls-bt-grijs.jpg')"
        }
    
function klsBtPickLichtgrijs(){
    
        const kleurentest = document.getElementsByClassName("kleurvlakKls")[0];
        kleurentest.style.backgroundImage = "url('Arturo-kleuren/kls-bt-lichtgrijs.jpg')";
        }
        
function klsBtPickLichtroze(){

            const kleurentest = document.getElementsByClassName("kleurvlakKls")[0];
            kleurentest.style.backgroundImage = "url('Arturo-kleuren/kls-bt-lichtroze.jpg')"
            }
        
function klsBtPickRoze(){
        
            const kleurentest = document.getElementsByClassName("kleurvlakKls")[0];
            kleurentest.style.backgroundImage = "url('Arturo-kleuren/kls-bt-roze.jpg')";
            }

function klsBtPickZand(){

                const kleurentest = document.getElementsByClassName("kleurvlakKls")[0];
                kleurentest.style.backgroundImage = "url('Arturo-kleuren/kls-bt-zand.jpg')"
                }
            
function klsBtPickZandgrijs(){
            
                const kleurentest = document.getElementsByClassName("kleurvlakKls")[0];
                kleurentest.style.backgroundImage = "url('Arturo-kleuren/kls-bt-zandgrijs.jpg')";
                }
                       

// Kleur selecteren

                //Industrieel
function selectIndRood(){
const kleur = document.getElementById("ind-rood").outerHTML
localStorage.setItem('kleur', kleur)
window.open("bestellen.html", "_self");
}

function selectIndLichtgrijs(){
    const kleur = document.getElementById("ind-lichtgrijs").outerHTML
    localStorage.setItem('kleur', kleur)
    window.open("bestellen.html", "_self");
    }

    function selectIndBlauw(){
        const kleur = document.getElementById("ind-blauw").outerHTML
        localStorage.setItem('kleur', kleur)
        window.open("bestellen.html", "_self");
        }

        function selectIndDonkergrijs(){
            const kleur = document.getElementById("ind-donkergrijs").outerHTML
            localStorage.setItem('kleur', kleur)
            window.open("bestellen.html", "_self");
            }

            function selectIndBtLichtgrijs(){
                const kleur = document.getElementById("ind-bt-lichtgrijs").outerHTML
                localStorage.setItem('kleur', kleur)
                window.open("bestellen.html", "_self");
                }

                function selectIndBtGrijs(){
                    const kleur = document.getElementById("ind-bt-grijs").outerHTML
                    localStorage.setItem('kleur', kleur)
                    window.open("bestellen.html", "_self");
                    }

//Sportief

function selectSprBlauw(){
    const kleur = document.getElementById("spr-blauw").outerHTML
    localStorage.setItem('kleur', kleur)
    window.open("bestellen.html", "_self");
    }

    function selectSprGeel(){
        const kleur = document.getElementById("spr-geel").outerHTML
        localStorage.setItem('kleur', kleur)
        window.open("bestellen.html", "_self");
        }

        function selectSprLichtblauw(){
            const kleur = document.getElementById("spr-lichtblauw").outerHTML
            localStorage.setItem('kleur', kleur)
            window.open("bestellen.html", "_self");
            }

            function selectSprRood(){
                const kleur = document.getElementById("spr-rood").outerHTML
                localStorage.setItem('kleur', kleur)
                window.open("bestellen.html", "_self");
                }

                function selectSprBtDonkergrijs(){
                    const kleur = document.getElementById("spr-bt-donkergrijs").outerHTML
                    localStorage.setItem('kleur', kleur)
                    window.open("bestellen.html", "_self");
                    }

                    function selectSprBtLichtgrijs(){
                        const kleur = document.getElementById("spr-bt-lichtgrijs").outerHTML
                        localStorage.setItem('kleur', kleur)
                        window.open("bestellen.html", "_self");
                        }

//Stedelijk

function selectStdBlauw(){
    const kleur = document.getElementById("std-blauw").outerHTML
    localStorage.setItem('kleur', kleur)
    window.open("bestellen.html", "_self");
    }

    function selectStdGroen(){
        const kleur = document.getElementById("std-groen").outerHTML
        localStorage.setItem('kleur', kleur)
        window.open("bestellen.html", "_self");
        }

        function selectStdTaupe(){
            const kleur = document.getElementById("std-taupe").outerHTML
            localStorage.setItem('kleur', kleur)
            window.open("bestellen.html", "_self");
            }

            function selectStdViolet(){
                const kleur = document.getElementById("std-violet").outerHTML
                localStorage.setItem('kleur', kleur)
                window.open("bestellen.html", "_self");
                }

                function selectStdBtBlauw(){
                    const kleur = document.getElementById("std-bt-blauw").outerHTML
                    localStorage.setItem('kleur', kleur)
                    window.open("bestellen.html", "_self");
                    }

                    function selectStdBtGrijs(){
                        const kleur = document.getElementById("std-bt-grijs").outerHTML
                        localStorage.setItem('kleur', kleur)
                        window.open("bestellen.html", "_self");
                        }

//Minimalistisch

function selectMnmBlauw(){
    const kleur = document.getElementById("mnm-blauw").outerHTML
    localStorage.setItem('kleur', kleur)
    window.open("bestellen.html", "_self");
    }

    function selectMnmGrijs(){
        const kleur = document.getElementById("mnm-grijs").outerHTML
        localStorage.setItem('kleur', kleur)
        window.open("bestellen.html", "_self");
        }

        function selectMnmLichtgrijs(){
            const kleur = document.getElementById("mnm-lichtgrijs").outerHTML
            localStorage.setItem('kleur', kleur)
            window.open("bestellen.html", "_self");
            }

            function selectMnmWit(){
                const kleur = document.getElementById("mnm-wit").outerHTML
                localStorage.setItem('kleur', kleur)
                window.open("bestellen.html", "_self");
                }

                function selectMnmBtKlei(){
                    const kleur = document.getElementById("mnm-bt-klei").outerHTML
                    localStorage.setItem('kleur', kleur)
                    window.open("bestellen.html", "_self");
                    }

                    function selectMnmBtLichtgrijs(){
                        const kleur = document.getElementById("mnm-bt-lichtgrijs").outerHTML
                        localStorage.setItem('kleur', kleur)
                        window.open("bestellen.html", "_self");
                        }

//Organisch

function selectOrgBeige(){
    const kleur = document.getElementById("org-beige").outerHTML
    localStorage.setItem('kleur', kleur)
    window.open("bestellen.html", "_self");
    }

    function selectOrgBruingroen(){
        const kleur = document.getElementById("org-bruingroen").outerHTML
        localStorage.setItem('kleur', kleur)
        window.open("bestellen.html", "_self");
        }

        function selectOrgGeelgroen(){
            const kleur = document.getElementById("org-geelgroen").outerHTML
            localStorage.setItem('kleur', kleur)
            window.open("bestellen.html", "_self");
            }

            function selectOrgGroen(){
                const kleur = document.getElementById("org-groen").outerHTML
                localStorage.setItem('kleur', kleur)
                window.open("bestellen.html", "_self");
                }

                function selectOrgBtDonkergrijs(){
                    const kleur = document.getElementById("org-bt-donkergrijs").outerHTML
                    localStorage.setItem('kleur', kleur)
                    window.open("bestellen.html", "_self");
                    }

                    function selectOrgBtLichtgrijs(){
                        const kleur = document.getElementById("org-bt-lichtgrijs").outerHTML
                        localStorage.setItem('kleur', kleur)
                        window.open("bestellen.html", "_self");
                        }

//Speels

function selectSplBlauw(){
    const kleur = document.getElementById("spl-blauw").outerHTML
    localStorage.setItem('kleur', kleur)
    window.open("bestellen.html", "_self");
    }

    function selectSplGroen(){
        const kleur = document.getElementById("spl-groen").outerHTML
        localStorage.setItem('kleur', kleur)
        window.open("bestellen.html", "_self");
        }

        function selectSplRoze(){
            const kleur = document.getElementById("spl-roze").outerHTML
            localStorage.setItem('kleur', kleur)
            window.open("bestellen.html", "_self");
            }

            function selectSplWit(){
                const kleur = document.getElementById("spl-wit").outerHTML
                localStorage.setItem('kleur', kleur)
                window.open("bestellen.html", "_self");
                }

                function selectSplBtBlauw(){
                    const kleur = document.getElementById("spl-bt-blauw").outerHTML
                    localStorage.setItem('kleur', kleur)
                    window.open("bestellen.html", "_self");
                    }

                    function selectSplBtRood(){
                        const kleur = document.getElementById("spl-bt-rood").outerHTML
                        localStorage.setItem('kleur', kleur)
                        window.open("bestellen.html", "_self");
                        }

//Cultuur

function selectCltBeige(){
    const kleur = document.getElementById("clt-beige").outerHTML
    localStorage.setItem('kleur', kleur)
    window.open("bestellen.html", "_self");
    }

    function selectCltGoud(){
        const kleur = document.getElementById("clt-goud").outerHTML
        localStorage.setItem('kleur', kleur)
        window.open("bestellen.html", "_self");
        }

        function selectCltGrijs(){
            const kleur = document.getElementById("clt-grijs").outerHTML
            localStorage.setItem('kleur', kleur)
            window.open("bestellen.html", "_self");
            }

            function selectCltTerracotta(){
                const kleur = document.getElementById("clt-terracotta").outerHTML
                localStorage.setItem('kleur', kleur)
                window.open("bestellen.html", "_self");
                }

                function selectCltBtBruin(){
                    const kleur = document.getElementById("clt-bt-bruin").outerHTML
                    localStorage.setItem('kleur', kleur)
                    window.open("bestellen.html", "_self");
                    }

                    function selectCltBtLichtgrijs(){
                        const kleur = document.getElementById("clt-bt-lichtgrijs").outerHTML
                        localStorage.setItem('kleur', kleur)
                        window.open("bestellen.html", "_self");
                        }

//Luxe

function selectLuxBrons(){
    const kleur = document.getElementById("lux-brons").outerHTML
    localStorage.setItem('kleur', kleur)
    window.open("bestellen.html", "_self");
    }

    function selectLuxBruin(){
        const kleur = document.getElementById("lux-bruin").outerHTML
        localStorage.setItem('kleur', kleur)
        window.open("bestellen.html", "_self");
        }

        
        function selectLuxGrijs(){
            const kleur = document.getElementById("lux-grijs").outerHTML
            localStorage.setItem('kleur', kleur)
            window.open("bestellen.html", "_self");
            }

            
            function selectLuxGroen(){
                const kleur = document.getElementById("lux-groen").outerHTML
                localStorage.setItem('kleur', kleur)
                window.open("bestellen.html", "_self");
                }

                
                function selectLuxBtGroen(){
                    const kleur = document.getElementById("lux-bt-groen").outerHTML
                    localStorage.setItem('kleur', kleur)
                    window.open("bestellen.html", "_self");
                    }

                    
                    function selectLuxBtPaars(){
                        const kleur = document.getElementById("lux-bt-paars").outerHTML
                        localStorage.setItem('kleur', kleur)
                        window.open("bestellen.html", "_self");
                        }

//Klassiekers

function selectKlsBlauwgrijs(){
    const kleur = document.getElementById("kls-blauwgrijs").outerHTML
    localStorage.setItem('kleur', kleur)
    window.open("bestellen.html", "_self");
    }

    function selectKlsBruingrijs(){
        const kleur = document.getElementById("kls-bruingrijs").outerHTML
        localStorage.setItem('kleur', kleur)
        window.open("bestellen.html", "_self");
        }    
        
        function selectKlsGrijs(){
            const kleur = document.getElementById("kls-grijs").outerHTML
            localStorage.setItem('kleur', kleur)
            window.open("bestellen.html", "_self");
            }
                
            function selectKlsGrijsgrijs(){
                const kleur = document.getElementById("kls-grijsgrijs").outerHTML
                localStorage.setItem('kleur', kleur)
                window.open("bestellen.html", "_self");
                }
                
                function selectKlsLichtgrijs(){
                    const kleur = document.getElementById("kls-lichtgrijs").outerHTML
                    localStorage.setItem('kleur', kleur)
                    window.open("bestellen.html", "_self");
                    }
                
                    function selectKlsRoodgrijs(){
                        const kleur = document.getElementById("kls-roodgrijs").outerHTML
                        localStorage.setItem('kleur', kleur)
                        window.open("bestellen.html", "_self");
                        }

                        function selectKlsWit(){
                            const kleur = document.getElementById("kls-wit").outerHTML
                            localStorage.setItem('kleur', kleur)
                            window.open("bestellen.html", "_self");
                            }
                        
                        function selectKlsBtBlauwgrijs(){
                            const kleur = document.getElementById("kls-bt-blauwgrijs").outerHTML
                            localStorage.setItem('kleur', kleur)
                            window.open("bestellen.html", "_self", "_self");
                            }

                            function selectKlsBtDonkergrijs(){
                                const kleur = document.getElementById("kls-bt-donkergrijs").outerHTML
                                localStorage.setItem('kleur', kleur)
                                window.open("bestellen.html", "_self");
                                }

                                function selectKlsBtGrijs(){
                                    const kleur = document.getElementById("kls-bt-grijs").outerHTML
                                    localStorage.setItem('kleur', kleur)
                                    window.open("bestellen.html", "_self");
                                    }
                                    function selectKlsBtLichtgrijs(){
                                        const kleur = document.getElementById("kls-bt-lichtgrijs").outerHTML
                                        localStorage.setItem('kleur', kleur)
                                        window.open("bestellen.html", "_self");
                                        }
                                        function selectKlsBtRoze(){
                                            const kleur = document.getElementById("kls-bt-roze").outerHTML
                                            localStorage.setItem('kleur', kleur)
                                            window.open("bestellen.html", "_self");
                                            }
                                            function selectKlsBtZand(){
                                                const kleur = document.getElementById("kls-bt-zand").outerHTML
                                                localStorage.setItem('kleur', kleur)
                                                window.open("bestellen.html", "_self");
                                                }
                                                function selectKlsBtZandgrijs(){
                                                    const kleur = document.getElementById("kls-bt-zandgrijs").outerHTML
                                                    localStorage.setItem('kleur', kleur)
                                                    window.open("bestellen.html", "_self");
                                                    }
                                                                                                                                                                                                                                                                                                                                    
                                                                    
                    
