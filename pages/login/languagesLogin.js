import { language } from "../../data/languagesData.js";


const h2 = document.getElementById('h2');
const userNameLabel = document.getElementById('userNameLabel');
const userName =  document.getElementById('userName')
const passwordLabel = document.getElementById('passwordLabel')
const password = document.getElementById('password')
const btnLogin = document.getElementById('btnLogin')
const dataReload = document.querySelectorAll('[data-reload]');


if (window.location.hash) {
  if (window.location.hash === '#eng') {
      h2.textContent = language.eng.pageLogin.h2;
      userNameLabel.textContent = language.eng.pageLogin.userName;
      userName.placeholder = language.eng.pageLogin.userNamePlaceholder;
      passwordLabel.textContent = language.eng.pageLogin.password;
      password.placeholder = language.eng.pageLogin.passwordPlaceholder
      btnLogin.textContent = language.eng.pageLogin.btnLogin

  }
}

dataReload.forEach(i => {
  i.addEventListener('click', () => {
    window.location.href = i.getAttribute('href');
    window.location.reload();
  });
});