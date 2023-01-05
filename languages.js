import { language } from "./data/languagesData.js";
import {PL, ENG} from "./data/variables.js";
import {reloadLanguage} from "./utils/reloadLanguage.js";

const btnENG = document.querySelector("[href='#eng']");
const btnPL = document.querySelector("[href='#pl']");
const btnRegisterLink = document.getElementById("btnRegisterLink");
const btnLoginLink = document.getElementById("btnLoginLink");
const btnTransactions = document.getElementById("btnTransactions");
const btnLogout = document.getElementById("btnLogout");
const h1 = document.querySelector(".main__h1");
const dataReloadElements = document.querySelectorAll("[data-reload]");

const languageReference = language.eng.pageHome


  if (ENG) {
    btnENG.classList.add("nav__btnLanguage--active");
   
    btnRegisterLink &&
      ((btnRegisterLink.textContent = languageReference.registerLink),
      (btnRegisterLink.href = "../pages/register/register.html#eng"));
    
      btnLoginLink &&
      ((btnLoginLink.textContent = languageReference.loginLink),
      (btnLoginLink.href = "../pages/login/login.html#eng "));
    
      btnTransactions &&
      ((btnTransactions.textContent = languageReference.transactions),
        (btnTransactions.href = "../pages/transactions/transactions.html#eng")
        );
      
      btnLogout && (btnLogout.textContent = languageReference.btnLogout);
   
    h1.textContent = languageReference.h1;
  }



if (PL || window.location.hash === "") {
  btnPL.classList.add("nav__btnLanguage--active");
}

reloadLanguage(dataReloadElements)


