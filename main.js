const header = document.querySelector("header");
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 50){
        header.classList.add("scroll");
    }else{
        header.classList.remove("scroll");
    };
});
const menuIcon = document.querySelector(".menu_icon");
const linksContainer = document.querySelector(".links");
const links = document.querySelectorAll(".link");
menuIcon.addEventListener("click", () =>{
    linksContainer.classList.toggle("show");
});
links.forEach(link => {
    link.addEventListener("click", () =>{
        if(linksContainer.classList.contains("show")){
            linksContainer.classList.remove("show");
        };
    });
});