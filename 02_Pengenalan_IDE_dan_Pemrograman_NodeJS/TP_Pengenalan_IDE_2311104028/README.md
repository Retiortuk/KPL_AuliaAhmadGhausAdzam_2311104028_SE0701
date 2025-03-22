# Tugas Pendahuluan Modul 2

## Deskripsi TP
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai tugas pendahuluan untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari dua bagian utama:
1. **Implementasi Iput-Output**.
2. **Implementasi Array** (menggunakan array untuk menyimpan data).
2. **Implementasi Percabangan dan Perulangan**.

---

## Penjelasan Source Code

### 1. soalA.js
```javascript
let namaUser = 'Gesa';

console.log(`Halo! ${namaUser}`);
```
<p>Pertama di dalam File ini kita buat variable namanya namaUser menyimpan nama user lalu kita panggil di console.log + nama variable nya<br>
Yaitu: namaUser.</p>

## 💻 Output Program
Saat menjalankan program dengan:
```
node soalB.js
```
Akan menghasilkan output berikut:
```
Halo! Gesa
```

---

### 2. soalB.js
```javascript
const array = Array.from({ length: 50 }, (_, index) => index);

array.forEach(index => {
    if (index % 2 === 0 && index % 3 === 0) {
        console.log(`${index}  #$#$`);
    } else if (index % 2 === 0) {
        console.log(`${index}  ##`);
    } else if (index % 3 === 0) {
        console.log(`${index}  $$`);
    } else {
        console.log(index);
    }
});
```
<p>Kode tersebut membuat array dari angka 0 hingga 49 menggunakan Array.from(). Kemudian, setiap elemen dari array tersebut diperiksa  <br>menggunakan forEach() dan dicetak sesuai aturan: jika angka adalah kelipatan 6 (kelipatan 2 dan 3), akan mencetak "#$#$"; jika hanya kelipatan 2, akan mencetak "##"; jika hanya kelipatan 3, akan mencetak "$$"; dan jika tidak termasuk ketiganya, hanya akan mencetak angka itu sendiri..</p>

## 💻 Output Program
Saat menjalankan program dengan:
```
node soalB.js
```
Akan menghasilkan output berikut:
```
0  #$#$
1
2  ##
3  $$
4  ##
5
6  #$#$
7
.......Seterusnya
```
---

### 3. soalC.js
```javascript
const readline = require('readline');

const array = Array.from({ length: 50 }, (_, index) => index);

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function checkNumber(num) {
    const number = parseInt(num);
    if (isNaN(number) || number < 1 || number > 10000) {
        console.log('Masukkan angka valid antara 1 sampai 10000');
        return;
    }

    if (isPrime(number)) {
        console.log(`${number} adalah bilangan prima.`);
    } else if (number % 3 === 0) {
        console.log(`${number} adalah kelipatan 3.`);
    } else {
        console.log(`${number} bukan bilangan prima dan bukan kelipatan 3.`);
    }
}

// Membaca input dari user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan angka antara 1 sampai 10000: ', (userInput) => {
    checkNumber(userInput);
    rl.close();
});

```
<p>Kode di atas adalah program Node.js yang melakukan dua hal utama: pertama, memeriksa apakah sebuah angka adalah bilangan prima atau kelipatan 3; kedua, menerima input dari pengguna menggunakan modul readline. Fungsi isPrime() memeriksa apakah angka yang diberikan adalah bilangan prima dengan mengembalikan true jika ya, dan false jika tidak. Fungsi checkNumber() mengubah input pengguna menjadi angka (parseInt()), kemudian mengecek apakah angka tersebut bilangan prima, kelipatan 3, atau bukan keduanya, lalu menampilkan pesan yang sesuai di terminal. Proses pengambilan input dari pengguna dilakukan menggunakan readline.createInterface(), yang memungkinkan program untuk membaca input dari terminal dan menampilkannya kembali setelah diproses..</p>

---

## 💻 Output Program
Saat menjalankan program dengan:
```
node soalC.js
```
Akan menghasilkan output berikut:
```
Masukan angka antara 1 sampai 10000: 5
5 adalah bilangan prima
```

---
<h1 style ='text-align: center'>Terima Kasih :)</h1>