"use strict";
var paralax1 = document.querySelector("#paralax1");
var paralax2 = document.querySelector("#paralax2");
window.addEventListener("scroll", function () {
    var offset = window.pageYOffset;
    console.log(offset);
    paralax1.style.backgroundPositionY = offset * 0.5 + "px";
});
window.addEventListener("scroll", function () {
    var offset = window.pageYOffset;
    console.log(offset);
    paralax2.style.backgroundPositionY = offset * 0.3 + "px";
});
var hand = document.querySelector(".hours");
window.addEventListener("scroll", function () {
    // let offset = window.pageYOffset;
    // paralax.style.transform = "rotateZ(" + deg);
    console.log(window.pageYOffset);
    // console.log((window.pageYOffset - 253) * 0.78)
    hand.style.transform = "rotateZ(" + (window.pageYOffset * 0.4) + "deg)";
});
var hamburgerBTN = document.querySelector(".fa-bars");
var toggleBTN = document.querySelector(".fa-times");
var navList = document.querySelector(".navbar-menu");
hamburgerBTN.addEventListener("click", function () {
    toggleBTN.classList.add("open");
    hamburgerBTN.classList.add("open");
    navList.classList.add("open");
});
toggleBTN.addEventListener("click", function () {
    toggleBTN.classList.remove("open");
    hamburgerBTN.classList.remove("open");
    navList.classList.remove("open");
});
