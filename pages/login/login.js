const btn = document.getElementById("btnLogin")
const userPrintName = document.getElementById('userPrintName')


btn.addEventListener("click", () =>{
    saveData()
})

let userNameinLocalStorage =  localStorage.getItem('userName')?localStorage.getItem('userName'):""

if(userNameinLocalStorage !== ""){
    alert('odwiedz tranzakcje')
    window.location.href = "../transactions/transactions.html"
}


const saveData = () =>{

let userName = document.getElementById("userName").value
let password = document.getElementById("password").value


let userData =  new Array()
userData =  
JSON.parse(localStorage.getItem('users'))?
JSON.parse(localStorage.getItem('users')): 
[]

if(userData.some(i => i.userName === userName && i.password === password))
{
    alert("zalogowany")
    let logedUser = userData.filter(i => i.userName === userName && i.password === password)[0]
    localStorage.setItem('userName', logedUser.userName)
  window.location.href = "../transactions/transactions.html"
}

// zacheta

else {    
   alert("nie udalo sie zalogować")

}
}