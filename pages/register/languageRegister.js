import { language } from "../../data/languagesData.js";

const btnENG = document.querySelector("[href='#eng']");
const btnPL = document.querySelector("[href='#pl']");
const btnLoginLink = document.getElementById("btnLoginLink");
const h2 = document.getElementById("h2");
const userNameLabel = document.getElementById("userNameLabel");
const userName = document.getElementById("userName");
const passwordLabel = document.getElementById("passwordLabel");
const password = document.getElementById("password");
const emailLabel = document.getElementById("emailLabel");
const email = document.getElementById("email");
const emailRepeatLabel = document.getElementById("emailRepeatLabel");
const emailRepeat = document.getElementById("emailRepeat");
const btnRegister = document.getElementById("btnRegister");

const dataReloadElements = document.querySelectorAll("[data-reload]");

// if (window.location.hash) {
if (window.location.hash === "#eng") {
  btnENG.classList.add("nav__btnLanguage--active");
  btnLoginLink.textContent = language.eng.pageRegister.loginLink
  btnLoginLink.href = "../login/login.html#eng"
  h2.textContent = language.eng.pageRegister.h2;
  userNameLabel.textContent = language.eng.pageRegister.userNameLabel;
  userName.placeholder = language.eng.pageRegister.userNamePlaceholder;
  passwordLabel.textContent = language.eng.pageRegister.passwordLabel;
  password.placeholder = language.eng.pageRegister.passwordPlaceholder;
  emailLabel.textContent = language.eng.pageRegister.emaiLabel;
  email.placeholder = language.eng.pageRegister.emailPlaceholder;
  emailRepeatLabel.textContent = language.eng.pageRegister.emailRepeatLabel;
  emailRepeat.placeholder = language.eng.pageRegister.emailRepeatPlacecholder;
  btnRegister.textContent = language.eng.pageRegister.btnRegister;
}
// }


if (window.location.hash === "#pl" || window.location.hash === "") {
  btnPL.classList.add("nav__btnLanguage--active");
}

dataReloadElements.forEach(element => {
  element.addEventListener("click", () => {
    window.location.href = element.getAttribute("href");
    window.location.reload();
  });
});
