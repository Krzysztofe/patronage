import { API_URL } from "../../../../data/URL.js";
import { sendHTTPRequest } from "../../../../utils/send_HTTPRequest.js";
import { chartDoughtPrint } from "../print_data_in_chart_dought/chart_dought_patern.js";

const message = document.getElementById("chartDoughtMessage");

sendHTTPRequest(API_URL)
  .then(data => {
    message.remove();
    const transactions = data.transactions;
    const transacationTypes = data.transacationTypes;
    const typesList = transactions.map(i => {
      switch (i.type) {
        case 1:
          return transacationTypes[1];
          break;
        case 2:
          return transacationTypes[2];
          break;
        case 3:
          return transacationTypes[3];
          break;
        case 4:
          return transacationTypes[4];
          break;
      }
    });

    const typesCounter = typesList.reduce((accumulator, value) => {
      return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
    }, {});

    const transactionsRepeatitions = Object.values(typesCounter);

    return chartDoughtPrint(transactionsRepeatitions);
  })
  .catch(err => {
    message.innerText = `${err} ${err.data?.message}`;
  });
