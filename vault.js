const opn = document.getElementById("menu");
const clos = document.getElementById("close");
const slideBar = document.getElementById("slideBar");

opn.addEventListener("click", function () {
    slideBar.classList.toggle("active")
})
clos.addEventListener("click", function () {
    slideBar.classList.toggle("active")
})

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(drop => {
    const toggle = drop.querySelector("a");
    const menu = drop.querySelector(".dropdown-menu");

    toggle.addEventListener("click", function(){
        menu.classList.toggle("active");
    });
});

const plus = document.querySelectorAll(".btnPlus");
const minus = document.querySelectorAll(".btnMinus");
const show = document.querySelectorAll(".show");
const price = document.querySelectorAll(".price");
const subTotal = document.getElementById("subTotal");
const itemPrice = 124;

plus.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        let value = +(show[index].innerHTML);
        value++;
        show[index].innerHTML = value;
        price[index].innerHTML = '$' + value * itemPrice + ".00";
    });
});

minus.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        let value = +(show[index].innerHTML);
        if (value > 1) {
            value--;
            show[index].innerHTML = value;
            price[index].innerHTML = '$' + value * itemPrice + ".00"
        }
    });
});


const removes = document.querySelectorAll(".remove");
const card = document.querySelectorAll(".card");

removes.forEach((remove, i) => {
    remove.addEventListener("click", function () {
        card[i].style.display = "none"
    })

});