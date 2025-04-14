# TP Modul 7

## Deskripsi TP
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai jurnal untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari satu bagian utama:
1. **Basic Parsing/Parse**.

---

## Penjelasan Source Code

### tp7_1_2311104028.json
```json
{
    "nama": {
        "depan": "Aulia Ahmad",
        "belakang": "Ghaus Adzam"
    },
    "nim": "2311104028",
    "fakultas": "informatika"
}

```
<p>Kelas JSON Ini berisikan data dari Praktikan Yaitu Saya Sendiri Data Seperti Nama, NIM, fakultas</p>

---

### DataMahasiswa2311104028.js
```javascript
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

```
<p>Kode di atas merupakan program Node.js yang berfungsi untuk membaca dan menampilkan data dari file JSON bernama tp7_1_2311104028.json. Dengan menggunakan modul fs/promises, program membaca file secara asynchronous dan mengonversi isinya menjadi objek JavaScript menggunakan JSON.parse(). Data yang diambil meliputi nama depan dan belakang, NIM, serta fakultas dari seorang mahasiswa. Informasi tersebut kemudian dicetak ke konsol dalam satu baris. Jika terjadi kesalahan saat membaca atau memproses file, error akan ditampilkan di konsol.</p>

## 💻 Output Program
Saat menjalankan program dengan:
```
node DataMahasiswa2311104028.js
```
Akan menghasilkan output berikut:
```
-- OUTPUT --
Nama: Aulia Ahmad Ghaus Adzam NIM: 2311104028 Fakultas: informatika 
```

---

## Penjelasan Source Code

### tp7_2_2311104028.json
```json
{
    "courses": [
		{
			"code": "CRI2C4",
			"name": "Konstruksi Perangkat Lunak"
		},
		{
			"code": "CC204",
			"name": "Basis Data"
		},
		{
			"code": "CC205",
			"name": "Arsitektur Desain Dan Perangkat Lunak"
		},
		{
			"code": "CC206",
			"name": "Interaksi Manusia Komputer"
		},
		{
			"code": "CC207",
			"name": "Rekayasa Kebutuhan Perangkat Lunak"
		},
		{
			"code": "CC208",
			"name": "Proyek Tingkat II"
		},
		{
			"code": "CC209",
			"name": "Pemodelan Perangkat Lunak"
		}
	]
}

```
<p>Kelas JSON Ini berisikan data Mata Kuliah Yang diambil oleh mahasiswa terdapat kode dan nama matkul nya.</p>

---

### KuliahMahasiswa2311104028.js
```javascript
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

```
<p>Kode di atas adalah program Node.js yang digunakan untuk membaca file JSON bernama tp7_2_2311104028.json secara asynchronous menggunakan modul fs/promises. Setelah data dibaca dan diubah menjadi objek JavaScript dengan JSON.parse(), program mengakses array courses yang berisi daftar mata kuliah. Setiap mata kuliah ditampilkan ke konsol dengan format urutan, kode, dan nama mata kuliah. Jika terjadi kesalahan saat membaca atau memproses file, program akan menampilkan pesan error.</p>

## 💻 Output Program
Saat menjalankan program dengan:
```
node KuliahMahasiswa2311104028.js
```
Akan menghasilkan output berikut:
```
-- OUTPUT --
 1. CRI2C4 - Konstruksi Perangkat Lunak
 2. CC204 - Basis Data
 3. CC205 - Arsitektur Desain Dan Perangkat Lunak
 5. CC207 - Rekayasa Kebutuhan Perangkat Lunak
 6. CC208 - Proyek Tingkat II
 7. CC209 - Pemodelan Perangkat Lunak
```

---

<h1 style ='text-align: center'>Terima Kasih :)</h1>