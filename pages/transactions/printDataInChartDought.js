import { API_URL } from '../../data/URL.js';
import { sendHTTPRequest } from '../../utils/sentHTTPRequest.js';
import { ENG} from "../../data/variables.js"
import { language } from "../../data/languagesData.js"

export const printDataInDought = () => {

  const chartBox = document.querySelector('.chartBox--dought');
  const message = document.createElement('div');
  message.innerText = 'loading';
  chartBox.prepend(message);


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

      const transactionsNames = Object.keys(typesCounter);
      const transactionsRepeatitions = Object.values(typesCounter);

      return chartPrint(transactionsNames, transactionsRepeatitions);
    })
    .catch(err => {
      const messagePrint = err.data ? err.data?.message : err
      message.innerHTML = `<p>${messagePrint}</p>`;
      chartBox.prepend(message);
    });
};

const chartPrint = (x_Param, y_Param) => {
  const chart = document.getElementById('chartDought').getContext('2d');

  const transactionsRepetitionChart = new Chart(chart, {
    type: 'doughnut',
    data: {
      labels: ENG ? language.eng.pageTransactions.chartDought.transactionTypes: x_Param ,
      datasets: [
        { label: 'Saldo',
        data: y_Param 
        }
      ],
    },
  });
};

