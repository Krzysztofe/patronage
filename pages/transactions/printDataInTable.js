import { API_URL } from "../../data/URL.js";
import { sendHTTPRequest } from "../../utils/sentHTTPRequest.js";

const iconPrintType = type => {
  switch (type) {
    case 1:
      return '<i class="fa-solid fa-up-long"></i>';
      break;
    case 2:
      return `<i class="fa-sharp fa-solid fa-basket-shopping"></i>`;
      break;
    case 3:
      return '<i class="fa-solid fa-coins"></i>';
      break;
    case 4:
      return '<i class="fa-solid fa-down-long"></i>';
      break;
  }
};

const typeDescription = type => {
  switch (type) {
    case 1:
      return "Wpływy - inne";
      break;
    case 2:
      return "Wydatki - zakupy";
      break;
    case 3:
      return "Wpływy - wynagrodzenie";
      break;
    case 4:
      return "Wydatki - inne";
      break;
  }
};

export const printDataInTable = () => {
  document.querySelector("tbody").innerHTML = "<p>loading</p>";

  sendHTTPRequest(API_URL)
    .then(data => data.transactions)
    .then(transactions => {
      let tablePatern = "";
      transactions.forEach(transaction => {
        tablePatern += 

        `<tr class = "table__tbodyRow" >
         <td class = "table__td table__desktopPrint">${transaction.date}</td>
         <td class = "table__td">${iconPrintType(transaction.type)}</td>
         <td class = "table__td">${transaction.description} <br/> 
         <small>${typeDescription(transaction.type)}<small></td>
          <td class = "table__td">${transaction.amount}</td>
         <td class = "table__td table__desktopPrint">${transaction.balance}</td>
       </tr>`;
      });

      document.getElementById("tbody").innerHTML = tablePatern;
     
      const rows = document.querySelectorAll(".table__tbodyRow")
      const row = document.querySelector(".table__tbodyRow").lastElementChild
  const tableCells = document.querySelectorAll('.table__desktopPrint ')
      rows.forEach(row => row.addEventListener("click", () => {
  return row.lastElementChild.classList.toggle("table__clickPrint")
  }))


  console.log(row)
    })
    .catch(err => {
      document.querySelector(
        "table"
      ).innerHTML = `<p>${err} ${err.data?.message}</p>`;
    });
};
    