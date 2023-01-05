import { validationLogin } from "./validationLogin.js";

document.addEventListener("DOMContentLoaded", () => {
  localStorage.getItem("userName") &&
    (location.href = "../transactions/transactions.html");

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

    if ( usersData.some( user => user.userName === userNameValue)
    ) {
      const logedUser = usersData.filter(i => i.userName === userNameValue)[0];
      localStorage.setItem("userName", logedUser.userName);
      location.href = "../transactions/transactions.html";
    }
  };
});
