export const JournalEntryHTML = (journalEntryArray) => {
    return `
        <section class="capturedEntry" id="journalEntry--${journalEntryArray.id}">
            <p>Date: ${journalEntryArray.date}</p>
            <p>Topic(s) Covered: ${journalEntryArray.topic}</p>
            <p>Thoughts: ${journalEntryArray.thoughts}</p>
            <p>I am feeling: ${journalEntryArray.mood}</p>
        </section>   
        `
}