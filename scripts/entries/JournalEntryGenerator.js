import { JournalEntryHTML } from "./JournalEntryHTML.js";
console.log("hi import 1!")
import { useEntries } from "./journalDataProvider.js";
console.log("hi import 2!")

const contentTarget = document.querySelector(".journalEntries");

export const renderJournalEntry = () => {
    const journalEntries = useEntries();
    console.log(journalEntries)
    for (const entry of journalEntries) {
        const newJournalEntryHTML = JournalEntryHTML(entry);
        contentTarget.innerHTML += newJournalEntryHTML
    }
}