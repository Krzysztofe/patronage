import {ENG} from "../../data/variables.js"
import { language } from "../../data/languagesData.js"

const tableHeadCells = document.querySelectorAll(".table__th")
const languageReference =  language.eng.pageTransactions.table



if(ENG) {
    tableHeadCells.forEach((cell, idx) => cell.innerText = languageReference.tableHead[idx])
}


