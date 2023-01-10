export const language = {
  eng: {
    pageHome: {
      registerLink: "Register",
      loginLink: "Login",
      transactions: "Transactions",
      btnLogout: "Logout",
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
      passwordLabel: "Password",
      passwordPlaceholder: "Enter password",
      passwordError: "Min. 6 characters",

      emaiLabel: "Email",
      emailPlaceholder: "Enter email",
      emailError: "Corect email format",

      emailRepeatLabel: "Email repeat",
      emailRepeatPlacecholder: "Email repeat",
      emailRepeatError: "Repeat email",

      btnRegister: "Register",
    },
    pageTransactions: {
      table: {
        btnLogout: "Logout",
        inputsLabels: ["Find transaction description", "Find transaction type"],
        placeholders: ["Enter data", "Enter data"],
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
    register: "Rejestracja",
  },
};
