import { printDataInTable} from "./printDataInTable.js"
import {printDataInChartBar } from "./printDataInChartBar.js"
import { printDataInDought } from "./printDataInChartDought.js"

const btn = document.getElementById("btnLogout")

btn.addEventListener("click", ()=>{
    logout()
})

let userNameinLocalStorage = localStorage.getItem('userName')
?
localStorage.getItem('userName')
:
""

if(userNameinLocalStorage === ""){
    alert('musisz sie zalogowac')
    window.location.href = "../login/login.html"
}

const logout = () =>{
    localStorage.removeItem('userName')
    // window.location.href = "../home/home.html"
    window.location.href = "../../index.html"
}

 printDataInDought()
printDataInTable()
printDataInChartBar()

