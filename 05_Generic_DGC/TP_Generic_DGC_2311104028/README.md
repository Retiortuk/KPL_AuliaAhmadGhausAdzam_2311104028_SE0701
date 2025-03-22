# Tugas Pendahuluan Modul 5

## Deskripsi TP
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai tugas pendahuluan untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari satu bagian utama:
1. **Implementasi Generic Data**.

---

## Penjelasan Source Code

### 1. HaloGeneric.js
```javascript
class HaloGeneric {

    static SapaUser(user) {
        console.log(`Halo ${user}`) ;
    }
}

HaloGeneric.SapaUser('Gesa');
```
<p>Kelas HaloGeneric merupakan kelas sederhana yang berfungsi untuk menyapa pengguna secara dinamis menggunakan metode statis bernama SapaUser(). Metode ini menggunakan parameter generik yang dapat berupa tipe data apapun (biasanya sebuah string). Saat dipanggil, metode ini akan mencetak pesan Halo user X, di mana X adalah nilai yang diberikan sebagai argumen. Pada implementasi ini, metode tersebut dipanggil dengan argumen berupa nama praktikan, yaitu "Gesa"..</p>
---

## 💻 Output Program
Saat menjalankan program dengan:
```
node HaloGeneric.js
```
Akan menghasilkan output berikut:
```
Halo Gesa
```

### 2. DataGeneric.js
```javascript
class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

const dataNIM = new DataGeneric('2311104028');
dataNIM.PrintData();
```
<p>Kelas DataGeneric merupakan kelas yang dirancang untuk menyimpan satu buah data generik (T) yang dapat berupa tipe data apapun. Kelas ini memiliki sebuah property bernama data yang nilainya diinisialisasi melalui konstruktor. Selain itu, kelas ini juga menyediakan metode PrintData() untuk mencetak data yang tersimpan dalam format Data yang tersimpan adalah: Y, di mana Y adalah nilai dari data. Pada implementasi ini, data yang disimpan adalah "2311104028" (NIM praktikan) yang kemudian dicetak menggunakan metode PrintData().</p>

## 💻 Output Program
Saat menjalankan program dengan:
```
node DataGeneric.js
```
Akan menghasilkan output berikut:
```
Data yang tersimpan adalah: 2311104028
```

---
<h1 style ='text-align: center'>Terima Kasih :)</h1>