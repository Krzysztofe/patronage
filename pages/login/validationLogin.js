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
    i =>
      i.userName === userNameValue &&
      (i.password === passwordValue || i.email === passwordValue)
  );

  const unregisteredEmail =
    !usersData.some(i => i.email === passwordValue) &&
    regularExpressionEmail.test(passwordValue);

    const registeredEmail = usersData.some(i => i.email === passwordValue)

  if (!registeredData) {
    if (window.location.hash === "#eng") {
      errorUserName.innerText = language.eng.pageLogin.userNameError;
      errorPassword.innerText = language.eng.pageLogin.passwordError;
      unregisteredEmail && alert(language.eng.pageLogin.alert);
      registeredEmail && alert("ppp")
    } else {
      errorUserName.innerText = "Podaj nazwę przypisaną do emaila";
      errorPassword.innerText = "Podaj hasło lub email przypisane do nazwy";
      unregisteredEmail && alert("Email niezarejsetrowany możliwy do zarejestrowania ");
      registeredEmail && alert ("Email zarejesrtowany")
      }
    errorsCounter.push(1);
  } else {
    errorUserName.innerText = "";
    errorPassword.innerText = "";
  }
  return errorsCounter;
};
