import fs from 'fs/promises'; 

async function ReadJSON() {
    try {
        const data = await fs.readFile('jurnal7_1_2311104028.json', 'utf8');
        const mahasiswa = JSON.parse(data);

        console.log("==== Data Mahasiswa ====");
        console.log(`Nama   : ${mahasiswa.firstName} ${mahasiswa.lastName}`);
        console.log(`Gender : ${mahasiswa.gender}`);
        console.log(`Umur   : ${mahasiswa.age}`);
        console.log(`Alamat : ${mahasiswa.address.streetAddress}, ${mahasiswa.address.city}, ${mahasiswa.address.state}`);
        console.log("Mata Kuliah:");
        mahasiswa.courses.forEach((course, index) => {
            console.log(` ${index + 1}. ${course.code} - ${course.name}`);
        });
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
    }
}

ReadJSON();
