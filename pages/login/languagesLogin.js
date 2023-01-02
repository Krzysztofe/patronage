import { language } from "../../data/languagesData.js";

const btnENG = document.querySelector("[href='#eng']");
const btnRegisterLink = document.getElementById('btnRegisterLink')
const btnPL = document.querySelector("[href='#pl']");
const h2 = document.getElementById('h2');
const userNameLabel = document.getElementById('userNameLabel');
const userName =  document.getElementById('userName')
const passwordLabel = document.getElementById('passwordLabel')
const password = document.getElementById('password')
const btnLogin = document.getElementById('btnLogin')
const dataReload = document.querySelectorAll('[data-reload]');


if (window.location.hash) {
  if (window.location.hash === '#eng') {
    btnENG.classList.add("nav__btnLanguage--active");
    btnRegisterLink.textContent = language.eng.pageLogin.registerLink;
    btnRegisterLink.href = "../register/register.html#eng"
      h2.textContent = language.eng.pageLogin.h2;
      userNameLabel.textContent = language.eng.pageLogin.userName;
      userName.placeholder = language.eng.pageLogin.userNamePlaceholder;
      passwordLabel.textContent = language.eng.pageLogin.password;
      password.placeholder = language.eng.pageLogin.passwordPlaceholder
      btnLogin.textContent = language.eng.pageLogin.btnLogin

  }
}

if (window.location.hash === "#pl" || window.location.hash === ''){
  btnPL.classList.add("nav__btnLanguage--active");
  }

dataReload.forEach(i => {
  i.addEventListener('click', () => {
    window.location.href = i.getAttribute('href');
    window.location.reload();
  });
});