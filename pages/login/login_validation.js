import { language } from "../../data/languages_data.js";
import { languageKey } from "../../data/variables.js";

export const validationLogin = () => {
  const errorUserName = document.querySelector(".errorUserName");
  const errorPassword = document.querySelector(".errorPassword");
  const userNameValue = document.getElementById("userName").value.trim();
  const passwordValue = document.getElementById("password").value.trim();
  const usersData = JSON.parse(localStorage.getItem("users")) || [];

  const regExEmail =
    /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
  const languageRef = language[languageKey].pageLogin;

  let errors = false;

  const registeredData = usersData.some(
    user =>
      user.userName === userNameValue &&
      (user.password === passwordValue || user.email === passwordValue)
  );

  const unregisteredEmail =
    !usersData.some(user => user.email === passwordValue) &&
    regExEmail.test(passwordValue);

  if (!registeredData) {
    errorUserName.innerText = languageRef.userNameError;
    errorPassword.innerText = languageRef.passwordError;
    errors = true;
  }
  if (unregisteredEmail) {
    alert(languageRef.alert);
    errors = true;
  }
  return errors;
};
