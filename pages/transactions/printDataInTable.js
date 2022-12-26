
const iconPrintType = (type) => {

  switch (type) {
    case 1:
      return "Wpływy - inne"
      break;
    case 2:
      return "Wydatki - zakupy"
      break;
    case 3:
      return "Wpływy - wynagrodzenie"
      break;
    case 4:
      return "Wydatki - inne"
      break
  }
}

export const printDataInTable = () => {
  fetch("https://api.jsonbin.io/v3/b/63a092ab15ab31599e2045be", {
    headers: {
      "x-access-key": "$2b$10$5pBRUbFRKdKft/b8qSQ3IeyPQgQ8CLXlvgoQA6GdpYvdWva.pOfGS"
    }
  })
    .then(resp => resp.json())
    .then(data => (data.record.transactions))
    .then(transactions => {

      return transactions.forEach(transaction => {
        const patern = `<tr>
      <td>${transaction.date}</td>
      <td>${iconPrintType(transaction.type)}</td>
       <td>${transaction.description} <br/> <b> ${iconPrintType(transaction.type)}</b></td>
       <td>${transaction.amount}</td>
       <td>${transaction.balance}</td>
       </tr>`

        document.getElementById("tbody").insertAdjacentHTML('beforeend', patern)

      })

    })
    .catch(error => console.log(error))

}






