export const JournalEntryHTML = (entries) => {
    return `
        <section class="savedEntry" id="journalEntry--${entries.id}">
            <p>Date: ${entries.date}</p>
            <p>Topic(s) Covered: ${entries.topic}</p>
            <p>Thoughts: ${entries.thoughts}</p>
            <p>I am feeling: ${entries.mood}</p>
        </section>   
        `
}