import { ENG, PL } from "../data/variables.js";

const dataReloadElements = document.querySelectorAll("[data-reload]");

if (ENG) {
  document
    .querySelector("[href='#eng']")
    .classList.add("nav__btnLanguage--active");
}
if (PL || location.hash === "") {
  document
    .querySelector("[href='#pl']")
    .classList.add("nav__btnLanguage--active");
}

dataReloadElements.forEach(element => {
  element.addEventListener("click", () => {
    location.href = element.getAttribute("href");
    location.reload();
  });
});
