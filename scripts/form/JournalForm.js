import { copyOfJournalEntryArray } from "../entries/journalDataProvider.js"
import { saveEntry } from "./EntryProvider.js"

const contentTarget = document.querySelector("#journalForm")

export const createEntry = () => {
    const renderJournal = () => {
        return contentTarget.innerHTML = `
            <h2 id="formHeader">Submit New Entry</h2>
            <fieldset class="form__field">
                <p><label for="form__date">Today's Date: </label></p>
                <input type="date" name="form__date"/>
            </fieldset>
            
            <fieldset class="form__field">
                <p><label for="form__topic">Topic(s) Covered: </label></p>
                <textarea name="form__topic" class="textArea"></textarea>                
            </fieldset>
            
            <fieldset class="form__field">
                <p><label for="form__thoughts">Thoughts: </label></p>
                <textarea name="form__thoughts" id="input--thoughts" class="textArea"></textarea>                
            </fieldset>
            
            <fieldset class="form__field">  
                <p><label for="form__mood">I am feeling: </label></p>
                <select name="form__mood">
                    <option>Exhilarated</option>
                    <option>Accomplished</option>
                    <option>Confident</option>
                    <option>Optimistic</option>
                    <option>Optimistic</option>
                    <option>Satisfied</option>
                    <option>Fine</option>
                    <option>Sleepy</option>
                    <option>Confused</option>
                    <option>Deflated</option>
                    <option>Frustrated</option>
                    <option>Dead Inside</option>
                    <option>Like crab walking into oncoming traffic</option>
                    <option>Balls deep in the Abyss of Despair</option> 
                </select>
            </fieldset>
            
            <button type="submit" form="journalForm" id="submitEntry">Save Journal Entry</button>
        `
    } 
    renderJournal()
}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitEntry") {
        const dateEntered = document.querySelector("#form__date").value
        const topicEntered = document.querySelector("#form__topic").value
        const thoughtsEntered = document.querySelector("#form__thoughts").value
        const moodSelected = document.querySelector("#select--mood").value
        const crySelected = document.querySelector("#select--cry").value

        const newEntry = {
            date: dateEntered,
            topic: topicEntered,
            thoughts: thoughtsEntered,
            mood: moodSelected,
            cried: crySelected
        }
        saveEntry(newEntry)
    }
})