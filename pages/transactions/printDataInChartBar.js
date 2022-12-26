import { API_URL, API_KEY } from '../../data/URL.js';

export const printDataInChartBar = () => {
  fetch(API_URL, {
    headers: {
      'x-access-key': API_KEY,
    },
  })
    .then(resp => resp.json())
    .then(data => {
      const dates = data.record.transactions
        .map(transaction => {
          return transaction.date;
        })
        .reverse();

      const balances = data.record.transactions.map(transaction => {
        return transaction.balance;
      });

      return chartPrint(dates, balances);
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
