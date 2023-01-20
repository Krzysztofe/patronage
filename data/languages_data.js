export const language = {
  eng: {
    nav: {
      registerLink: "Register",
      loginLink: "Login",
      transactions: "Transactions",
      btnLogout: "Logout",
    },

    pageHome: {
      h1: "Transactions",
    },

    pageLogin: {
      registerLink: "Register",
      h2: "Login",
      userName: "User name",
      userNamePlaceholder: "Enter name",
      userNameError: "Enter the name assigned to the email",
      password: "Password / Email",
      passwordPlaceholder: "Enter password / email",
      passwordError: "Enter the password or email assigned to the name",
      btnLogin: "Login",
      alert: "Unregistered email possible to register",
    },

    pageRegister: {
      loginLink: "Login",
      h2: "Register",
      userNameLabel: "User name",
      userNamePlaceholder: "Enter name",
      userNameErrorMinCharacters: "Min. 6 characters",
      userNameErrorMaxCharacters: "Max. 16 characters",
      userNameErrorRegistered: "User name already registered",

      passwordLabel: "Password",
      passwordPlaceholder: "Enter password",
      passwordError: "Min. 6 characters",

      emaiLabel: "Email",
      emailPlaceholder: "Enter email",
      emailError: "Enter corect email format",
      emailErrorRegistered: "Email already registered",

      emailRepeatLabel: "Email repeat",
      emailRepeatPlacecholder: "Email repeat",
      emailRepeatError: "Repeat email",

      btnRegister: "Register",
    },
    pageTransactions: {
      table: {
        btnLogout: "Logout",
        inputsLabels: ["Find description", "Find type"],
        tableHead: ["Data", "Type", "Description", "Amount", "Balance"],
        transactionTypes: {
          1: "Income - other",
          2: "Expense - shoping",
          3: "Income - wage",
          4: "Expense - other",
        },
      },
      chartBar: {
        balance: "Balance",
      },
      chartDought: {
        transactionTypes: [
          "Income - other",
          "Expense - shoping",
          "Income - wage",
          "Expense - other",
        ],
      },
    },
  },

  pl: {
    nav: {
      registerLink: "Rejestracja",
      loginLink: "Login",
      transactions: "Transakcje",
      btnLogout: "Wyloguj",
    },

    pageHome: {
      h1: "Transakcje",
    },

    pageLogin: {
      registerLink: "Rejestracja",
      h2: "Logowanie",
      userName: "Nazwa użytkownika",
      userNamePlaceholder: "Poadj nazwę",
      userNameError: "Podaj nazwę przypisaną do emaila",
      password: "Hasło / Email",
      passwordPlaceholder: "Podaj hasło / email",
      passwordError: "Podaj hasło lub email przypisane do nazwy",
      btnLogin: "Zaloguj",
      alert: "Email niezarejestrowany, możliwy do zarejestrowania",
    },
    pageRegister: {
      loginLink: "Logowanie",
      h2: "Rejestracja",
      userNameLabel: "Nazwa użytkownika",
      userNamePlaceholder: "Podaj nazwię",
      userNameErrorMinCharacters: "Min. 6 znaków",
      userNameErrorMaxCharacters: "Max. 16 znaków",
      userNameErrorRegistered: "Nazwa użytkownika już zarejestrowana ",

      passwordLabel: "Hasło",
      passwordPlaceholder: "Podaj hasło",
      passwordError: "Min. 6 znaków",

      emaiLabel: "Email",
      emailPlaceholder: "Podaj email",
      emailError: "Podaj format email",
      emailErrorRegistered: "Email już zarejestrowany",

      emailRepeatLabel: "Powtwierdź email",
      emailRepeatPlacecholder: "Powtierdź email",
      emailRepeatError: "Powtwierdź email",

      btnRegister: "Zarejestruj",
    },

    pageTransactions: {
      table: {
        btnLogout: "Wyloguj",
        inputsLabels: ["Znajź opis", "Znajdź typ"],
        tableHead: ["Data", "Typ", "Opis", "Kwota", "Saldo"],
        transactionTypes: {
          1: "Wydatki - inne",
          2: "Wydatki - zakupy",
          3: "Wpływy - wynagrodzenie",
          4: "Wpływy - inne",
        },
      },
      chartBar: {
        balance: "Saldo",
      },
      chartDought: {
        transactionTypes: [
          "Wpływy - inne",
          "Wydatki - zakupy",
          "Wpływy - wynagrodzenie",
          "Wpływy - inne",
        ],
      },
    },
  },
};
