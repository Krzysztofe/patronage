import { validationLogin } from "./validationLogin.js";

document.addEventListener("DOMContentLoaded", () => {
  localStorage.getItem("userName") &&
    (window.location.href = "../transactions/transactions.html");

  const btn = document.getElementById("btnLogin");

  btn.addEventListener("click", () => {
    if (validationLogin().length !== 0) return;
    saveData();
    userName.value = "";
    password.value = "";
  });

  const saveData = () => {
    const userNameValue = document.getElementById("userName").value.trim()
    const usersData = JSON.parse(localStorage.getItem("users")) || [];

    if ( usersData.some( i => i.userName === userNameValue)
    ) {
      let logedUser = usersData.filter(i => i.userName === userNameValue)[0];
      localStorage.setItem("userName", logedUser.userName);
      window.location.href = "../transactions/transactions.html";
    }
  };
});
