import { API_URL } from "../../data/URL.js";
import { sendHTTPRequest } from "../../utils/sentHTTPRequest.js";
import { language } from "../../data/languagesData.js";
import { ENG } from "../../data/variables.js";

export const printDataInChartBar = () => {
  const chartBar = document.querySelector(".chartBox--bar");
  const message = document.createElement("div");
  message.innerText = "loading";
  chartBar.append(message);

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

      return chartPrint(dates, balances);
    })
    .catch(err => {
      message.innerHTML = `<p>${err} ${err.data?.message}</p>`;
      chartBar.append(message);
    });
};

const body = document.querySelector("body");

const chartPrint = (x_Param, y_Param) => {
  const chart = document.getElementById("chartBar").getContext("2d");

  Chart.defaults.font.size = 5;

  if (window.outerWidth > 425) {
    Chart.defaults.font.size = 10;
  }
  if (window.outerWidth > 768) {
    Chart.defaults.font.size = 15;
  }

  const balancesChart = new Chart(chart, {
    type: "bar",
    data: {
      labels: x_Param,
      datasets: [
        {
          label: ENG ? language.eng.pageTransactions.chartBar.balance : "Saldo",
          data: y_Param,
          backgroundColor: barBackgroundColor(),
        },
      ],
    },
    options: {
      // tooltips: { mode: 'index' },
      responsive: true,
      //   mantainAspectRAtio: false,
      scales: {
        y: {
          // beginAtZero: true,
          grid: {
            color: context => {
              const lineZero = context.tick.value;
              const gridColor =
                lineZero === 0 ? "rgb(91,163,198)" : "rgb(255,255,255)";
              return gridColor;
            },
            lineWidth: 5,
            tickColor: "rgb(255,255,255)",
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
      balance > 0 ? "rgb(32,128,57)" : balance <= 0 ? " rgb(252,0,0)" : "black";
    return color;
  };
};
