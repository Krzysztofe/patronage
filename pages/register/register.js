import { validationRegister } from './validationRegister.js';


document.addEventListener('DOMContentLoaded', () => {

 localStorage.getItem('userName') &&
    (window.location.href = '../transactions/transactions.html');

  const userName = document.getElementById('userName');
  const errorUserName = document.querySelector('.errorUserName');

  const password = document.getElementById('password');
  const errorPassword = document.querySelector('.errorPassword');

  const email = document.getElementById('email');
  const errorEmail = document.querySelector('.errorEmail');

  const emailRepeat = document.getElementById('emailRepeat');
  const errorEmailRepeat = document.querySelector('.errorEmailRepeat');

  const btn = document.getElementById('btnRegister');

 

  btn.addEventListener('click', () => {
    validationRegister();
    if (
      errorUserName.innerText !== '' ||
      errorPassword.innerText !== '' ||
      errorEmail.innerText !== '' ||
      errorEmailRepeat.innerText !== ''
    ) {
      return;
    }

    setData();
    if (errorUserName.innerText !== '' || errorEmail.innerText !== '') {
      return;
    } else {
      userName.value = '';
      password.value = '';
      email.value = '';
      emailRepeat.value = '';
    }
  });

  const setData = () => {
    const userNameValue = document.getElementById('userName').value;
    const passwordValue = document.getElementById('password').value;
    const emailValue = document.getElementById('email').value;
    const emailRepeatValue = document.getElementById('emailRepeat').value;

    const userData = JSON.parse(localStorage.getItem('users')) || [];

    if (userData.some(i => i.userName === userNameValue)) {
      window.location.hash === '#eng' ?
      errorUserName.innerText = 'User name registered':
      errorUserName.innerText = 'Nazwa już zarejestrowany';
      return;
    }

    if (userData.some(i => i.email === emailValue)) {
      window.location.hash === '#eng' ?
      errorEmail.innerText = 'Email registered':
      errorEmail.innerText = 'Email już zarejestrowany';
      return;
    } else {
      userData.push({
        userName: userNameValue,
        password: passwordValue,
        email: emailValue,
        emailRepeat: emailRepeatValue,
      });

      let logedUser = userData.filter(
        i => i.userName === userNameValue && i.password === passwordValue
      )[0];
      localStorage.setItem('userName', logedUser.userName);

      localStorage.setItem('users', JSON.stringify(userData));
      window.location.href = '../transactions/transactions.html';
    }
  };
});
