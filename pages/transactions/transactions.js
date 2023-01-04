import { printDataInTable } from "./printDataInTable.js";
import { printDataInChartBar } from "./printDataInChartBar.js";
import { printDataInDought } from "./printDataInChartDought.js";
const tableRow =  document.querySelectorAll('.table__desktopPrint')
const btn = document.getElementById("btnLogout");

!localStorage.getItem("userName") &&  (window.location.href = "../login/login.html")



// tableRow.forEach(i => i.innerext = "<p>uuuu</p>")


btn.addEventListener("click", () => {
  localStorage.removeItem("userName");
  window.location.href = "../../index.html";
});
printDataInChartBar();
printDataInDought();
printDataInTable();

// console.log(tableRow)