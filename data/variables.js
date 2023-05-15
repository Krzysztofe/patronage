export const ENG = location.hash === "#eng";
export const PL = location.hash === "#pl";
export const languageURLKey = ENG ? "#eng" : "#pl";
export const languageKey = ENG ? "eng" : "pl";
export const userLoged = localStorage.getItem("userName");
export const userUnLoged = !localStorage.getItem("userName");
