const btn = document.getElementById('btnLogin');
const userPrintName = document.getElementById('userPrintName');

// localStorage.getItem('userName') &&  (window.location.href = '../transactions/transactions.html')

// localStorage.getItem('userName') && (window.location.href = '../../index.html');
localStorage.getItem('userName') &&  (window.location.href = '../transactions/transactions.html')

btn.addEventListener('click', () => {
  saveData();
  userName.value = '';
  password.value = '';
});

const saveData = () => {
  const userName = document.getElementById('userName').value;
  const password = document.getElementById('password').value;

  const userData = JSON.parse(localStorage.getItem('users')) || [];

  if (!userData.some(i => i.userName === userName && i.password === password)) {
    alert('Podaj zarejestrowaną nazwę użytkownika i zarejestrowane hasło');
    return;
  }

  if (userData.some(i => i.userName === userName && i.password === password)) {
    let logedUser = userData.filter(
      i => i.userName === userName && i.password === password
    )[0];
    localStorage.setItem('userName', logedUser.userName);
    window.location.href = '../transactions/transactions.html';
  }
};
