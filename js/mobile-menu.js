const span = document.getElementById("hamburguer-menu");
const menu = document.getElementById("mobile-menu");

function mobileMenu(){
    menu.classList.toggle("collapsed");
    if(span.innerText === "menu"){
        span.textContent = "close";
    }else{
        span.textContent = "menu";
    }
}