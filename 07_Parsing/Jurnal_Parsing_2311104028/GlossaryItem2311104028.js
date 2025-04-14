import fs from 'fs/promises';

async function ReadJSON() {
    try {
        const data = await fs.readFile('jurnal7_3_2311104028.json', 'utf8');
        const jsonData = JSON.parse(data);

        const glossEntry = jsonData.glossary.GlossDiv.GlossList.GlossEntry;

        console.log("=== Glossary Entry ===");
        console.log(`ID         : ${glossEntry.ID}`);
        console.log(`SortAs     : ${glossEntry.SortAs}`);
        console.log(`GlossTerm  : ${glossEntry.GlossTerm}`);
        console.log(`Acronym    : ${glossEntry.Acronym}`);
        console.log(`Abbrev     : ${glossEntry.Abbrev}`);
        console.log(`Definition : ${glossEntry.GlossDef.para}`);
        console.log(`See Also   : ${glossEntry.GlossDef.GlossSeeAlso.join(', ')}`);
        console.log(`GlossSee   : ${glossEntry.GlossSee}`);
    } catch (err) {
        console.error('Gagal membaca atau memproses file JSON:', err);
    }

}
ReadJSON();