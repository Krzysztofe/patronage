import { language } from "./data/languages_data.js";
import { languageKey } from "./data/variables.js";

document.querySelector(".main__h1").textContent =
  language[languageKey].pageHome.h1;
