import { API_URL } from "../../../../data/URL.js";
import { sendHTTPRequest } from "../../../../utils/send_HTTPRequest.js";
import { tablePatern } from "./table_patern.js";
import { filterTable } from "../../filter_table.js";
import { languageInTableBody } from "../../languages/languages_in_tableBody.js";
import { language } from "../../../../data/languages_data.js";
import { languageKey } from "../../../../data/variables.js";
const languageReference = language[languageKey].pageTransactions.table;

document.querySelector("tbody").innerHTML = "<p>Loading</p>";

sendHTTPRequest(API_URL)
  .then(data => {
    let patern = "";
    data.transactions.forEach(transaction => {
      patern += tablePatern(transaction);
    });

    document.getElementById("tbody").innerHTML = patern;

    languageInTableBody(languageReference);

    const inputDescription = document.getElementById("input__description");
    const inputType = document.getElementById("input__type");
    const cellsDescription = document.querySelectorAll(".cell_selection");
    const cellsType = document.querySelectorAll(".cell__type");
    const rows = document.querySelectorAll(".tbody__row");
    const tdPrints = document.querySelectorAll(".td__print");

    inputDescription.addEventListener("keyup", () => {
      filterTable(rows, inputDescription, cellsDescription);
    });

    inputType.addEventListener("keyup", () => {
      filterTable(rows, inputType, cellsType);
    });

    rows.forEach((row, idx) =>
      row.addEventListener("click", () => {
        row.classList.toggle("tbody__row--onClick");
        tdPrints[idx].classList.toggle("td__print--onClick");
      })
    );
  })
  .catch(err => {
    document.querySelector(
      "table"
    ).innerHTML = `<p>${err} ${err.data?.message}</p>`;
  });
