import { API_URL, API_KEY } from '../../data/URL.js';
import { sendHTTPRequest } from '../../utils/sentHTTPRequest.js';

export const printDataInDought = () => {

  const chartDoughtContainer = document.querySelector('.chartDoughtContainer');
  const message = document.createElement('div');
  message.innerText = 'loading';
  chartDoughtContainer.append(message);

  sendHTTPRequest(API_URL, API_KEY)
    .then(data => {
      message.remove();
      const transactions = data.record.transactions;
      const transacationTypes = data.record.transacationTypes;
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
      message.innerHTML = `<p>${err} ${err.data.message}</p>`;
      chartDoughtContainer.append(message);
    });
};

const chartPrint = (x_Param, y_Param) => {
  let chart = document.getElementById('chartDought').getContext('2d');

  let transactionsRepetitionChart = new Chart(chart, {
    type: 'doughnut',
    data: {
      labels: x_Param,
      datasets: [{ label: 'Saldo', data: y_Param }],
    },
    options: { tooltips: { mode: 'index' } },
  });
};
