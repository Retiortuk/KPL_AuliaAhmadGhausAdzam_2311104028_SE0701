import fs from 'fs/promises'; 

async function ReadJSON() {
    try {
        const data = await fs.readFile('tp7_1_2311104028.json', 'utf8');
        const mahasiswa= JSON.parse(data);

        console.log(`Nama: ${mahasiswa.nama.depan} ${mahasiswa.nama.belakang} NIM: ${mahasiswa.nim} Fakultas: ${mahasiswa.fakultas} `);
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
    }
}

ReadJSON();
