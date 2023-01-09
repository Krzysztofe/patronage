import {PL, ENG} from "../../../data/variables.js"
import { language } from "../../../data/languagesData.js";
import{reloadLanguage} from "../../../utils/reloadLanguage.js"

const btnENG = document.querySelector("[href='#eng']");
const btnPL = document.querySelector("[href='#pl']");
const btnLogout = document.getElementById('btnLogout')
const dataReloadElements = document.querySelectorAll("[data-reload]");

const languageReference =  language.eng.pageTransactions.table


if(ENG) {
    btnENG.classList.add("nav__btnLanguage--active");
    btnLogout.innerText = languageReference.btnLogout
    btnLogout.href = "../../index.html#eng"
}

if (PL || window.location.hash === "") {
    btnPL.classList.add("nav__btnLanguage--active");
  }

reloadLanguage(dataReloadElements)
