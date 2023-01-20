import { languageKey } from "../../../../data/variables.js";
import { language } from "../../../../data/languages_data.js";

export const chartDoughtPrint = y_Param => {
  const chart = document.getElementById("chartDought").getContext("2d");

  const transactionsRepetitionChart = new Chart(chart, {
    type: "doughnut",
    data: {
      labels:
        language[languageKey].pageTransactions.chartDought.transactionTypes,
      datasets: [{ label: "Saldo", data: y_Param }],
    },
  });
};
