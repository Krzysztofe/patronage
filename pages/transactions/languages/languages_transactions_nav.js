import { languageKey, languageURLKey } from "../../../data/variables.js";
import { language } from "../../../data/languages_data.js";

const languageRef = language[languageKey].pageTransactions.table;

document.getElementById("btnLogout").textContent = languageRef.btnLogout;
document.getElementById("btnLogout").href = `../../index.html${languageURLKey}`;
