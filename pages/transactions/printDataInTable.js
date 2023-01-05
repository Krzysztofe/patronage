import { API_URL } from "../../data/URL.js";
import { sendHTTPRequest } from "../../utils/sentHTTPRequest.js";
import { typesInTable, iconInTable } from "./typesInTable.js";

export const printDataInTable = () => {
  document.querySelector("tbody").innerHTML = "<p>loading</p>";

  sendHTTPRequest(API_URL)
    .then(data =>  {
      const transactions = data.transactions;
const transacationTypes =  data.transacationTypes
console.log(data)
      let tablePatern = "";
     
      transactions.forEach(transaction => {
    
        tablePatern += 
        `<tr class = "table__tbodyRow" >
         <td class = "table__td table__desktopPrint">${transaction.date}</td>
         <td class = "table__td">${iconInTable(transaction)}</td>
         <td class = "table__td">${transaction.description} <br/> 
         <small>${typesInTable(transaction, transacationTypes)}<small></td>
          <td class = "table__td">${transaction.amount}</td>
         <td class = "table__td table__desktopPrint">${transaction.balance}</td>
      
      
         </tr >
       <tr class = table__rowPrint> 
       <td class = "table__td"><span>Data</span>${transaction.date}</td>
       <td class = "table__td"><span>Saldo</span>${transaction.balance}</td>
       
       </tr>`
       ;
      });

      document.getElementById("tbody").innerHTML = tablePatern;

const rows = document.querySelectorAll(".table__tbodyRow")
const row = document.querySelector(".table__tbodyRow").lastElementChild
const tableCells = document.querySelectorAll('.table__desktopPrint ')

rows.forEach(row => row.addEventListener("click", () => {
 row.lastElementChild.classList.toggle("table__clickPrint")
}))


    })
    .catch(err => {
      const message = err.data ? err.data.message : err;
      document.querySelector('table').innerHTML = `<p>${message}</p>`;
    });
};
    


