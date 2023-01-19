import { ENG, PL } from "../data/variables.js";

const btnENG = document.querySelector("[href='#eng']");
const btnPL = document.querySelector("[href='#pl']");
const dataReloadElements = document.querySelectorAll("[data-reload]");

if (ENG) {
  btnENG.classList.add("nav__btnLanguage--active");
}
if (PL || location.hash === "") {
  btnPL.classList.add("nav__btnLanguage--active");
}

dataReloadElements.forEach(element => {
  element.addEventListener("click", () => {
    location.href = element.getAttribute("href");
    location.reload();
  });
});
