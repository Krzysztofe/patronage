const nav = document.querySelector('.nav__rightSide');

const btnRegisterLink = document.createElement('button');
btnRegisterLink.innerText = `Rejestracja`;
btnRegisterLink.id = 'btnRegisterLink';
btnRegisterLink.className = 'nav__btnRightSide'


const btnLoginLink = document.createElement('button');
btnLoginLink.innerText = 'Login';
btnLoginLink.id = 'btnLoginLink';
btnLoginLink.className = 'nav__btnRightSide'

const btnTransactions = document.createElement('button');
btnTransactions.innerText = 'Transakcje';
btnTransactions.id = 'btnTransactions';
btnTransactions.className = 'nav__btnRightSide'

const btnLogout = document.createElement('button');
btnLogout.innerText = 'Wyloguj';
btnLogout.id = 'btnLogout';
btnLogout.className = 'nav__btnRightSide'

!localStorage.getItem('userName') && nav.append(btnRegisterLink);

!localStorage.getItem('userName') && nav.append(btnLoginLink);

localStorage.getItem('userName') && nav.append(btnTransactions);

localStorage.getItem('userName') && nav.append(btnLogout);

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
