import { JournalEntryHTML } from "./JournalEntryHTML.js"
import { copyOfJournalEntryArray } from "./journalDataProvider.js"

const contentTarget = document.querySelector(".journalCaptures");

export const journalEntryMaker = () => {
    const newJournalEntryArray = copyOfJournalEntryArray();
    for (const newJournalEntryObject of newJournalEntryArray) {
        const newJournalEntryHTMLString = JournalEntryHTML(newJournalEntryObject)
        console.log(newJournalEntryHTMLString)
        contentTarget.innerHTML += newJournalEntryHTMLString
    }
}