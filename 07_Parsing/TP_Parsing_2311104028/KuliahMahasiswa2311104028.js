import fs from 'fs/promises'; 

async function ReadJSON() {
    try {
        const data = await fs.readFile('tp7_2_2311104028.json', 'utf8');
        const mahasiswaMatkul= JSON.parse(data);

        mahasiswaMatkul.courses.forEach((course, index) => {
            console.log(` ${index + 1}. ${course.code} - ${course.name}`);
        });
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
    }
}

ReadJSON();
