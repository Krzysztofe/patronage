import { language } from "./data/languages_data.js";
import { languageKey } from "./data/variables.js";

const h1 = document.querySelector(".main__h1");

h1.textContent = language[languageKey].pageHome.h1;
