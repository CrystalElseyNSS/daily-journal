const eventHub = document.querySelector(".container")

const dispatchEntrySubmissionEvent = () => {
    const logEntrySubmissionEvent = new CustomEvent("logEntrySubmission")
    eventHub.dispatchEvent(logEntrySubmissionEvent)
}

let entries = []

export const fetchEntries = () => {
    return fetch ("http://localhost:3000/entries")
        .then(response => response.json())
        .then(parsedEntries => {
            entries = parsedEntries
        })
}


export const saveEntry = (newEntry) => {
    fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntry)
    })
    .then(fetchEntries)
    .then(dispatchEntrySubmissionEvent)
}

export const useEntries = () => {
    return entries.slice()
}