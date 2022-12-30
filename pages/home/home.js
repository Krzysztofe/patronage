const body = document.querySelector('body');

const btnRegisterLink = document.createElement('button');
btnRegisterLink.innerText = `Rejestracja`;
btnRegisterLink.id = 'btnRegisterLink';

const btnLoginLink = document.createElement('button');
btnLoginLink.innerText = 'Login';
btnLoginLink.id = 'btnLoginLink';

const btnTransactions = document.createElement('button');
btnTransactions.innerText = 'Transakcje';
btnTransactions.id = 'btnTransactions';

const btnLogout = document.createElement('button');
btnLogout.innerText = 'Wyloguj';
btnLogout.id = 'btnLogout';

!localStorage.getItem('userName') && body.append(btnRegisterLink);

!localStorage.getItem('userName') && body.append(btnLoginLink);

localStorage.getItem('userName') && body.append(btnTransactions);

localStorage.getItem('userName') && body.append(btnLogout);

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
