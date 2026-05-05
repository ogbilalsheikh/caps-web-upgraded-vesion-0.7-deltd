const opn = document.getElementById("menu");
const clos = document.getElementById("close");
const slideBar = document.getElementById("slideBar");

opn.addEventListener("click", function () {
    slideBar.classList.toggle("active")
})
clos.addEventListener("click", function () {
    slideBar.classList.toggle("active")
})


const items = document.querySelectorAll('.faq-item');

items.forEach(item => {
    item.addEventListener("click", function(){
        item.classList.toggle("active")
    })    
   
});


const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(drop => {
    const toggle = drop.querySelector("a");
    const menu = drop.querySelector(".dropdown-menu");

    toggle.addEventListener("click", function(){
        menu.classList.toggle("active");
    });
});