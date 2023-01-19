import { language } from "../../../../data/languages_data.js";
import { languageKey } from "../../../../data/variables.js";

const typesInTable = typeInNumber => {
  const transactionTypesENG =
    language[languageKey].pageTransactions.table.transactionTypes;

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

const iconInTable = typeInNumber => {
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

const cellDescription = transaction => {
  return `<span class = "cell_selection">${transaction.description} </span>
               <p class = "cell__type">${typesInTable(transaction)}<p>
               <div class = "td__print"> 
                <p class = "p"> <span data-date>Data: </span>
                 ${transaction.date}<p>
                <p><span data-balance> Saldo:</span> 
                ${transaction.balance} PLN</p>
              </div>`;
};

export const tablePatern = transaction => {
  return `<tr class = "tbody__row">
              <td class = "cell__desktopOnly">${transaction.date}</td>
              <td> ${iconInTable(transaction)}</td>
              <td class =  "cell__description">
               ${cellDescription(transaction)}</td>
              <td>${transaction.amount} <small>PLN</small></td>
              <td class = "cell__desktopOnly">${
                transaction.balance
              }<small>PLN</small></td>
           </tr>`;
};
