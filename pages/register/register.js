import { validationRegister } from "./validationRegister.js";

document.addEventListener("DOMContentLoaded", () => {
  localStorage.getItem("userName") &&
    (window.location.href = "../transactions/transactions.html");

  const userName = document.getElementById("userName");
  const errorUserName = document.querySelector(".errorUserName");
  const password = document.getElementById("password");
  const errorPassword = document.querySelector(".errorPassword");
  const email = document.getElementById("email");
  const errorEmail = document.querySelector(".errorEmail");
  const emailRepeat = document.getElementById("emailRepeat");
  const errorEmailRepeat = document.querySelector(".errorEmailRepeat");
  const btn = document.getElementById("btnRegister");

  btn.addEventListener("click", () => {
    validationRegister();
    if (validationRegister().length !== 0) return;
    setData();

    if (
      errorUserName.innerText !== "" ||
      errorEmail.innerText !== "" ||
      errorEmailRepeat.innerText !== ""
    ) {
      return;
    } else {
      userName.value = "";
      password.value = "";
      email.value = "";
      emailRepeat.value = "";
    }
  });

  const setData = () => {
    const userNameValue = userName.value.trim();
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();
    const emailRepeatValue = emailRepeat.value.trim();

    const userData = JSON.parse(localStorage.getItem("users")) || [];

    if (userData.some(i => i.userName === userNameValue)) {
      window.location.hash === "#eng"
        ? (errorUserName.innerText = "User name registered")
        : (errorUserName.innerText = "Nazwa użytkownika zarejestrowana");
      return;
    }

    if (userData.some(i => i.email === emailValue)) {
      window.location.hash === "#eng"
        ? (errorEmail.innerText = "Email registered")
        : (errorEmail.innerText = "Email zarejestrowany");
      return;
    } else {
      userData.push({
        userName: userNameValue,
        password: passwordValue,
        email: emailValue,
        emailRepeat: emailRepeatValue,
      });

      let logedUser = userData.filter(
        i => i.userName === userNameValue
      )[0];
      localStorage.setItem("userName", logedUser.userName);

      localStorage.setItem("users", JSON.stringify(userData));
      window.location.href = "../transactions/transactions.html";
    }
  };
});
