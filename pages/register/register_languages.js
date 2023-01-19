import { language } from "../../data/languages_data.js";
import { languageKey, languageURLKey } from "../../data/variables.js";

const languageRef = language[languageKey].pageRegister;

document.getElementById("btnLoginLink").textContent = languageRef.loginLink;
document.getElementById(
  "btnLoginLink"
).href = `../login/login.html${languageURLKey}`;

document.getElementById("h2").textContent = languageRef.h2;
document.getElementById("userNameLabel").textContent =
  languageRef.userNameLabel;
document.getElementById("userName").placeholder =
  languageRef.userNamePlaceholder;
document.getElementById("passwordLabel").textContent =
  languageRef.passwordLabel;
document.getElementById("password").placeholder =
  languageRef.passwordPlaceholder;
document.getElementById("emailLabel").textContent = languageRef.emaiLabel;
document.getElementById("email").placeholder = languageRef.emailPlaceholder;
document.getElementById("emailRepeatLabel").textContent =
  languageRef.emailRepeatLabel;
document.getElementById("emailRepeat").placeholder =
  languageRef.emailRepeatPlacecholder;
document.getElementById("btnRegister").textContent = languageRef.btnRegister;
