var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.15);
        }, 50);
    }
}

function displayContent() {
    document.getElementById('loader').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});



// The animation of scroll up  "pop up"
let offSet = 0;
window.addEventListener("scroll", function () {
  let st = window.pageYOffset;
  if (st > offSet) {
    document.querySelector(".arrowUp").classList.add("active");
  } else {
    document.querySelector(".arrowUp").classList.remove("active");
  }
});

// script hamburger LINK in CSS youtube video
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
