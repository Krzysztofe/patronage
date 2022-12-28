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

      let balances = data.record.transactions.map(transaction => {
        return transaction.balance;
      });
      const pushNewDates = dates.push(2022, 2023);
      const pushNegativeBalances = balances.push(-3000, -1000);

      const pln = balances.map(element => {
        return element + ' PLN';
      });

      console.log(pln);

      return chartPrint(dates, balances);
    })
    .catch(err => {
      message.innerHTML = `<p>${err} ${err.data.message}</p>`;
      chartBarContainer.append(message);
    });
};

const dataArr = [20, 30, -80, 70];

const chartPrint = (x_Param, y_Param) => {
  let chart = document.getElementById('chartBar').getContext('2d');

  let balancesChart = new Chart(chart, {
    type: 'bar',
    data: {
      labels: [1, 2, 3, 4],
      datasets: [
        {
          label: 'Saldo',
          data: dataArr,
          backgroundColor: barBackgroundColor(),
        },
      ],
    },
    options: {
      tooltips: { mode: 'index' },
      scales: {
        y: {
          // beginAtZero: true,
          grid: {
            color: context => {
              const lineZero = context.tick.value;
              const gridColor =
                lineZero === 0 ? 'rgb(91,163,198)' : 'rgb(255,255,255)';
              return gridColor;
            },
            lineWidth: 5,
            tickColor: 'rgb(255,255,255)',
          },
          ticks: {
            callback: label => `${label} PLN`,
          },
        },
      },
    },
  });
};

const barBackgroundColor = () => {
  return ctx => {
    const balance = ctx.raw;
    const color =
      balance > 0 ? 'rgb(32,128,57)' : balance <= 0 ? ' rgb(252,0,0)' : 'black';
    return color;
  };
};

chartPrint();
