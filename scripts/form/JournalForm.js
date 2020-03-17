const contentTarget = document.querySelector("#journalForm")

export const renderJournalForm = () => {
        return contentTarget.innerHTML = `
            <fieldset class="form__entry">
                <label for="form__date">Today's Date: </label>
                <input type="date" name="form__date" />
            </fieldset>
            
            <fieldset class="form__entry">
                <label for="form__concept">Main Concept(s) Covered: </label>
                <textarea name="form__concept" cols="30" rows="10"></textarea>                
            </fieldset>
            
            <fieldset class="form__entry">
                <label for="form__project">Projects Worked On: </label>
                <textarea name="form__project" cols="30" rows="10"></textarea>                
            </fieldset>
            
            <fieldset class="form__entry">  
                <label for="form__mood">I am feeling: </label>
                <select name="form__mood" id="select--feeling">
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
            
            <fieldset class="form__entry">  
                <label for="form__cry">Did you cry? </label>
                <select name="form__cry" id="select--cry">
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </fieldset>
            
            <button type="submit" form="journalForm" id="submit__form">Submit</button>
        `
    }