let journalEntryArray = []

export const fetchJournalEntryData = () => {
    return fetch("http://localhost:3000/journalEntryArray")
        .then(response => response.json())
        .then(parsedJournalEntryArray => {
            journalEntryArray = parsedJournalEntryArray
        }
    )
}

export const copyOfJournalEntryArray = () => {
    return journalEntryArray.slice()
}