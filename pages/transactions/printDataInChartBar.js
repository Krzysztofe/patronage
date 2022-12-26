import { API_URL, API_KEY } from '../../data/URL.js';
import { sendHTTPRequest } from '../../utils/sentHTTPRequest.js';

export const printDataInChartBar = () => {
  const chartBarContainer = document.querySelector('.chartBarContainer');
  const message = document.createElement('div');
  message.innerText = 'loading';
  chartBarContainer.append(message);

  sendHTTPRequest(API_URL, API_KEY)
    .then(data => {
      message.remove();
      const dates = data.record.transactions
        .map(transaction => {
          return transaction.date;
        })
        .reverse();

      const balances = data.record.transactions.map(transaction => {
        return transaction.balance;
      });

      return chartPrint(dates, balances);
    })
    .catch(err => {
      message.innerHTML = `<p>${err} ${err.data.message}</p>`;
      chartBarContainer.append(message);
    });
};

const chartPrint = (x_Param, y_Param) => {
  let chart = document.getElementById('chartBar').getContext('2d');

  let balancesChart = new Chart(chart, {
    type: 'bar',
    data: {
      labels: x_Param,
      datasets: [{ label: 'Saldo', data: y_Param }],
    },
    options: { tooltips: { mode: 'index' } },
  });
};
