# Tugas Pendahuluan Modul 4

## 📌 Deskripsi Proyek
Proyek ini dibuat sebagai tugas pendahuluan untuk praktikum Web Development menggunakan JavaScript. Program ini terdiri dari dua bagian utama:
1. **Implementasi Table-Driven** (menggunakan objek untuk penyimpanan data).
2. **Implementasi State-Based Construction** (menggunakan class untuk mengelola state).

---

## 📁 Struktur Proyek
```
|-- KodePos.js        (Implementasi Table-Driven)
|-- DoorMachine.js    (Implementasi State-Based Construction)
|-- Main.js           (File utama untuk menjalankan program)
```

---

## 📂 Penjelasan Source Code

### 1. KodePos.js (Table-Driven Implementation)
Pada file ini, digunakan sebuah objek `kodePosMap` untuk menyimpan data kode pos dari berbagai kelurahan. Proses pencarian kode pos dilakukan dengan fungsi `getKodePos()` yang mengakses data berdasarkan nama kelurahan.

Contoh penggunaan:
```javascript
getKodePos('Batununggal'); // Output: '40266'
```

### 2. DoorMachine.js (State-Based Construction)
Di file ini, dibuat sebuah class `DoorMachine` dengan dua state utama:
- **'TERKUNCI'** (State awal, menunjukkan bahwa pintu dalam kondisi terkunci).
- **'TERBUKA'** (State yang muncul ketika pintu dibuka).

Perubahan state dilakukan dengan metode `bukaPintu()` dan `kunciPintu()`.

### 3. Main.js
File ini menggabungkan kedua implementasi di atas dengan menggunakan `require()` untuk mengimpor fungsi dari file lain.

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
