import { createEntry } from "./form/JournalForm.js";
createEntry()

import { renderJournalEntry } from "./entries/JournalEntryGenerator.js";
import { fetchEntries } from "./entries/journalDataProvider.js";
fetchEntries().then(renderJournalEntry)