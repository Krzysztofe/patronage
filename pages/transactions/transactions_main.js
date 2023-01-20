import { languageURLKey } from "../../data/variables.js";

!localStorage.getItem("userName") &&
  (location.href = `../login/login.html${languageURLKey}`);

const btn = document.getElementById("btnLogout");

btn.addEventListener("click", () => {
  localStorage.removeItem("userName");
  location.href = `../../index.html${languageURLKey}`;
});
