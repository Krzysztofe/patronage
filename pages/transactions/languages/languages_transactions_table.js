import { languageKey } from "../../../data/variables.js";
import { language } from "../../../data/languages_data.js";

const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");
const tableHeadCells = document.querySelectorAll("th");
const languageReference = language[languageKey].pageTransactions.table;

labels.forEach((label, idx) => {
  label.innerText = languageReference.inputsLabels[idx];
});
inputs.forEach((input, idx) => {
  input.placeholder = languageReference.placeholders[idx];
});

tableHeadCells.forEach((cell, idx) => {
  cell.innerText = languageReference.tableHead[idx];
});
