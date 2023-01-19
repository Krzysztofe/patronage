import { language } from "../../data/languages_data.js";
import { languageKey } from "../../data/variables.js";

export const validationRegister = () => {
  const userNameValue = userName.value.trim();
  const errorUserName = document.querySelector(".errorUserName");

  const passwordValue = password.value.trim();
  const errorPassword = document.querySelector(".errorPassword");

  const emailValue = email.value.trim();
  const errorEmail = document.querySelector(".errorEmail");

  const emailRepeatValue = emailRepeat.value.trim();
  const errorEmailRepeat = document.querySelector(".errorEmailRepeat");

  const languageRef = language[languageKey].pageRegister;
  const usersData = JSON.parse(localStorage.getItem("users")) || [];

  let errors = false;

  const regExEmail =
    /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

  if (userNameValue.length < 6) {
    errorUserName.innerText = languageRef.userNameErrorMinCharacters;
    errors = true;
  } else if (userNameValue.length > 16) {
    errorUserName.innerText = languageRef.userNameErrorMaxCharacters;
    errors = true;
  } else {
    errorUserName.innerText = "";
  }

  if (passwordValue.length < 6) {
    errorPassword.innerText = languageRef.passwordError;
    errors = true;
  } else {
    errorPassword.innerText = "";
  }

  if (!regExEmail.test(emailValue)) {
    errorEmail.innerText = languageRef.emailError;
    errors = true;
  } else {
    errorEmail.innerText = "";
  }

  if (emailRepeatValue !== emailValue) {
    errorEmailRepeat.innerText = languageRef.emailRepeatError;
    errors = true;
  } else {
    errorEmailRepeat.innerText = "";
  }

  if (usersData.some(i => i.userName === userNameValue)) {
    errorUserName.innerText = languageRef.userNameErrorRegistered;
    errors = true;
  }

  if (usersData.some(i => i.email === emailValue)) {
    errorEmail.innerText = languageRef.emailErrorRegistered;
    errors = true;
  }

  return errors;
};
