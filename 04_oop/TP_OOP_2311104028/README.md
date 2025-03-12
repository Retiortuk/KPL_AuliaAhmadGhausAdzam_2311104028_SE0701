# Tugas Pendahuluan Modul 4

## Deskripsi TP
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>
Proyek ini dibuat sebagai tugas pendahuluan untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari dua bagian utama:
1. **Implementasi Table-Driven** (menggunakan objek untuk penyimpanan data).
2. **Implementasi State-Based Construction** (menggunakan class untuk mengelola state).

---

## Penjelasan Source Code

### 1. KodePos.js (Table-Driven Implementation)
```javascript
const kodePosMap = {
    'Batununggal': '40266',
    'Kujangsari': '40287',
    'Mengger': '40267',
    'Wates': '40256',
    'Cijaura': '40287',
    'Jatisari': '40286',
    'Margasari': '40286',
    'Sekejati': '40286',
    'Kebonwaru': '40272',
    'Maleer': '40274',
    'Samoja': '40273'
};

function getKodePos(kelurahan) {
    return kodePosMap[kelurahan] || 'Kode pos tidak ditemukan';
}

module.exports = { getKodePos };
```
<p>asdasdasdasd</p>
---

### 2. DoorMachine.js (State-Based Construction)
```javascript
class DoorMachine {
    constructor() {
        this.state = 'TERKUNCI';
        console.log('Pintu terkunci');
    }

    bukaPintu() {
        if (this.state === 'TERKUNCI') {
            this.state = 'TERBUKA';
            console.log('Pintu tidak terkunci');
        }
    }

    kunciPintu() {
        if (this.state === 'TERBUKA') {
            this.state = 'TERKUNCI';
            console.log('Pintu terkunci');
        }
    }
}

module.exports = { DoorMachine };
```
---

### 3. Main.js
```javascript
const { getKodePos } = require('./KodePos');
const { DoorMachine } = require('./DoorMachine');

console.log('--- Demonstrasi Table-Driven ---');
console.log('Kode Pos untuk Batununggal: ' + getKodePos('Batununggal'));
console.log('Kode Pos untuk Kujangsari: ' + getKodePos('Kujangsari'));

console.log('\n--- Demonstrasi State-Based Construction ---');
const door = new DoorMachine();
door.bukaPintu();
door.kunciPintu();
```

---

## 💻 Output Program
Saat menjalankan program dengan:
```
node Main.js
```
Akan menghasilkan output berikut:
```
--- Demonstrasi Table-Driven ---
Kode Pos untuk Batununggal: 40266
Kode Pos untuk Kujangsari: 40287

--- Demonstrasi State-Based Construction ---
Pintu terkunci
Pintu tidak terkunci
Pintu terkunci
```

---

## 📖 Penjelasan Singkat
Program ini menggunakan pendekatan **Table-Driven** untuk mengelola data dengan mudah dan pendekatan **State-Based Construction** untuk mengelola perubahan keadaan secara terstruktur. Program ini berjalan di lingkungan Node.js dan menampilkan hasilnya di console.

---

## 📌 Cara Menjalankan
1. Pastikan Node.js terinstall di komputer.
2. Simpan file-file (`KodePos.js`, `DoorMachine.js`, `Main.js`) dalam satu folder.
3. Jalankan program dengan perintah:
```
node Main.js
```
