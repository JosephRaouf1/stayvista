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


const dateInputs = document.querySelectorAll(".date_input");

dateInputs.forEach(function (dateInput) {
    const input = dateInput.querySelector("input");
    const text = dateInput.querySelector("span");

    input.addEventListener("change", function () {
        if (this.value === "") {
            text.textContent = text.dataset.default;
        } else {
            text.textContent = this.value;
        }
    });
});

const inputs = document.querySelectorAll(".date_input input");

const checkIn = inputs[0];
const checkOut = inputs[1];

const today = new Date().toISOString().split("T")[0];

checkIn.min = today;
checkOut.min = today;

checkIn.addEventListener("change", function () {
    if (this.value === "") {
        checkOut.min = today;
        checkOut.max = "";
    } else {
        checkOut.min = this.value;
    }
});

checkOut.addEventListener("change", function () {
    if (this.value === "") {
        checkIn.max = "";
    } else {
        checkIn.max = this.value;
    }
});