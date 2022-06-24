"use strict";

let btn = document.querySelector("#menu-btn");
let hidden = document.querySelector("#hide");

btn.addEventListener("click", () => {
  hidden.classList.toggle("hidden");
  btn.classList.toggle("open");
});
