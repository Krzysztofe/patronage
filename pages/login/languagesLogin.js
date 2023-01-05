import { language } from "../../data/languagesData.js";
import {PL, ENG} from '../../data/variables.js'
import {reloadLanguage} from '../../utils/reloadLanguage.js'

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

const languageReference = language.eng.pageLogin

  if (ENG) {
    btnENG.classList.add("nav__btnLanguage--active");
    btnRegisterLink.textContent = languageReference.registerLink;
    btnRegisterLink.href = "../register/register.html#eng"
      h2.textContent = languageReference.h2;
      userNameLabel.textContent = languageReference.userName;
      userName.placeholder = languageReference.userNamePlaceholder;
      passwordLabel.textContent = languageReference.password;
      password.placeholder = languageReference.passwordPlaceholder
      btnLogin.textContent = languageReference.btnLogin
  }


if (PL || window.location.hash === ''){
  btnPL.classList.add("nav__btnLanguage--active");
  }

  reloadLanguage(dataReload)

