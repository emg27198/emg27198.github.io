//navigation menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

function dropdown1() {
    document.getElementById("mobNav").classList.toggle("hide");
}

//modification date
let d = new Date();
let year = d.getFullYear();
document.getElementById("year").textContent = year;

let modified = document.lastModified;
document.getElementById("modified").textContent = "Last Modified: " + modified;