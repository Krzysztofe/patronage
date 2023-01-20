import { languageKey, languageURLKey } from "../data/variables.js";
import { language } from "../data/languages_data.js";

const languageRef = language[languageKey].nav;

const btnRegisterLink = document.createElement("a");
btnRegisterLink.innerText = languageRef.registerLink;
btnRegisterLink.href = `../pages/register/register.html${languageURLKey}`;
btnRegisterLink.className = "nav__btnBottom";

const btnLoginLink = document.createElement("a");
btnLoginLink.innerText = languageRef.loginLink;
btnLoginLink.href = `../pages/login/login.html${languageURLKey}`;
btnLoginLink.className = "nav__btnBottom";

const btnTransactions = document.createElement("a");
btnTransactions.innerText = languageRef.transactions;
btnTransactions.href = `../pages/transactions/transactions.html${languageURLKey}`;
btnTransactions.className = "nav__btnBottom";

const btnLogout = document.createElement("a");
btnLogout.innerText = languageRef.btnLogout;
btnLogout.className = "nav__btnBottom";

const nav = document.querySelector(".nav__bottomContainer");

// IF NOT LOGGED PRINT REGISTER LOGIN

!localStorage.getItem("userName") && nav.prepend(btnRegisterLink);

!localStorage.getItem("userName") && nav.prepend(btnLoginLink);

// IF LOGGED PRINT LOGOUT TRANSACTIONS

localStorage.getItem("userName") && nav.prepend(btnTransactions);

localStorage.getItem("userName") && nav.prepend(btnLogout);

btnLogout.addEventListener("click", () => {
  localStorage.removeItem("userName");
  location.href = `../../index.html${languageURLKey}`;
});
