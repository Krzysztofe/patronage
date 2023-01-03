import { language } from "../../data/languagesData.js";

export const validationRegister = () => {
  const userNameValue = userName.value.trim();
  const passwordValue = password.value.trim();
  const emailValue = email.value.trim();
  const emailRepeatValue = emailRepeat.value.trim();

  let errorsCounter = [];

  const regularExpressionEmail =
    /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

  if (userNameValue.length < 6) {
    window.location.hash === "#eng"
      ? setErrorFor(
          userName,
          language.eng.pageRegister.userNameErrorMinCharacters
        )
      : (setErrorFor(userName, "Min. 6 znaków"), errorsCounter.push(1));
  } else if (userNameValue.length > 16) {
    window.location.hash === "#eng"
      ? setErrorFor(
          userName,
          language.eng.pageRegister.userNameErrorMaxCharacters
        )
      : setErrorFor(userName, "Max. 16 znaków"), errorsCounter.push(1);
  } else {
    setSuccesFor(userName);
  }

  if (passwordValue.length < 6) {
    window.location.hash === "#eng"
      ? setErrorFor(password, language.eng.pageRegister.passwordError)
      : setErrorFor(password, "Min. 6 znaków"), errorsCounter.push(1);
  } else {
    setSuccesFor(password);
  }

  if (!regularExpressionEmail.test(emailValue)) {
    window.location.hash === "#eng"
      ? setErrorFor(email, language.eng.pageRegister.emailError)
      : setErrorFor(email, "Podaj format email"), errorsCounter.push(1);
  } else {
    setSuccesFor(email);
  }

  if (emailRepeatValue !== emailValue) {
    window.location.hash === "#eng"
      ? setErrorFor(emailRepeat, language.eng.pageRegister.emailRepeatError)
      : setErrorFor(emailRepeat, "Powtórz email"), errorsCounter.push(1);
  } else {
    setSuccesFor(emailRepeat);
  }
  return errorsCounter;
};

const setErrorFor = (input, message) => {
  const inputContainer = input.parentElement;
  const errorDiv = inputContainer.querySelector("div");
  errorDiv.innerText = message;
};

const setSuccesFor = input => {
  const inputContainer = input.parentElement;
  const errorDiv = inputContainer.querySelector("div");
  errorDiv.innerText = "";
};
