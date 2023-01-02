const nav = document.querySelector('.nav__main');

const btnRegisterLink = document.createElement('a');
btnRegisterLink.innerText = `Rejestracja`;
btnRegisterLink.id = 'btnRegisterLink';
btnRegisterLink.className = 'nav__btnMineLine'


const btnLoginLink = document.createElement('a');
btnLoginLink.innerText = 'Logowanie';
btnLoginLink.id = 'btnLoginLink';
btnLoginLink.className = 'nav__btnMineLine'

const btnTransactions = document.createElement('a');
btnTransactions.innerText = 'Transakcje';
btnTransactions.id = 'btnTransactions';
btnTransactions.className = 'nav__btnMineLine'

const btnLogout = document.createElement('a');
btnLogout.innerText = 'Wyloguj';
btnLogout.id = 'btnLogout';
btnLogout.className = 'nav__btnMineLine'

!localStorage.getItem('userName') && nav.prepend(btnRegisterLink);

!localStorage.getItem('userName') && nav.prepend(btnLoginLink);

localStorage.getItem('userName') && nav.prepend(btnTransactions);

localStorage.getItem('userName') && nav.prepend(btnLogout);

btnRegisterLink?.addEventListener('click', () => {
  
  !localStorage.getItem('userName') &&
    (window.location.href = './pages/register/register.html');
});

btnLoginLink?.addEventListener('click', () => {
  !localStorage.getItem('userName') &&
    (window.location.href = './pages/login/login.html');
});

btnTransactions?.addEventListener('click', () => {
  localStorage.getItem('userName') &&
    (window.location.href = './pages/transactions/transactions.html');
});

btnLogout?.addEventListener('click', () => {
  localStorage.removeItem('userName');
  window.location.href = '../../index.html';
});
