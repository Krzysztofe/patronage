
export const printDataInChartBar = () => {

fetch("https://api.jsonbin.io/v3/b/63a092ab15ab31599e2045be",{
  headers: {
    "x-access-key": "$2b$10$5pBRUbFRKdKft/b8qSQ3IeyPQgQ8CLXlvgoQA6GdpYvdWva.pOfGS"
  }})
  .then(resp => resp.json())
  .then(data => {
    const dates = data.record.transactions.map(transaction=>{
      return transaction.date})

    const balance = data.record.transactions.map(transaction=>{
      return transaction.balance})

    return chartPrint(dates, balance)
  }
  )

}



const chartPrint = (x_Param, y_Param) =>{

  let chart =  document.getElementById("chartBar").getContext('2d')
let balancesChart = new Chart(chart, {
  type: "bar",
data: {
  labels: x_Param, 
  datasets:[{
    label: "Saldo",
    data: y_Param
  }]
}, 
options: {
  tooltips:{
    mode: "index"
  }
}})
}
