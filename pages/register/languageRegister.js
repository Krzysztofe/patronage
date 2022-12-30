import { language } from '../../data/languagesData.js';

const h2 = document.getElementById('h2');
const userNameLabel = document.getElementById('userNameLabel');
const userName = document.getElementById('userName');
const passwordLabel = document.getElementById('passwordLabel');
const password = document.getElementById('password');
const emailLabel = document.getElementById('emailLabel');
const email = document.getElementById('email');
const emailRepeatLabel = document.getElementById('emailRepeatLabel');
const emailRepeat = document.getElementById('emailRepeat');
const btnRegister = document.getElementById('btnRegister');

const dataReload = document.querySelectorAll('[data-reload]');

// console.log(userName)

// if (window.location.hash) {
  if (window.location.hash === '#eng') {
    h2.textContent = language.eng.pageRegister.h2;
    userNameLabel.textContent = language.eng.pageRegister.userNameLabel;
    userName.placeholder = language.eng.pageRegister.userNamePlaceholder;
    passwordLabel.textContent = language.eng.pageRegister.passwordLabel;
    password.placeholder = language.eng.pageRegister.passwordPlaceholder;
    emailLabel.textContent = language.eng.pageRegister.emaiLabel;
    email.placeholder = language.eng.pageRegister.emailPlaceholder;
    emailRepeatLabel.textContent = language.eng.pageRegister.emailRepeatLabel;
    emailRepeat.placeholder = language.eng.pageRegister.emailRepeatPlacecholder;
    btnRegister.textContent = language.eng.pageRegister.btnRegister;
  }
// }

dataReload.forEach(i => {
  i.addEventListener('click', () => {
    window.location.href = i.getAttribute('href');
    window.location.reload();
  });
});
