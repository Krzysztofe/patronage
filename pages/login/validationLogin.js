import { language } from "../../data/languagesData.js";

export const validationLogin = () => {
  const errorUserName = document.querySelector(".errorUserName");
  const errorPassword = document.querySelector(".errorPassword");
  const userNameValue = document.getElementById("userName").value.trim();
  const passwordValue = document.getElementById("password").value.trim();
  const usersData = JSON.parse(localStorage.getItem("users")) || [];
  const regularExpressionEmail =
    /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
  let errorsCounter = [];

  const registeredData = usersData.some(
    user =>
      user.userName === userNameValue &&
      (user.password === passwordValue || user.email === passwordValue)
  );

  const unregisteredEmail =
    !usersData.some(user => user.email === passwordValue) &&
    regularExpressionEmail.test(passwordValue);

  const languageKey = window.location.hash === "#eng" ? "eng" : "pl";

  if (!registeredData) {
    errorUserName.innerText = "Podaj nazwę przypisaną do emaila";
    errorPassword.innerText = "Podaj hasło lub email przypisane do nazwy";
    errorsCounter.push(1);
  }
  if (registeredData) {
    errorUserName.innerText = "";
    errorPassword.innerText = "";
  }

  if (unregisteredEmail) {
    alert("Email niezarejestrowany, możliwy do zarejestrowania");
  }
  return errorsCounter;
};


