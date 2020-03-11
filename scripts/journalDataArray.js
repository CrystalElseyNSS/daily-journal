const journalEntryArray = [
    {
        id: 1,
        date: "02/07/2020",
        concept: "GitHut collaboration",
        project: "Worked with Globtrotters team to effectively create and merge respective branches into master.",
        mood: "Okay"
    },
    {
        id: 2,
        date: "02/08/2020",
        concept: "HTML automation",
        project: "We started using JavaScript to automate HTML from an array of objects.",
        mood: "Confused"
    },
    {
        id: 3,
        date: "02/09/2020",
        concept: "HTML automation",
        project: "We practiced more HTML automation using JavaScript.",
        mood: "Accomplished"
    },
]


export const copyOfJournalEntryArray = () => {
    const sortedByDate = journalEntryArray.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate.slice()  
}