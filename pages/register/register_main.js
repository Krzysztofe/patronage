import { validationRegister } from "./register_form_validation.js";
import { languageURLKey } from "../../data/variables.js";

localStorage.getItem("userName") &&
  (location.href = `../transactions/transactions.html${languageURLKey}`);

const userName = document.getElementById("userName");
const password = document.getElementById("password");
const email = document.getElementById("email");
const emailRepeat = document.getElementById("emailRepeat");
const formElem = document.querySelector("form");

formElem.addEventListener("submit", e => {
  e.preventDefault();
  if (validationRegister()) return;
  setData();
  userName.value = "";
  password.value = "";
  email.value = "";
  emailRepeat.value = "";
});

const setData = () => {
  const userNameValue = userName.value.trim();
  const usersData = JSON.parse(localStorage.getItem("users")) || [];
  const formData = new FormData(formElem);
  const user = Object.fromEntries(formData);
  usersData.push(user);
  const logedUser = usersData.filter(i => i.userName === userNameValue)[0];
  localStorage.setItem("userName", logedUser.userName);
  localStorage.setItem("users", JSON.stringify(usersData));
  location.href = `../transactions/transactions.html${languageURLKey}`;
};
