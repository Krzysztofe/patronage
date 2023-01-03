import { printDataInTable } from "./printDataInTable.js";
import { printDataInChartBar } from "./printDataInChartBar.js";
import { printDataInDought } from "./printDataInChartDought.js";

const btn = document.getElementById("btnLogout");

!localStorage.getItem("userName") &&  (window.location.href = "../login/login.html")

btn.addEventListener("click", () => {
  localStorage.removeItem("userName");
  window.location.href = "../../index.html";
});

printDataInDought();
printDataInTable();
printDataInChartBar();
