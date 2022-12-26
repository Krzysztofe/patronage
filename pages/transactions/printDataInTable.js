import { API_URL, API_KEY } from '../../data/URL.js';

const iconPrintType = type => {
  switch (type) {
    case 1:
      return '<i class="fa-solid fa-up-long"></i>';
      break;
    case 2:
      return `<i class="fa-sharp fa-solid fa-basket-shopping"></i>`;
      break;
    case 3:
      return '<i class="fa-solid fa-coins"></i>';
      break;
    case 4:
      return '<i class="fa-solid fa-down-long"></i>';
      break;
  }
};

const typeDescription = type => {
  switch (type) {
    case 1:
      return 'Wpływy - inne';
      break;
    case 2:
      return 'Wydatki - zakupy';
      break;
    case 3:
      return 'Wpływy - wynagrodzenie';
      break;
    case 4:
      return 'Wydatki - inne';
      break;
  }
};

export const printDataInTable = () => {
  fetch(API_URL, {
    headers: {
      'x-access-key': API_KEY,
    },
  })
    .then(resp => resp.json())
    .then(data => data.record.transactions)
    .then(transactions => {
      let tablePatern = '';
      transactions.forEach(transaction => {
        tablePatern += `<tr>
      <td>${transaction.date}</td>
      <td>${iconPrintType(transaction.type)}</td>
       <td>${transaction.description} <br/> <b> ${typeDescription(
          transaction.type
        )}</b></td>
       <td>${transaction.amount}</td>
       <td>${transaction.balance}</td>
       </tr>`;
      });

      document.getElementById('tbody').innerHTML = tablePatern;
    })
    .catch(error => console.log(error));
};
