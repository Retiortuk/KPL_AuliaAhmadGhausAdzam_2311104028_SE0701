# Tugas Pendahuluan Modul 4

## Deskripsi TP
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai tugas pendahuluan untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari dua bagian utama:
1. **Implementasi Table-Driven** (menggunakan objek untuk penyimpanan data).
2. **Implementasi State-Based Construction** (menggunakan class untuk mengelola state).

---

## Penjelasan Source Code

### 1. KodeBuah.js (Table-Driven Implementation)
```javascript
const DataBuahMap = {
    'Apel': 'A00',
    'Aprikot': 'B00',
    'Alpukat': 'C00',
    'Pisang': 'D00',
    'Paprika': 'E00',
    'Blackberry': 'F00',
    'Ceri': 'H00',
    'Kelapa': 'I00',
    'Jagung': 'J00',
    'Kurma': 'K00',
    'Durian': 'L00',
    'Anggur': 'M00',
    'Melon': 'N00',
    'Semangka': 'O00'
};

function getKodeBuah(kodeBuah){
    return DataBuahMap[kodeBuah] || 'Data Buah Tidak ditemukan';
};
```
<p>Pertama di dalam File ini kita buat objek yang berisikan data Buah beserta Kode Buah nya lalu kita buat function <strong>getKodeBuah</strong> yang isi nya menyimpan kodeBuah.</p>

---

### 2. DoorMachine.js (State-Based Construction)
```javascript
class PosisiKarakterGame{
    constructor() {
        this.state = 'Berdiri';
        console.log('Posisi Default');
    }

    tombolW() {
        if (this.state === 'Berdiri') {
            this.state = 'Terbang';
            console.log('Posisi take off');

        } else if (this.state === 'Jongkok') {
            this.state = 'Berdiri';
            console.log('Posisi Berubah: Berdiri');

        } else if (this.state === 'Tengkurap') {
            this.state = 'Jongkok';
            console.log('Posisi Berubah: Jongkok')
        }
    }

    tombolS() {
        if (this.state === 'Berdiri') {
            this.state = 'Jongkok';
            console.log('Posisi Berubah: Jongkok');

        } else if (this.state === 'Jongkok') {
            this.state = 'Tengkurap';
            console.log('Posisi Berubah: Tengkurap');

        } else if (this.state === 'Terbang') {
            this.state = 'Berdiri';
            console.log('Posisi Berubah: Berdiri');
        }
    }

    tombolX() {
        if (this.state === 'Terbang') {
            this.state = 'Jongkok';
            console.log('Posisi Berubah: Landing')
        }
    }
}
```
<p><strong>constructor()</strong>: Menginisialisasi state awal menjadi 'Berdiri' dan mencetak pesan "Posisi Default".<br>
<strong>Method tombolW():</strong><br>
Jika state adalah 'Berdiri', mengubah state ke 'Terbang' dan menampilkan pesan "Posisi take off".<br>
Jika state adalah 'Jongkok', mengubah state ke 'Berdiri' dan menampilkan pesan "Posisi Berubah: Berdiri".<br>
Jika state adalah 'Tengkurap', mengubah state ke 'Jongkok' dan menampilkan pesan "Posisi Berubah: Jongkok".<br>
<strong>Method tombolS():</strong><br>
Jika state adalah 'Berdiri', mengubah state ke 'Jongkok'.<br>
Jika state adalah 'Jongkok', mengubah state ke 'Tengkurap'.<br>
Jika state adalah 'Terbang', mengubah state ke 'Berdiri'.<br>
<strong>Method tombolX():</strong><br>
Jika state adalah 'Terbang', mengubah state ke 'Jongkok' dan menampilkan pesan "Posisi Berubah: Landing".</p>

---

### 3. Main.js
```javascript
// TABLE-DRIVEN
console.log('Table-Driven');
console.log('Kode Buah Apel: ' + getKodeBuah('Apel'));
console.log('Kode Buah Pisang: ' + getKodeBuah('Pisang'));
console.log('Kode Buah Kurma: ' + getKodeBuah('Kurma'));

// STATE-BASED
console.log('\nSTATE-BASED');
const karakter= new PosisiKarakterGame();

karakter.tombolW();
karakter.tombolS();
karakter.tombolS();
karakter.tombolS();
karakter.tombolW();
karakter.tombolW();
karakter.tombolW();
karakter.tombolX();
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
-- OUTPUT --
Table-Driven
Kode Buah Apel: A00
Kode Buah Pisang: D00
Kode Buah Kurma: K00

STATE-BASED
Posisi Default
Posisi take off
Posisi Berubah: Berdiri
Posisi Berubah: Jongkok
Posisi Berubah: Tengkurap
Posisi Berubah: Jongkok
Posisi Berubah: Berdiri
Posisi take off
Posisi Berubah: Landing
```

---
<h1 style ='text-align: center'>Terima Kasih :)</h1>