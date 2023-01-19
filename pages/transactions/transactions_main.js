// import { printDataInTable } from "./printDataInTable.js";
// import { printDataInChartBar } from "./pritData/printDataInChartBar.js";
// import { printDataInDought } from "./pritData/printDataInChartDought.js";
import { languageURLKey } from "../../data/variables.js";

!localStorage.getItem("userName") &&
  (location.href = `../login/login.html${languageURLKey}`);

const btn = document.getElementById("btnLogout");

btn.addEventListener("click", () => {
  localStorage.removeItem("userName");
  location.href = `../../index.html${languageURLKey}`;
});

// printDataInChartBar();
// printDataInDought();
// printDataInTable();
