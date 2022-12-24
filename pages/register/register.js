const labelUsername = document.getElementById('labelUsername')
const userName = document.getElementById("userName")

const password = document.getElementById("password")

const email = document.getElementById("email")
const labelEmail =  document.getElementById('labelEmail')

const emailRepeat = document.getElementById("emailRepeat")


const btn = document.getElementById("btnRegister")





btn.addEventListener("click", () =>{
    
    setData()
    userName.value = ""
    password.value = ""
    email.value = ""
    emailRepeat.value = ""
})


const setData = () =>{

const userName = document.getElementById("userName").value
const password = document.getElementById("password").value
const email = document.getElementById("email").value
const emailRepeat = document.getElementById("emailRepeat").value

let userData =  []
userData =  
JSON.parse(localStorage.getItem('users'))?
JSON.parse(localStorage.getItem('users')): 
[]

if(userData.some(i =>  i.userName === userName))
{
    alert("nazwa urzytkownika zapisana")
    // labelUsername.innerText = "nazwa urzytkownika sa zapisane"
  return
}

// if(userData.some(i => i.email === email))
// {
//     // alert("ten mail zapisane")
//     labelEmail.innerText = "ten mail zapisany"
//   return
// }



else {    
    userData.push({
    "userName": userName,
    "password": password,
    'email': email,
    'emailRepeat': emailRepeat})

localStorage.setItem('users', JSON.stringify(userData) )
window.location.href = "../transactions/transactions.html"
}
}




