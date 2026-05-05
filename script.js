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

//////////////////////////////////////////////////

const progress = document.getElementById("progress");

if (!sessionStorage.getItem("loaderShown")) {

    setTimeout(() => {
        progress.style.opacity = "0";

        setTimeout(() => {
            progress.style.display = "none";
        }, 1000);
    }, 5000);

    sessionStorage.setItem("loaderShown", "true");

} else {
    progress.style.display = "none";
}