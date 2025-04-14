# Jurnal Modul 7

## Deskripsi Jurnal
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai jurnal untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari satu bagian utama:
1. **Basic Parsing/Parse**.

---

## Penjelasan Source Code

### jurnal7_1_2311104028.json
```json
{
    "firstName": "Aulia Ahmad",
    "lastName": "Ghaus Adzam",
    "gender": "male",
    "age": 20,
    "address": {
        "streetAddress": "Melon v",
        "city": "Bekasi",
        "state": "West Java"
    },
    "courses": [
        { "code": "CRI2C4", "name": "Konstruksi Perangkat Lunak" },
        { "code": "CRI2XX", "name": "Kalkulus" }
    ]
}

```
<p>Kelas JSON Ini berisikan data dari Praktikan Yaitu Saya Sendiri Data Seperti Nama, Umur, Jenis Kelamin, Alamat, dan matkul</p>

---

### DataMahasiswa2311104028.js
```javascript
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

```
<p>program itu menggunakan modul fs/promises untuk membaca file JSON secara asynchronous. Fungsi ReadJSON membaca isi file jurnal7_1_2311104028.json, kemudian mengubah data tersebut dari format JSON menjadi objek JavaScript menggunakan JSON.parse(). Setelah itu, data mahasiswa ditampilkan ke konsol, termasuk nama, jenis kelamin, umur, alamat lengkap, dan daftar mata kuliah yang diambil. Setiap mata kuliah ditampilkan dengan format kode dan nama mata kuliah. Jika terjadi kesalahan saat membaca atau memproses file, error akan ditangkap dan ditampilkan ke konsol..</p>

## 💻 Output Program
Saat menjalankan program dengan:
```
node DataMahasiswa2311104028.js
```
Akan menghasilkan output berikut:
```
-- OUTPUT --
==== Data Mahasiswa ====
Nama   : Aulia Ahmad Ghaus Adzam
Gender : male
Umur   : 20
Alamat : Melon v, Bekasi, West Java
Mata Kuliah:
 1. CRI2C4 - Konstruksi Perangkat Lunak
 2. CRI2XX - Kalkulus
```

---

## Penjelasan Source Code

### jurnal7_2_2311104028.json
```json
{
    "members" : [
    {
        "firstName": "Aulia Ahmad",
        "lastName": "Ghaus Adzam",
        "gender": "male",
        "age": 20,
        "nim": "2311104028"
    },
    {
        "firstName": "Gaza Zidane",
        "lastName": "Nurraihan",
        "gender": "male",
        "age": 20,
        "nim": "5678568567"
    },
    {
        "firstName": "Kelvin",
        "lastName": "Ferdinand",
        "gender": "male",
        "age": 20,
        "nim": "456754675"
    },
    {
        "firstName": "Kevin",
        "lastName": "Johnson",
        "gender": "male",
        "age": 20,
        "nim": "456754675"
    },
    {
        "firstName": "Satria",
        "lastName": "Ramadhan",
        "gender": "male",
        "age": 20,
        "nim": "456754675"
    }
    ]
}

```
<p>Kelas JSON Ini berisikan data dari Member Tim TUbes Seperti Nama, Umur, Jenis Kelamin.</p>

---

### TeamMembers2311104028.js
```javascript
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

```
<p> Fungsi ReadJSON membaca file jurnal7_2_2311104028.json dan mengubah data yang dibaca menjadi objek JavaScript dengan JSON.parse(). Program kemudian mengambil data anggota dari objek tersebut, yang disimpan dalam array members. Untuk setiap anggota, program menggabungkan nama depan dan nama belakang mereka menjadi fullName, serta menampilkan usia dan jenis kelamin dalam format details. Kemudian, informasi tersebut dicetak ke konsol bersama dengan NIM anggota. Jika ada kesalahan dalam membaca atau memproses file, error akan ditangkap dan ditampilkan.</p>

## 💻 Output Program
Saat menjalankan program dengan:
```
node TeamMembers2311104028.js
```
Akan menghasilkan output berikut:
```
-- OUTPUT --
List Member:
2311104028 Aulia Ahmad Ghaus Adzam (20 male)
5678568567 Gaza Zidane Nurraihan (20 male)
456754675 Kelvin Ferdinand (20 male)
456754675 Kevin Johnson (20 male)
456754675 Satria Ramadhan (20 male)
```

---

## Penjelasan Source Code

### jurnal7_3_2311104028.json
```json
{ 
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}

```
<p>Kelas JSON Ini Meruoakan Contoh dari Glossary.</p>

---

### GlossaryItem2311104028.js
```javascript
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

```
<p>Fungsi ReadJSON membaca file jurnal7_3_2311104028.json dan mengonversi data yang dibaca menjadi objek JavaScript dengan JSON.parse(). Program kemudian menavigasi objek JSON untuk mengakses entri glossary yang terdapat dalam struktur glossary -> GlossDiv -> GlossList -> GlossEntry. Setelah itu, berbagai informasi dari entri glossary tersebut, seperti ID, SortAs, GlossTerm, Acronym, Abbrev, serta definisi dan referensi lainnya, ditampilkan di konsol. Jika terjadi kesalahan dalam membaca atau memproses file, program akan menampilkan pesan error.</p>

## 💻 Output Program
Saat menjalankan program dengan:
```
node GlossaryItem2311104028.js
```
Akan menghasilkan output berikut:
```
-- OUTPUT --
=== Glossary Entry ===
ID         : SGML
SortAs     : SGML
GlossTerm  : Standard Generalized Markup Language
Acronym    : SGML
Abbrev     : ISO 8879:1986
Definition : A meta-markup language, used to create markup languages such as DocBook.
See Also   : GML, XML
GlossSee   : markup
```

---

<h1 style ='text-align: center'>Terima Kasih :)</h1>