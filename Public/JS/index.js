// Hamburgermenu
function hamburgerMenu(){
    const menuItems = document.getElementById("menuItems");
    if (menuItems.style.display == "flex"){
    menuItems.style.display = "none"
    } else {
    menuItems.style.display = "flex" 
    }
}

// Cookie notice

const cookieDiv = document.getElementById("cookie-notice-div")

function cookieAkkoord(){
    localStorage.setItem("cookies", "OK")

    cookieDiv.style.display = "none"

};

!function cookiesOK(){

    const cookiesFromLocal = localStorage.getItem("cookies")

    if(cookiesFromLocal != "OK"){
        cookieDiv.style.display = "flex"
    }

}();



 