import { language } from "../../../../data/languages_data.js";
import { languageKey } from "../../../../data/variables.js";

export const chartBarPrint = (x_Param, y_Param) => {
  const chart = document.getElementById("chartBar").getContext("2d");

  Chart.defaults.font.size = 5;

  if (window.outerWidth > 425) {
    Chart.defaults.font.size = 10;
  }
  if (window.outerWidth > 768) {
    Chart.defaults.font.size = 12;
  }

  const balancesChart = new Chart(chart, {
    type: "bar",
    data: {
      labels: x_Param,
      datasets: [
        {
          label: language[languageKey].pageTransactions.chartBar.balance,
          data: y_Param,
          backgroundColor: barBackgroundColor(),
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
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
      balance > 0
        ? "rgb(73, 123, 121, 1)"
        : balance <= 0
        ? " rgb(252,0,0)"
        : "black";
    return color;
  };
};
