import { language } from "../../data/languagesData.js";
import {ENG, PL} from "../../data/variables.js"


export const typesInTable = (typeInNumber, typeInString) => {

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

if(PL){
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
