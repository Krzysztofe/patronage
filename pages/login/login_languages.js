import { language } from "../../data/languages_data.js";
import { languageKey, languageURLKey } from "../../data/variables.js";

const languageRef = language[languageKey].pageLogin;

const [
  btnRegisterLink, 
  h2,
  userNameLabel,
  userName,
  passwordLabel,
  password,
  btnLogin,
] = [
  "btnRegisterLink",
  "h2",
  "userNameLabel",
  "userName",
  "passwordLabel",
  "password",
  "btnLogin",
].map(item => {
  return document.getElementById(item);
});


btnRegisterLink.textContent = languageRef.registerLink;
btnRegisterLink.href = `../register/register.html${languageURLKey}`
h2.textContent = languageRef.h2;
userNameLabel.textContent = languageRef.userName;
userName.placeholder = languageRef.userNamePlaceholder;
passwordLabel.textContent = languageRef.password;
password.placeholder = languageRef.passwordPlaceholder;
btnLogin.textContent = languageRef.btnLogin;
