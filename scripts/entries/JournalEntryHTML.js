export const JournalEntryHTML = (journalEntryArray) => {
    return `
        <section class="capturedEntry" id="journalEntry--${journalEntryArray.id}">
            <p>Date: ${journalEntryArray.date}</p>
            <p>Concept(s) Covered: ${journalEntryArray.concept}</p>
            <p>Projects Worked On: ${journalEntryArray.project}</p>
            <p>I am feeling: ${journalEntryArray.mood}</p>
        </section>   
        `
}