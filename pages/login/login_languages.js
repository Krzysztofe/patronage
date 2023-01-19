import { language } from "../../data/languages_data.js";
import { languageKey, languageURLKey } from "../../data/variables.js";

const languageRef = language[languageKey].pageLogin;

document.getElementById("btnRegisterLink").textContent =
  languageRef.registerLink;
document.getElementById(
  "btnRegisterLink"
).href = `../register/register.html${languageURLKey}`;
document.getElementById("h2").textContent = languageRef.h2;
document.getElementById("userNameLabel").textContent = languageRef.userName;
document.getElementById("userName").placeholder =
  languageRef.userNamePlaceholder;
document.getElementById("passwordLabel").textContent = languageRef.password;
document.getElementById("password").placeholder =
  languageRef.passwordPlaceholder;
document.getElementById("btnLogin").textContent = languageRef.btnLogin;
