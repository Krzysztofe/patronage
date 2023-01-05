import { language } from "../../data/languagesData.js";
import { PL, ENG } from "../../data/variables.js";
import { reloadLanguage } from "../../utils/reloadLanguage.js";

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

const languageReference = language.eng.pageRegister

if (ENG) {
  btnENG.classList.add("nav__btnLanguage--active");
  btnLoginLink.textContent = languageReference.loginLink
  btnLoginLink.href = "../login/login.html#eng"
  h2.textContent = languageReference.h2;
  userNameLabel.textContent = languageReference.userNameLabel;
  userName.placeholder = languageReference.userNamePlaceholder;
  passwordLabel.textContent = languageReference.passwordLabel;
  password.placeholder = languageReference.passwordPlaceholder;
  emailLabel.textContent = languageReference.emaiLabel;
  email.placeholder = languageReference.emailPlaceholder;
  emailRepeatLabel.textContent = languageReference.emailRepeatLabel;
  emailRepeat.placeholder = languageReference.emailRepeatPlacecholder;
  btnRegister.textContent = languageReference.btnRegister;
}

if (PL || window.location.hash === "") {
  btnPL.classList.add("nav__btnLanguage--active");
}

reloadLanguage(dataReloadElements)
