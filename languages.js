import { language } from "./data/languagesData.js";

const btnENG = document.querySelector("[href='#eng']");
const btnPL = document.querySelector("[href='#pl']");
const btnRegisterLink = document.getElementById("btnRegisterLink");
const btnLoginLink = document.getElementById("btnLoginLink");
const btnTransactions = document.getElementById("btnTransactions");
const btnLogout = document.getElementById("btnLogout");
const h1 = document.querySelector(".main__h1");
const dataReloadElements = document.querySelectorAll("[data-reload]");

if (window.location.hash) {
  if (window.location.hash === "#eng") {
    btnENG.classList.add("nav__btnLanguage--active");
    btnRegisterLink &&
      ((btnRegisterLink.textContent = language.eng.pageHome.registerLink),
      (btnRegisterLink.href = "../pages/register/register.html#eng"));
    btnLoginLink &&
      ((btnLoginLink.textContent = language.eng.pageHome.loginLink),
      (btnLoginLink.href = "../pages/login/login.html#eng "));
    btnTransactions &&
      (btnTransactions.textContent = language.eng.pageHome.transactions);
    btnLogout && (btnLogout.textContent = language.eng.pageHome.btnLogout);
    h1.textContent = language.eng.pageHome.h1;
  }
}

if (window.location.hash === "#pl" || window.location.hash === "") {
  btnPL.classList.add("nav__btnLanguage--active");
}

dataReloadElements.forEach(element => {
  element.addEventListener("click", () => {
    window.location.href = element.getAttribute("href");
    window.location.reload();
  });
});
