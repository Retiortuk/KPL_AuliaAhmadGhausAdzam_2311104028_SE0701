# Tugas Jurnal Modul 13

## Deskripsi TP
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai jurnal untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari satu bagian utama:
1. **Design Pattern Implementation**.
---
## 2. Penjelasan Design Pattern Singleton".

#### A. Dua contoh kondisi penggunaan Singleton:
1. **Logger: Aplikasi hanya perlu satu instance logger agar log tidak duplikat.**
2. **Database connection: Untuk mencegah koneksi database berlebih, cukup satu instance terkoneksi.**

#### B. Langkah-langkah implementasi:
1. **Buat kelas dengan constructor private (dalam JavaScript, bisa disimulasikan dengan variabel statis).**
2. **Buat properti static untuk menyimpan instance tunggal.**
3. **Buat method untuk mengakses instance tersebut dan buatkan jika belum ada.**

#### C. Kelebihan dan Kekurangan:
**Kelebihan:**
- Menghemat memori karena hanya satu instance.
- Mempermudah koordinasi antar bagian program.
- Cocok untuk data konfigurasi global.

**Kekurangan:**
- Sulit di-test karena instance global.
- Bisa melanggar prinsip single responsibility.
- Menyulitkan debugging jika instance diakses sembarangan.

---

## 3. Penjelasan Source Code

### PusatDataSingleton.js
```javascript
export class PusatDataSingleton {
    static _instance = null;

    constructor() {
        if (PusatDataSingleton._instance) {
            throw new Error("Gunakan getDataSingleton() untuk mendapatkan instance.");
        }
        this.DataTersimpan = [];
    }

    static getDataSingleton() {
        if (!PusatDataSingleton._instance) {
            PusatDataSingleton._instance = new PusatDataSingleton();
        }
        return PusatDataSingleton._instance;
    }

    getSemuaData() {
        return this.DataTersimpan;
    }

    printSemuaData() {
        this.DataTersimpan.forEach((data, i) => {
            console.log(`${i + 1}. ${data}`);
        });
    }

    addSebuahData(input) {
        this.DataTersimpan.push(input);
    }

    hapusSebuahData(index) {
        if (index >= 0 && index < this.DataTersimpan.length) {
            this.DataTersimpan.splice(index, 1);
        } else {
            console.log("Index tidak valid.");
        }
    }
}
```
<p>File ini berisi implementasi design pattern Singleton dalam JavaScript. Kelas PusatDataSingleton hanya akan memiliki satu instance sepanjang program berjalan, yang dikontrol melalui properti statis _instance. Atribut DataTersimpan menyimpan array string. Kelas ini juga menyediakan beberapa method: getDataSingleton() untuk mengakses atau membuat instance, addSebuahData() untuk menambahkan data, hapusSebuahData() untuk menghapus berdasarkan index, getSemuaData() untuk mengambil seluruh data, dan printSemuaData() untuk mencetak isi array satu per satu.</p>

---

### index.js
```javascript
import { PusatDataSingleton } from "./PusatDataSingleton.js";

// A. buat dua variabel data1 dan data2
const data1 = PusatDataSingleton.getDataSingleton();
const data2 = PusatDataSingleton.getDataSingleton();

// B. Tambahkan data anggota kelompok dan asisten ke data1
data1.addSebuahData("Nama Anggota 1");
data1.addSebuahData("Nama Anggota 2");
data1.addSebuahData("Asisten Praktikum");

// C. Print data dari data2 (harus sama dengan data1)
console.log("\nData dari data2:");
data2.printSemuaData();

// D. Hapus nama asisten dari data2
data2.hapusSebuahData(2); // index 2 = Asisten

// E. Print dari data1 (nama asisten tidak boleh muncul)
console.log("\nData dari data1 setelah penghapusan:");
data1.printSemuaData();

// F. Print jumlah data dari keduanya
console.log(`\nJumlah data di data1: ${data1.getSemuaData().length}`);
console.log(`Jumlah data di data2: ${data2.getSemuaData().length}`);
```
<p>File utama ini berisi simulasi penggunaan kelas Singleton. Dua variabel data1 dan data2 diisi dengan instance yang sama dari PusatDataSingleton. Kemudian data ditambahkan melalui data1, dan diprint menggunakan data2 untuk menunjukkan bahwa keduanya merujuk ke objek yang sama. Setelah data asisten dihapus dari data2, hasilnya juga tidak muncul saat diprint dari data1, membuktikan bahwa perubahan terjadi pada instance yang sama. Di akhir program, jumlah data pada data1 dan data2 dihitung dan ditampilkan.</p>

---

## 💻 Output Program
Saat menjalankan program dengan:
```
node index.js
```

```
-- OUTPUT --
Data dari data2:
1. Nama Anggota 1
2. Nama Anggota 2
3. Asisten Praktikum

Data dari data1 setelah penghapusan:
1. Nama Anggota 1
2. Nama Anggota 2

Jumlah data di data1: 2
Jumlah data di data2: 2
```
---

<h1 style ='text-align: center'>Terima Kasih :)</h1>