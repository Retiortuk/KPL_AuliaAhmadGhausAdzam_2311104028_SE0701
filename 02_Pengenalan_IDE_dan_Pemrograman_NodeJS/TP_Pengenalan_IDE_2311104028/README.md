# Tugas Pendahuluan Modul 2

## Deskripsi Jurnal
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai tugas pendahuluan 2 untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari dua bagian utama:
1. **Implementasi Iput-Output**.
2. **Implementasi Perulangan** .
2. **Implementasi Percabangan dan Perulangan**.

---

## Penjelasan Source Code

### 1. soalA.js
```javascript
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan Huruf: ', (input)=> {
    if (input === 'A' || input === 'I' || input === 'U' || input === 'E' || input === 'O') {
        console.log(`Huruf ${input} Adalah Konsonan`)
    } else {
        console.log(`${input} bukan huruf konsonan`)
    }
    rl.close();
})
```
<p>Pertama di dalam File ini kita buat variable namanya rl menyimpan properti readline qustion lalu kita buat percabangan jika<br>
input nya adalah A I U E O maka akan menampilkan bahwa itu adalah konsonan jika tidak maka bukan kosonan.</p>

## 💻 Output Program
Saat menjalankan program dengan:
```
node soalB.js
```
Akan menghasilkan output berikut:
```
Masukan Huruf: A
Huurf A adalah Konsonan

Masukan Huruf: C
C bukan huruf konsonan
```

---

### 2. soalB.js
```javascript
const bilanganGenap = [2, 4, 6, 8, 10];

for (let i = 0; i < bilanganGenap.length; i++) {
    console.log(`Angka genap ${i + 1} : ${bilanganGenap[i]}`);
}
```
<p>di dalam kode tersebut terapat data array merupakan bilangan genap lalu kita panggil mengunakan perulangan for</p>

## 💻 Output Program
Saat menjalankan program dengan:
```
node soalB.js
```
Akan menghasilkan output berikut:
```
Angka genap 1 : 2
Angka genap 2 : 4
Angka genap 3 : 6
Angka genap 4 : 8
Angka genap 5 : 10
```
---
<h1 style ='text-align: center'>Terima Kasih :)</h1>