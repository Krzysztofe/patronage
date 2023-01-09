import { language } from "../../data/languagesData.js";
import {ENG, PL} from "../../data/variables.js"


const typesInTable = (typeInNumber, typeInString) => {

  const transactionTypesENG = language.eng.pageTransactions.table.transactionTypes

if(ENG){
  switch (typeInNumber.type) {
    case 1:
      return transactionTypesENG[1];
      break;
    case 2:
      return transactionTypesENG[2];
      break;
    case 3:
      return transactionTypesENG[3];
      break;
    case 4:
      return transactionTypesENG[4];
      break;
  }
};

if(PL || location.hash === ""){
   switch (typeInNumber.type) {
      case 1:
        return typeInString[1];
        break;
      case 2:
        return typeInString[2];
        break;
      case 3:
        return typeInString[3];
        break;
      case 4:
        return typeInString[4];
        break;
    }
  };
}


  export const iconInTable = typeInNumber => {
    switch (typeInNumber.type) {
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



export const tablePatern = (transaction, transacationTypes) =>{

return `<tr class = "tbody__row">
         <td class = "cell__desktopPrint">${transaction.date}</td>
         <td> ${iconInTable(transaction)}</td>
         
         <td class =  "cell__description"> ${transaction.description} <br/>  
          
         <p class = "cell__type">${typesInTable(transaction, transacationTypes)}<p>
         <p class = "td__print"> 
         <span>Data </span>${transaction.date} <br/>
         <span>Saldo</span> ${transaction.balance} PLN </p>
         </p>
       

         </td>
          
         <td>${transaction.amount} <small>PLN</small></td>
         <td class = "cell__desktopPrint">${transaction.balance} <small>PLN</small></td>
         
        </tr>`

} 