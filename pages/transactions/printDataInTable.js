import { API_URL } from "../../data/URL.js";
import { sendHTTPRequest } from "../../utils/sentHTTPRequest.js";
import {tablePatern} from "./tablePatern.js"
import {filterTable} from "./filterTable.js"



export const printDataInTable = () => {
  document.querySelector("tbody").innerHTML = "<p>loading</p>";

  sendHTTPRequest(API_URL)
    .then(data =>  {
      const transactions = data.transactions;
      const transacationTypes =  data.transacationTypes
      
      let patern = "";     
      transactions.forEach(transaction => {
        patern += tablePatern(transaction, transacationTypes)
      });

      document.getElementById("tbody").innerHTML = patern;
      
   
      
      const inputDescription = document.getElementById("input__description")
      const cellDescription =  document.querySelectorAll('.cell__description')

      const inputType = document.getElementById("input__type")
      const cellType= document.querySelectorAll(".cell__type")

      inputDescription.addEventListener("keyup", () => {filterTable(rows, inputDescription, cellDescription)})
       inputType.addEventListener("keyup", () => {filterTable(rows, inputType, cellType)})
 
       const rows = document.querySelectorAll(".tbody__row")
      const tdPrints = document.querySelectorAll(".td__print")
    
    rows.forEach((row, idx) => row.addEventListener("click", () => {
  row.classList.toggle("tbody__row--clickPrint")
  tdPrints[idx].classList.toggle("td__print--onClick")

}))


// function yo () {
//   row.classList.toggle("tr__clickPrint")
  
//   tdAddPrint.forEach(td => td.classList.toggle("yy"))
//   console.log("pierwszy", tdAddPrint[idx].classList)
//   tdAddPrint[idx].classList.toggle("td__clickPrint")
//   tdAddPrint[idx].classList.remove("yy")
// console.log("drugi", tdAddPrint[idx].classList)
  
  // if (tdAddPrint.forEach(td => td.classList === "td__addPrint yy"
  
  // )
  //  ){
  //   tdAddPrint.removeEventListener("click", yo)
  // }




//   document.addEventListener('touchstart', function (e) {
//     closePopupOnClick(e, popup);
//     document.removeEventListener('touchstart', arguments.callee);
// }, true);


// if (row.className === "tbody__row tr__clickPrint"){
//   row.removeEventListener('click', ()=>{
//       row.classList.toggle("tr__clickPrint")
//   tdAddPrint[idx].classList.toggle("td__clickPrint")
//   });
  // tdAddPrint[idx].innerHTML ="<p>pppppppppp</p>"
// }
// }
// if (row.className === "tbody__row tr__clickPrint"){

// }

// )



// if (tdAddPrint.forEach(td => td.classList === "td__addPrint yy")){
//   rows.forEach(row => 
//     row.removeEventListener("click", function() { yo(row, idx)})
//     )
//   }

// const unregisteredEmail =
// !usersData.some(user => user.email === passwordValue) &&
// regularExpressionEmail.test(passwordValue);

// const condition = tdAddPrint.forEach(td => td.some(td => td.classList === "td__addPrint yy" )   )


//   rows.forEach(row => 
//    condition &&
//     row.removeEventListener("click", function() { yo(row, idx)})
//     )








    })
    .catch(err => {
      const message = err.data ? err.data.message : err;
      document.querySelector('table').innerHTML = `<p>${message}</p>`;
    });
};
    
