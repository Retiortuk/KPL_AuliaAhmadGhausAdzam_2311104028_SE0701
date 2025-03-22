# Jurnal Modul 5

## Deskripsi Jurnal
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai jurnal untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari satu bagian utama:
1. **Implementasi Generic**.

---

## Penjelasan Source Code

### 1. Penjumlahan.js
```javascript
class Penjumlahan {
    static JumlahTigaAngka(a, b, c) {
        if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
            return a + b + c;
        }
        throw new Error('input harus berupa angka');
    }
}

const hasilPenjumlahan = Penjumlahan.JumlahTigaAngka(12, 40, 28);
console.log(`Hasil Penjumlahan: ${hasilPenjumlahan}`);
```
<p>Kelas Penjumlahan adalah sebuah kelas yang berisi satu metode statis bernama JumlahTigaAngka. Metode ini menerima tiga argumen a, b, dan c, yang diharapkan bertipe angka. Di dalam metode ini terdapat pengecekan tipe data dari setiap argumen, dan jika semuanya bertipe angka (number), maka fungsi akan mengembalikan hasil penjumlahan dari ketiga argumen tersebut. Jika tidak, akan diberikan pesan kesalahan (error). Pemanggilan metode ini dilakukan dengan memberikan tiga angka dari NIM (12, 40, dan 28) dan mencetak hasil penjumlahannya ke konsol..</p>

## 💻 Output Program
Saat menjalankan program dengan:
```
node Penjumlahan.js
```
Akan menghasilkan output berikut:
```
-- OUTPUT --
Hasil Penjumlahan: 80
```


---

### 2. SimpleDataBase.js
```javascript
class Penjumlahan {
    static JumlahTigaAngka(a, b, c) {
        if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
            return a + b + c;
        }
        throw new Error('Input harus berupa angka');
    }
}

const hasilPenjumlahan = Penjumlahan.JumlahTigaAngka(12, 40, 28);
console.log(`Hasil penjumlahan: ${hasilPenjumlahan}`);

class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    AddNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date().toUTCString());
    }

    PrintAllData() {
        if (this.storedData.length === this.inputDates.length) {
            this.storedData.forEach((data, index) => {
                console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index]}`);
            });
        } else {
            console.error('Jumlah data dan tanggal tidak sinkron.');
        }
    }
}

const database = new SimpleDataBase();
database.AddNewData(12);
database.AddNewData(40);
database.AddNewData(28);

database.PrintAllData();

```
<p>Kelas SimpleDataBase merupakan kelas yang digunakan untuk menyimpan data bertipe generik beserta waktu penyimpanannya. Kelas ini memiliki dua property: storedData (array untuk menyimpan data yang diberikan) dan inputDates (array untuk menyimpan waktu penyimpanan data dalam format UTC). Konstruktor kelas menginisialisasi kedua property tersebut sebagai array kosong. Metode AddNewData berfungsi untuk menambahkan data baru ke storedData dan mencatat waktu saat data tersebut dimasukkan ke inputDates. Metode PrintAllData menampilkan semua data yang tersimpan bersama dengan waktu penyimpanannya. Sebelum mencetak, dilakukan pengecekan untuk memastikan jumlah data dan tanggal sudah sinkron, jika tidak, pesan kesalahan akan ditampilkan..</p>

## 💻 Output Program
Saat menjalankan program dengan:
```
node SimpleDataBase.js
```
Akan menghasilkan output berikut:
```
-- OUTPUT --
Data 1 berisi: 12, yang disimpan pada waktu UTC: Sat, 22 Mar 2025 08:15:57 GMT
Data 2 berisi: 40, yang disimpan pada waktu UTC: Sat, 22 Mar 2025 08:15:57 GMT
Data 3 berisi: 28, yang disimpan pada waktu UTC: Sat, 22 Mar 2025 08:15:57 GMT
```


---


---
<h1 style ='text-align: center'>Terima Kasih :)</h1>