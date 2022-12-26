import { API_URL, API_KEY } from "../../data/URL.js";

export const printDataInDought = () => {
  fetch(API_URL, {
    headers: {
      'x-access-key': API_KEY,
    },
  })
    .then(resp => resp.json())
    .then(data => {
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
