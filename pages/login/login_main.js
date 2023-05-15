import { validationLogin } from "./login_validation.js";
import { languageURLKey, userLoged } from "../../data/variables.js";

// IF USER LOGED MOVE TO TRANSACTIONS

userLoged &&
  (location.href = `../transactions/transactions.html${languageURLKey}`);

const formElem = document.querySelector("form");

formElem.addEventListener("submit", e => {
  e.preventDefault();
  if (validationLogin()) return;
  saveData();
  userName.value = "";
  password.value = "";
});

// SET LOGED USER NAME IN KEY "userName" IN LOCALSTORAGE

const saveData = () => {
  const userNameValue = document.getElementById("userName").value.trim();
  const usersData = JSON.parse(localStorage.getItem("users")) || [];

  if (usersData.some(user => user.userName === userNameValue)) {
    const logedUser = usersData.filter(i => i.userName === userNameValue)[0];
    localStorage.setItem("userName", logedUser.userName);
  }

  location.href = `../transactions/transactions.html${languageURLKey}`;
};
