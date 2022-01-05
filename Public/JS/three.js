function selectColour(elem){

    const color = elem.dataset.color
    const style = elem.dataset.style

    console.log(style, color)

    localStorage.setItem('kleur', color)
    localStorage.setItem('style', style)

    setTimeout(() => {
            window.open("prijs.html", "_self");
    }, 500);

};

function changeColor(elem){
    const newColor = elem.previousElementSibling.previousElementSibling.src

    const canvas = document.getElementById("complete-view-inner-div")

    canvas.style.backgroundImage = `url(${newColor})`
}

