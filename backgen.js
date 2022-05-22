var color1 = document.querySelector(".colora");
var color2 = document.querySelector(".colorb");
var thrd = document.querySelector("h3");
var baldy = document.getElementById("gert");

function setGradient(){
    color1.setAttribute("value", color1.value);
    baldy.style.background = "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value + ")";
    thrd.textContent = baldy.style.background + ";"
}

window.addEventListener(document.onload, setGradient());

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
