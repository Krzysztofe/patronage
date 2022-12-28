


export const validationRegister = () => {
    const userNameValue = userName.value.trim();
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();
    const emailRepeatValue = emailRepeat.value.trim();
   
    const regularExpressionEmail =
      /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
  
    userNameValue.length < 6 || userNameValue.length > 16
      ? setErrorFor(userName, 'Min. 6 znaków, max. 16 znaków')
      : setSuccesFor(userName);
  
    passwordValue.length < 6
      ? setErrorFor(password, 'Minimum 6 znaków')
      : setSuccesFor(password);
  
    !regularExpressionEmail.test(emailValue)
      ? setErrorFor(email, 'Podaj format email')
      : setSuccesFor(email);
  
    emailRepeatValue !== emailValue
      ? setErrorFor(emailRepeat, 'Powtórz email')
      : setSuccesFor(emailRepeat);
  };
  
  const setErrorFor = (input, message) => {
    const inputContainer = input.parentElement;
    const errorDiv = inputContainer.querySelector('span');
    errorDiv.innerText = message;
  };
  
  const setSuccesFor = input => {
    const inputContainer = input.parentElement;
    const errorDiv = inputContainer.querySelector('span');
    errorDiv.innerText = '';
  };