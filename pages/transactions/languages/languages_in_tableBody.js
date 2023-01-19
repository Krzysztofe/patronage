export const languageInTableBody = languageReference => {
  const balances = document.querySelectorAll("[data-balance]");
  const dates = document.querySelectorAll("[data-date]");

  balances.forEach(
    balance => (balance.innerText = languageReference.tableHead[4])
  );
  dates.forEach(date => (date.innerText = languageReference.tableHead[0]));
};
