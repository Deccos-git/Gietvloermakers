// Hamburgermenu
function hamburgerMenu(){
    const menuItems = document.getElementById("menuItems");
    if (menuItems.style.display == "flex"){
    menuItems.style.display = "none"
    } else {
    menuItems.style.display = "flex" 
    }
}

// Show video's on scroll in blog

//     const youtube = document.getElementsByClassName("foto-video")

//    const youtubeArray = Array.from(youtube)

//     youtubeArray.forEach(tube => {
//         window.scroll(function() {
//             tube.style.display = "block"
//         })
//     });


    // const test = document.getElementById("content-dag-1")

    // console.log(test)
    // test.addEventListener("scroll", () => {
    //     test.style.display = "none"
    // })



 