import { API_URL } from "../../../../data/URL.js";
import { sendHTTPRequest } from "../../../../utils/send_HTTPRequest.js";
import { chartBarPrint } from "../prit_data_in_chart_bar/chart_bar_patern.js";

const message = document.getElementById("chartBarMessage");

sendHTTPRequest(API_URL)
  .then(data => {
    message.remove();
    const dates = data.transactions
      .map(transaction => {
        return transaction.date;
      })
      .reverse();

    const balances = data.transactions.map(transaction => {
      return transaction.balance;
    });

    dates.push(2022, 2023);
    balances.push(-3000, -1000);

    return chartBarPrint(dates, balances);
  })
  .catch(err => {
    message.innerText = `${err} ${err.data?.message}`;
  });
