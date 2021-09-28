function selectColour(elem){

    const color = elem.dataset.name
    const style = elem.dataset.style

    localStorage.setItem('kleur', color)
    localStorage.setItem('style', style)

    setTimeout(() => {
            window.open("prijs.html", "_self");
    }, 500);

};

function changeColorOfMeshSturdySignals(elem){
    const newColor = elem.firstElementChild.src
    const style = elem.dataset.style
    const canvas = document.getElementById("color-picker-sturdy-signals")

    canvas.style.backgroundImage = `url(${newColor})`

    const colorName = elem.id

    showSelectColorButtonSturdySignal(newColor, colorName, style )

}

function showSelectColorButtonSturdySignal(newColor, color, style){
    const button = document.getElementById("select-color-button-sturdy-signals")

    button.style.display = "block"

    const colorName = document.getElementById("color-name-sturdy-signals")

    colorName.innerText = color
    button.setAttribute("data-color", newColor)
    button.setAttribute("data-name", color)
    button.setAttribute("data-style", style)
}

function changeColorOfMeshDigitalPerspective(elem){
    const newColor = elem.firstElementChild.src
    const style = elem.dataset.style
    const canvas = document.getElementById("color-picker-digital-perspective")

    canvas.style.backgroundImage = `url(${newColor})`

    const colorName = elem.id

    showSelectColorButtonDigitalPerspective(newColor, colorName, style )

}

function showSelectColorButtonDigitalPerspective(newColor, color, style){
    const button = document.getElementById("select-color-button-digital-perspective")

    button.style.display = "block"

    const colorName = document.getElementById("color-name-digital-perspective")

    colorName.innerText = color
    button.setAttribute("data-color", newColor)
    button.setAttribute("data-name", color)
    button.setAttribute("data-style", style)
}

function changeColorOfMeshCityRoots(elem){
    const newColor = elem.firstElementChild.src
    const style = elem.dataset.style
    const canvas = document.getElementById("color-picker-city-roots")

    canvas.style.backgroundImage = `url(${newColor})`

    const colorName = elem.id

    showSelectColorButtonCityRoots(newColor, colorName, style )

}

function showSelectColorButtonCityRoots(newColor, color, style){
    const button = document.getElementById("select-color-button-city-roots")

    button.style.display = "block"

    const colorName = document.getElementById("color-name-city-roots")

    colorName.innerText = color
    button.setAttribute("data-color", newColor)
    button.setAttribute("data-name", color)
    button.setAttribute("data-style", style)
}

function changeColorOfMeshHonestPureness(elem){
    const newColor = elem.firstElementChild.src
    const style = elem.dataset.style
    const canvas = document.getElementById("color-picker-honest-pureness")

    canvas.style.backgroundImage = `url(${newColor})`

    const colorName = elem.id

    showSelectColorButtonHonestPureness(newColor, colorName, style )

}

function showSelectColorButtonHonestPureness(newColor, color, style){
    const button = document.getElementById("select-color-button-honest-pureness")

    button.style.display = "block"

    const colorName = document.getElementById("color-name-honest-pureness")

    colorName.innerText = color
    button.setAttribute("data-color", newColor)
    button.setAttribute("data-name", color)
    button.setAttribute("data-style", style)
}

function changeColorOfMeshStructuredMatrix(elem){
    const newColor = elem.firstElementChild.src
    const style = elem.dataset.style
    const canvas = document.getElementById("color-picker-structured-matrix")

    canvas.style.backgroundImage = `url(${newColor})`

    const colorName = elem.id

    showSelectColorButtonStructuredMatrix(newColor, colorName, style )

}

function showSelectColorButtonStructuredMatrix(newColor, color, style){
    const button = document.getElementById("select-color-button-structured-matrix")

    button.style.display = "block"

    const colorName = document.getElementById("color-name-structured-matrix")

    colorName.innerText = color
    button.setAttribute("data-color", newColor)
    button.setAttribute("data-name", color)
    button.setAttribute("data-style", style)
}

function changeColorOfMeshRetroPastels(elem){
    const newColor = elem.firstElementChild.src
    const style = elem.dataset.style
    const canvas = document.getElementById("color-picker-retro-pastels")

    canvas.style.backgroundImage = `url(${newColor})`

    const colorName = elem.id

    showSelectColorButtonRetroPastels(newColor, colorName, style )

}

function showSelectColorButtonRetroPastels(newColor, color, style){
    const button = document.getElementById("select-color-button-retro-pastels")

    button.style.display = "block"

    const colorName = document.getElementById("color-name-retro-pastels")

    colorName.innerText = color
    button.setAttribute("data-color", newColor)
    button.setAttribute("data-name", color)
    button.setAttribute("data-style", style)
}

function changeColorOfMeshGlobalSpirit(elem){
    const newColor = elem.firstElementChild.src
    const style = elem.dataset.style
    const canvas = document.getElementById("color-picker-global-spirit")

    canvas.style.backgroundImage = `url(${newColor})`

    const colorName = elem.id

    showSelectColorButtonGlobalSpirit(newColor, colorName, style )

}

function showSelectColorButtonGlobalSpirit(newColor, color, style){
    const button = document.getElementById("select-color-button-global-spirit")

    button.style.display = "block"

    const colorName = document.getElementById("color-name-global-spirit")

    colorName.innerText = color
    button.setAttribute("data-color", newColor)
    button.setAttribute("data-name", color)
    button.setAttribute("data-style", style)
}

function changeColorOfMeshDarkShine(elem){
    const newColor = elem.firstElementChild.src
    const style = elem.dataset.style
    const canvas = document.getElementById("color-picker-dark-shine")

    canvas.style.backgroundImage = `url(${newColor})`

    const colorName = elem.id

    showSelectColorButtonDarkShine(newColor, colorName, style )

}

function showSelectColorButtonDarkShine(newColor, color, style){
    const button = document.getElementById("select-color-button-dark-shine")

    button.style.display = "block"

    const colorName = document.getElementById("color-name-dark-shine")

    colorName.innerText = color
    button.setAttribute("data-color", newColor)
    button.setAttribute("data-name", color)
    button.setAttribute("data-style", style)
}

function changeColorOfMeshEvergreens(elem){
    const newColor = elem.firstElementChild.src
    const style = elem.dataset.style
    const canvas = document.getElementById("color-picker-evergreens")

    canvas.style.backgroundImage = `url(${newColor})`

    const colorName = elem.id

    showSelectColorButtonEvergreens(newColor, colorName, style )

}

function showSelectColorButtonEvergreens(newColor, color, style){
    const button = document.getElementById("select-color-button-evergreens")

    button.style.display = "block"

    const colorName = document.getElementById("color-name-evergreens")

    colorName.innerText = color
    button.setAttribute("data-color", newColor)
    button.setAttribute("data-name", color)
    button.setAttribute("data-style", style)
}
