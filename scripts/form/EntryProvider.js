const eventHub = document.querySelector(".container")

const dispatchEntrySubmissionEvent = () => {
    const logEntrySubmissionEvent = new CustomEvent("logEntrySubmission")

    eventHub.dispatchEvent(logEntrySubmissionEvent)
}

let entries = []

const fetchEntries = () => {
    fetch ("http://localhost:3000/journalEntryArray")
        .then(response => response.json())
        .then(parsedEntries => {
            entries = parsedEntries
        })
}

export const saveEntry = (newEntry) => {
    fetch("http://localhost:3000/journalEntryArray", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntry)
    })
    .then(fetchEntries)
    .then(dispatchEntrySubmissionEvent)
}