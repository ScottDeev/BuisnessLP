const nav = document.querySelector(".navbar");
const openBtn = document.querySelector(".open-menu img");
const closeBtn = document.querySelector(".close-menu img");
const body = document.querySelector("body");
const navLink = document.querySelectorAll('.navlink a');

const close = function () {
  nav.classList.remove("show-menu");
  body.classList.remove("overlay");
  nav.style.transition = "ease .5s";
  body.style.transition = "ease .5s";
  
};
const open = function () {
  nav.classList.add("show-menu");
  body.classList.add("overlay");
  nav.style.transition = "ease .5s";
  body.style.transition = "ease .5s";
};

openBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);
navLink.forEach((item) => item.addEventListener('click', close));