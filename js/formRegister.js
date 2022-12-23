
const button = document.getElementById("buttonRegister")

button.addEventListener("click", () =>{
    saveData()
})


const saveData = () =>{

let userName = document.getElementById("userName").value
let password = document.getElementById("password").value
let email = document.getElementById("email").value
let emailRepeat = document.getElementById("emailRepeat").value

let user_records =  new Array()
user_records =  
JSON.parse(localStorage.getItem('users'))?
JSON.parse(localStorage.getItem('users')): 
[]

if(user_records.some(i => i.email == email))
{
    alert("ten email został już dodany do bazy danych")
}
else {    
    user_records.push({
    "userName": userName,
    "password": password,
     'email': email,
    'emailRepeat': emailRepeat})

localStorage.setItem('users', JSON.stringify(user_records) )

}
}



