import fs from 'fs/promises'; 

async function ReadJSON() {
    try {
        const data = await fs.readFile('jurnal7_2_2311104028.json', 'utf8');
        const obj = JSON.parse(data);
        const members = obj.members;

        console.log("List Member:");
        members.forEach(member => {
            const fullName = `${member.firstName} ${member.lastName}`;
            const details = `(${member.age} ${member.gender})`;
            console.log(`${member.nim} ${fullName} ${details}`);
        });
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
    }
}

ReadJSON();
