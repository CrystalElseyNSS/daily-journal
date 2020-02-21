const submitEntry = () => {
    const entryDate = document.getElementById("journalDate").value;
    const entryConcepts = document.getElementById("journalConcept").value;
    const entryFeeling = document.getElementById("journalFeeling").value;

var myData = `${entryDate}:

Today in class, we worked on:
${entryConcepts} 

I am feeling:
${entryFeeling}`

window.open(`mailto:hello@crystalelsey.com?subject=NSS Daily Journal: ${entryDate}&body=${myData}`);
}

