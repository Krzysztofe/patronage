const btnRegister = document.getElementById("btnRegister")
const btnLogin = document.getElementById("btnLogin")
const btnTransactions = document.getElementById('btnTransactions');
const btnLogout = document.getElementById('btnLogout');


btnRegister?.addEventListener("click", () =>{
    !localStorage.getItem('userName') &&
    (window.location.href = './pages/register/register.html'); 
})

btnLogin?.addEventListener("click", () =>{
    !localStorage.getItem('userName') &&
    (window.location.href = './pages/login/login.html'); 
})

btnTransactions?.addEventListener('click', () => {
  localStorage.getItem('userName') &&
    (window.location.href = './pages/transactions/transactions.html');
});

btnLogout?.addEventListener('click', () => {
  localStorage.removeItem('userName');
   window.location.href = '../../index.html';
});

