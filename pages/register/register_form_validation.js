import { language } from "../../data/languages_data.js";
import { languageKey } from "../../data/variables.js";

export const validationRegister = () => {
  const errorUserName = document.querySelector(".errorUserName");
  const errorPassword = document.querySelector(".errorPassword");
  const errorEmail = document.querySelector(".errorEmail");
  const errorEmailRepeat = document.querySelector(".errorEmailRepeat");

  const languageRef = language[languageKey].pageRegister;
  const usersData = JSON.parse(localStorage.getItem("users")) || [];

  const formElem = document.querySelector("form");
  const formData = new FormData(formElem);
  const userValues = Object.fromEntries(formData);

  let errors = false;

  const regExEmail =
    /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

  if (userValues.userName.length < 6) {
    errorUserName.innerText = languageRef.userNameErrorMinCharacters;
    errors = true;
  } else if (userValues.userName.length > 16) {
    errorUserName.innerText = languageRef.userNameErrorMaxCharacters;
    errors = true;
  } else {
    errorUserName.innerText = "";
  }

  if (userValues.password.length < 6) {
    errorPassword.innerText = languageRef.passwordError;
    errors = true;
  } else {
    errorPassword.innerText = "";
  }

  if (!regExEmail.test(userValues.email)) {
    errorEmail.innerText = languageRef.emailError;
    errors = true;
  } else {
    errorEmail.innerText = "";
  }

  if (userValues.emailRepeat !== userValues.email) {
    errorEmailRepeat.innerText = languageRef.emailRepeatError;
    errors = true;
  } else {
    errorEmailRepeat.innerText = "";
  }

  if (usersData.some(i => i.userName === userValues.userName)) {
    errorUserName.innerText = languageRef.userNameErrorRegistered;
    errors = true;
  }

  if (usersData.some(i => i.email === userValues.email)) {
    errorEmail.innerText = languageRef.emailErrorRegistered;
    errors = true;
  }

  return errors;
};
