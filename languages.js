import { language } from './data/languagesData.js';

const btnRegisterLink = document.getElementById('btnRegisterLink');
const btnLoginLink = document.getElementById('btnLoginLink');
const btnTransactions = document.getElementById('btnTransactions')
const btnLogout = document.getElementById('btnLogout')
const dataReload = document.querySelectorAll('[data-reload]');



if (window.location.hash) {
  if (window.location.hash === '#eng') {
    btnRegisterLink &&
      (btnRegisterLink.textContent = language.eng.pageHome.registerLink);
    btnLoginLink && (btnLoginLink.textContent = language.eng.pageHome.loginLink);
    btnTransactions && (btnTransactions.textContent = language.eng.pageHome.transactions);
    btnLogout && (btnLogout.textContent = language.eng.pageHome.btnLogout);

  }
}

dataReload.forEach(i => {
  i.addEventListener('click', () => {
    window.location.href = i.getAttribute('href');
    window.location.reload();
  });
});