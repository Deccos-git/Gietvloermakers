
const room = document.getElementById("room-scene")

let scene, camera, camera2, renderer, roomScene, light, plant

let newColor = "/Arturo-kleuren/signal-red.jpg"

function selectStyle(){

    const select = document.getElementById("select-colour")

    const options = select.options
    const option = options[options.selectedIndex].innerHTML

    setColorDiv(option)
};

function changeColourTitle(elem){

    const colorH2 = document.getElementById("color-name")

    colorH2.innerText = elem.id

};

function changeColorOfMesh(elem){

    newColor = elem.firstElementChild.src

    const canvas = room.firstElementChild
    room.removeChild(canvas)
    changeColourTitle(elem)

    init()

}

function setColorDiv(option){

    const sturdySignalsBox = document.getElementById("color-picker-sturdy-signals")
    const digitalPerspective = document.getElementById("color-picker-digital-perspective")
    const cityRoots = document.getElementById("color-picker-city-roots")
    const honestPureness = document.getElementById("color-picker-honest-pureness")
    const structuredMatrix = document.getElementById("color-picker-structered-matrix")
    const retroPastels = document.getElementById("color-picker-retro-pastels")
    const globalSpirit = document.getElementById("color-picker-global-spirit")
    const darkShine = document.getElementById("color-picker-dark-shine")
    const evergreens = document.getElementById("color-picker-evergreens")

    const colorH2 = document.getElementById("color-name")

    colorH2.innerText = "Selecteer een kleur"

    if(option === "Sturdy Signals"){
        sturdySignalsBox.style.display = "flex"
        digitalPerspective.style.display = "none"
        cityRoots.style.display = "none"
        honestPureness.style.display = "none"
        structuredMatrix.style.display = "none"
        retroPastels.style.display = "none"
        globalSpirit.style.display = "none"
        darkShine.style.display = "none"
        evergreens.style.display = "none"
    } else if (option === "Digital Perspective"){
        digitalPerspective.style.display = "flex"
        sturdySignalsBox.style.display = "none"
        cityRoots.style.display = "none"
        honestPureness.style.display = "none"
        structuredMatrix.style.display = "none"
        retroPastels.style.display = "none"
        globalSpirit.style.display = "none"
        darkShine.style.display = "none"
        evergreens.style.display = "none"
    } else if (option === "City Roots"){
        cityRoots.style.display = "flex"
        sturdySignalsBox.style.display = "none"
        digitalPerspective.style.display = "none"
        honestPureness.style.display = "none"
        structuredMatrix.style.display = "none"
        retroPastels.style.display = "none"
        globalSpirit.style.display = "none"
        darkShine.style.display = "none"
        evergreens.style.display = "none"
    } else if (option === "Honest Pureness"){
        honestPureness.style.display = "flex"
        cityRoots.style.display = "none"
        sturdySignalsBox.style.display = "none"
        digitalPerspective.style.display = "none"
        structuredMatrix.style.display = "none"
        retroPastels.style.display = "none"
        globalSpirit.style.display = "none"
        darkShine.style.display = "none"
        evergreens.style.display = "none"
    } else if (option === "Structured Matrix"){
        structuredMatrix.style.display = "flex"
        honestPureness.style.display = "none"
        cityRoots.style.display = "none"
        sturdySignalsBox.style.display = "none"
        digitalPerspective.style.display = "none"
        retroPastels.style.display = "none"
        globalSpirit.style.display = "none"
        darkShine.style.display = "none"
        evergreens.style.display = "none"
    } else if (option === "Retro Pastels"){
        retroPastels.style.display = "flex"
        structuredMatrix.style.display = "none"
        honestPureness.style.display = "none"
        cityRoots.style.display = "none"
        sturdySignalsBox.style.display = "none"
        digitalPerspective.style.display = "none"
        globalSpirit.style.display = "none"
        darkShine.style.display = "none"
        evergreens.style.display = "none"
    } else if (option === "Global Spirit"){
        globalSpirit.style.display = "flex"
        retroPastels.style.display = "none"
        structuredMatrix.style.display = "none"
        honestPureness.style.display = "none"
        cityRoots.style.display = "none"
        sturdySignalsBox.style.display = "none"
        digitalPerspective.style.display = "none"
        darkShine.style.display = "none"
        evergreens.style.display = "none"
    } else if (option === "Dark Shine"){
        darkShine.style.display = "flex"
        globalSpirit.style.display = "none"
        retroPastels.style.display = "none"
        structuredMatrix.style.display = "none"
        honestPureness.style.display = "none"
        cityRoots.style.display = "none"
        sturdySignalsBox.style.display = "none"
        digitalPerspective.style.display = "none"
        evergreens.style.display = "none"
    } else if (option === "Evergreens"){
        evergreens.style.display = "flex"
        darkShine.style.display = "none"
        globalSpirit.style.display = "none"
        retroPastels.style.display = "none"
        structuredMatrix.style.display = "none"
        honestPureness.style.display = "none"
        cityRoots.style.display = "none"
        sturdySignalsBox.style.display = "none"
        digitalPerspective.style.display = "none"
    };
};

function init(){

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xFFFFFF );

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 5;
    camera.position.y = 1.3;
    camera.position.x = 0;

    renderer = new THREE.WebGLRenderer({ antialias: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    room.appendChild(renderer.domElement)

    plant = new THREE.Group()

    const baseGeometry = new THREE.BoxGeometry(0.2, 0.5, 0.2);
    const baseMaterial = new THREE.MeshBasicMaterial({ color: 0xA00025})
    const base = new THREE.Mesh( baseGeometry, baseMaterial );

    const stemGeometry = new THREE.CylinderGeometry(0.01, 0.1, 0.8)
    const stemTexture = new THREE.TextureLoader().load( 'Images/tree-stem-texture.jpg' );
    const stemMaterial = new THREE.MeshBasicMaterial({ map: stemTexture})
    const stem = new THREE.Mesh( stemGeometry, stemMaterial );

    const leavesGeometry = new THREE.SphereGeometry(0.3)
    const leavesTexture = new THREE.TextureLoader().load( 'Images/leaves-texture.jpg' );
    const leavesMaterial = new THREE.MeshBasicMaterial({ map: leavesTexture})
    const leaves = new THREE.Mesh( leavesGeometry, leavesMaterial );
    leaves.position.y = 0.7

    plant.castShadow = true
    plant.position.y = 0.5
    plant.position.z = -2
    plant.position.x = -2

    plant.add(base)
    plant.add(stem)
    plant.add(leaves)

    const geometry = new THREE.BoxGeometry(5,0.1,5);
    const texture = new THREE.TextureLoader().load( newColor );
    const material = new THREE.MeshBasicMaterial({ map: texture})
    cube = new THREE.Mesh( geometry, material );
    cube.castShadow = true
    cube.position.y = 0.2

    roomScene = new THREE.Group()
    roomScene.add(cube)
    roomScene.add(plant)
    scene.add(roomScene)
    
};

function animate() {
	requestAnimationFrame( animate );

    roomScene.rotation.y += 0.001;

	renderer.render( scene, camera );
}

function onWindowRezise(){

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize( window.innerWidth, window.innerHeight );

};

window.addEventListener("rezise", onWindowRezise, false)

init();
animate();