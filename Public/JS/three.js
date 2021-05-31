
const room = document.getElementById("room-scene")

let scene, camera, renderer, cube, light

let newColor = "/Arturo-kleuren/signal-red.jpg"

function selectStyle(){

    const select = document.getElementById("select-colour")
    const styleName = document.getElementById("style-name")

    const options = select.options
    const option = options[options.selectedIndex].innerHTML

    styleName.innerText = option

    setInitialColourName(option)
    setColorDiv(option)
};

function setInitialColourName(option){

    const colorH2 = document.getElementById("color-name")

    if(option === "Sturdy Signals"){
        colorH2.innerText = "Signal red"
    } else if (option === "Digital Perspective"){
        colorH2.innerText = "Anus"
    }

};

function changeColorOfMesh(elem){

    newColor = elem.firstElementChild.src

    const canvas = room.firstElementChild
    room.removeChild(canvas)

    init()

}

function setColorDiv(option){

    const sturdySignalsBox = document.getElementById("color-picker-sturdy-signals")
    const digitalPerspective = document.getElementById("color-picker-digital-perspective")

    if(option === "Sturdy Signals"){
        sturdySignalsBox.style.display = "flex"
        digitalPerspective.style.display = "none"
    } else if (option === "Digital Perspective"){
        sturdySignalsBox.style.display = "none"
        digitalPerspective.style.display = "flex"
    }

};

function init(){

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xFFFFFF );

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set( 0, 1.1, 0 )

    renderer = new THREE.WebGLRenderer({ antialias: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    room.appendChild(renderer.domElement)

    console.log(newColor)

    const geometry = new THREE.BoxGeometry(5,0.1,5);
    const texture = new THREE.TextureLoader().load( newColor );
    const material = new THREE.MeshBasicMaterial({ map: texture})
    cube = new THREE.Mesh( geometry, material );
    cube.castShadow = true
    scene.add(cube);

    camera.position.z = 5;
};

function animate() {
	requestAnimationFrame( animate );

    // cube.rotation.x += 0.01;
    cube.rotation.y += 0.001;

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