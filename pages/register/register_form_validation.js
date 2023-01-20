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
  const user = Object.fromEntries(formData);

  let errors = false;

  const regExEmail =
    /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

  if (!userNameConditions()) {
    errorUserName.textContent = languageRef.userNameError;
    errors = true;
  } else {
    errorUserName.innerText = "";
  }

  if (user.password.length < 6) {
    errorPassword.innerText = languageRef.passwordError;
    errors = true;
  } else {
    errorPassword.innerText = "";
  }

  if (!regExEmail.test(user.email)) {
    errorEmail.innerText = languageRef.emailError;
    errors = true;
  } else {
    errorEmail.innerText = "";
  }

  if (user.emailRepeat !== user.email) {
    errorEmailRepeat.innerText = languageRef.emailRepeatError;
    errors = true;
  } else {
    errorEmailRepeat.innerText = "";
  }

  if (usersData.some(i => i.userName === user.userName)) {
    errorUserName.innerText = languageRef.userNameErrorRegistered;
    errors = true;
  }

  if (usersData.some(i => i.email === user.email)) {
    errorEmail.innerText = languageRef.emailErrorRegistered;
    errors = true;
  }

  return errors;
};

const userNameConditions = () => {
  const userNameValue = document.getElementById("userName").value;
  const regEx = /^[a-z0-9_\-\[\]\\/]{6,16}$/gi;
  const basicConditions = regEx.test(userNameValue);
  const dygits = userNameValue.match(/[0-9]/g) || [];
  const charts = userNameValue.match(/[a-z]/gi) || [];

  if (dygits.length > 0 && charts.length > 4 && basicConditions) {
    return true;
  } else {
    return false;
  }
};
