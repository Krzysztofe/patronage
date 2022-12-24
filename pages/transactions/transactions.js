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
    window.location.href = "../home/home.html"
}







