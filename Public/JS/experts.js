const buttonPrijsTool = document.getElementById("button-prijs-tool")
const m2PrijsTool = document.getElementById("m2")

buttonPrijsTool.addEventListener("click", () => {
    buttonPrijsTool.style.boxShadow = "6px 6px 10px 0 rgba(0, 0, 0, 0.2) inset"
})

m2PrijsTool.addEventListener("click", () => {
    buttonPrijsTool.style.boxShadow = " 3px 3px 3px 0 rgba(0, 0, 0, 0.25) "
})



const videos = document.querySelectorAll(".foto-video");

const observer = new IntersectionObserver((entries, observer) => {
    const [ent] = entries;

    if(ent.isIntersecting){
      ent.style.display = "block"
    };
});

videos.forEach((video) => {
  observer.observe(video);
});