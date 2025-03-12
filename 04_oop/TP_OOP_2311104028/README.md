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
<p>Pertama di dalam File ini kita buat objek yang berisikan data kelurahan beserta Kode pos nya lalu kita buat function <strong>getKodePos</strong> yang isi nya menyimpan kodePosMap.</p>
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
<p><strong>constructor()</strong>: Menginisialisasi state awal sebagai 'TERKUNCI' dan menampilkan pesan Pintu terkunci.<br>
<strong>bukaPintu()</strong>: Mengubah state dari 'TERKUNCI' ke 'TERBUKA'. Menampilkan pesan Pintu tidak terkunci.</br>
<strong>kunciPintu()</strong>: Mengubah state dari 'TERBUKA' ke 'TERKUNCI'. Menampilkan pesan Pintu terkunci.</p>

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
<p><strong>Main.js</strong> adalah file utama yang digunakan untuk menggabungkan dan menjalankan kedua implementasi: Table-Driven dan State-Based Construction.</p>

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
<h1 style ='text-align: center'>Terima Kasih :)</h1>