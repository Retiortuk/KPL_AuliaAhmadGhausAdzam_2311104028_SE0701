# Tugas Penadahluan Modul 10

## Deskripsi TP
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai jurnal untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari satu bagian utama:
1. **Library Pada JS**.

---

## Penjelasan Source Code

### aljabarLibraries.js
```javascript


function AkarPersamaanKuadrat([a, b, c]) {
    let D = b * b - 4 * a * c;
    if (D < 0) return []; // Akar imajiner tidak ditangani
    let sqrtD = Math.sqrt(D);
    let x1 = (-b + sqrtD) / (2 * a);
    let x2 = (-b - sqrtD) / (2 * a);
    return [x1, x2];
}

function HasilKuadrat([a, b]) {
    let hasil = [];
    hasil[0] = a * a;           // x^2
    hasil[1] = 2 * a * b;       // x
    hasil[2] = b * b;           // konstanta
    return hasil;
}

module.exports = { AkarPersamaanKuadrat, HasilKuadrat };

```
<p>File aljabarLibraries.js berfungsi sebagai library atau kumpulan fungsi aljabar yang dapat digunakan oleh program utama. Di dalamnya terdapat dua fungsi utama, yaitu AkarPersamaanKuadrat dan HasilKuadrat. Fungsi AkarPersamaanKuadrat menerima input berupa array yang merepresentasikan koefisien [a, b, c] dari sebuah persamaan kuadrat dalam bentuk umum 
𝑎
𝑥
2
+
𝑏
𝑥
+
𝑐
=
0
ax 
2
 +bx+c=0. Fungsi ini menghitung diskriminan (D = b² - 4ac) dan menentukan dua akar real jika diskriminan bernilai nol atau positif. Jika diskriminan negatif, fungsi mengembalikan array kosong karena tidak menangani akar imajiner. Sementara itu, fungsi HasilKuadrat menerima dua nilai koefisien [a, b] dan mengembalikan hasil kuadrat sempurna dari bentuk dalam bentuk array [a², 2ab, b²]. Kode dalam file ini diekspor dengan module.exports, sehingga bisa digunakan oleh file lain seperti main.js.</p>

---

### main.js
```javascript

const { AkarPersamaanKuadrat, HasilKuadrat } = require('./aljabarLibraries');

console.log("=== TEST LIBRARY ALJABAR ===");

let akar = AkarPersamaanKuadrat([1, -3, -10]);
console.log("Akar persamaan x^2 - 3x - 10 =", akar);

let kuadrat = HasilKuadrat([2, -3]);
console.log("Hasil kuadrat dari (2x - 3)^2 =", kuadrat);

```
<p>File main.js berperan sebagai program utama yang memanggil dan menguji fungsi-fungsi dari library aljabarLibraries.js. Pada bagian awal file, fungsi-fungsi dari library diimpor menggunakan perintah require. Kemudian dilakukan dua pemanggilan fungsi: pertama, fungsi AkarPersamaanKuadrat digunakan untuk menghitung dan menampilkan akar-akar dari persamaan kuadrat dengan koefisien tertentu, misalnya [1,−3,−10][1,−3,−10] yang merepresentasikan Kedua, fungsi HasilKuadrat digunakan untuk mencari hasil kuadrat dari bentuk dan mengembalikan hasilnya dalam array [4, -12, 9]. Output dari masing-masing fungsi ditampilkan di konsol menggunakan console.log, menunjukkan penerapan library eksternal secara modular di dalam proyek JavaScript.</p>

---

## 💻 Output Program
Saat menjalankan program dengan:
```
node main.js
```
Akan menghasilkan output berikut:
```
-- OUTPUT --
=== TEST LIBRARY ALJABAR ===
Akar persamaan x^2 - 3x - 10 = [ 5, -2 ]
Hasil kuadrat dari (2x - 3)^2 = [ 4, -12, 9 ]
```
---

<h1 style ='text-align: center'>Terima Kasih :)</h1>