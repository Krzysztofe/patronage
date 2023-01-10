import { ENG } from "../../../data/variables.js";
import { language } from "../../../data/languagesData.js";

const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");
const tableHeadCells = document.querySelectorAll("th");
const languageReference = language.eng.pageTransactions.table;

console.log(inputs);

if (ENG) {
  labels.forEach((label, idx) => {
    label.innerText = languageReference.inputsLabels[idx];
  });
  inputs.forEach((input, idx) => {
    input.placeholder = languageReference.placeholders[idx];
  });

  tableHeadCells.forEach((cell, idx) => {
    cell.innerText = languageReference.tableHead[idx];
  });
}
