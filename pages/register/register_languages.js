import { language } from "../../data/languages_data.js";
import { languageKey, languageURLKey } from "../../data/variables.js";

const languageRef = language[languageKey].pageRegister;

const [
  btnLoginLink,
  h2,
  userNameLabel,
  userName,
  passwordLabel,
  password,
  emailLabel,
  email,
  emailRepeatLabel,
  emailRepeat,
  btnRegister,
] = [
  "btnLoginLink",
  "h2",
  "userNameLabel",
  "userName",
  "passwordLabel",
  "password",
  "emailLabel",
  "email",
  "emailRepeatLabel",
  "emailRepeat",
  "btnRegister",
].map(item => {
  return document.getElementById(item);
});

btnLoginLink.textContent = languageRef.loginLink;
btnLoginLink.href = `../login/login.html${languageURLKey}`;
h2.textContent = languageRef.h2;
userNameLabel.textContent = languageRef.userNameLabel;
userName.placeholder = languageRef.userNamePlaceholder;
passwordLabel.textContent = languageRef.passwordLabel;
password.placeholder = languageRef.passwordPlaceholder;
emailLabel.textContent = languageRef.emaiLabel;
email.placeholder = languageRef.emailPlaceholder;
emailRepeatLabel.textContent = languageRef.emailRepeatLabel;
emailRepeat.placeholder = languageRef.emailRepeatPlacecholder;
btnRegister.textContent = languageRef.btnRegister;
