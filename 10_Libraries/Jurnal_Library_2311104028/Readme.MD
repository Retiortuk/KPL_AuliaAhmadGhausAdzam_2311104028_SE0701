# Jurnal Modul 10

## Deskripsi Jurnal
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai jurnal untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari satu bagian utama:
1. **Library Pada JS**.

---

## Penjelasan Source Code

### matematikaLibraries.js
```javascript

function FPB(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

function KPK(a, b) {
    return Math.abs(a * b) / FPB(a, b);
}

function Turunan(persamaan) {
    let result = [];
    let n = persamaan.length;
    for (let i = 0; i < n - 1; i++) {
        let coef = persamaan[i] * (n - i - 1);
        if (coef === 0) continue;
        let pangkat = n - i - 2;
        let term = coef + (pangkat > 0 ? `x${pangkat > 1 ? `^${pangkat}` : ''}` : '');
        result.push(term);
    }
    return result.join(' + ').replace(/\+\s-\s/g, '- ');
}

function Integral(persamaan) {
    let result = [];
    let n = persamaan.length;
    for (let i = 0; i < n; i++) {
        let coef = persamaan[i] / (n - i);
        let pangkat = n - i;
        let term = `${coef === 1 ? '' : coef}${pangkat > 0 ? `x${pangkat > 1 ? `^${pangkat}` : ''}` : ''}`;
        result.push(term);
    }
    result.push('C');
    return result.join(' + ').replace(/\+\s-\s/g, '- ');
}

module.exports = { FPB, KPK, Turunan, Integral };
 
```
<p>File matematikaLibraries.js berisi kumpulan fungsi matematika yang dikemas layaknya sebuah library untuk digunakan oleh program utama. Di dalam file ini terdapat empat fungsi utama, yaitu FPB, KPK, Turunan, dan Integral. Fungsi FPB digunakan untuk mencari Faktor Persekutuan Terbesar dari dua bilangan dengan menggunakan algoritma Euclidean. Fungsi KPK memanfaatkan hasil dari FPB untuk menghitung Kelipatan Persekutuan Terkecil berdasarkan rumus L = (a × b) / FPB(a, b). Fungsi Turunan menerima input berupa array koefisien dari suatu polinomial dan mengembalikan bentuk turunannya dalam format string. Sementara itu, fungsi Integral juga menerima koefisien polinomial sebagai input dan mengembalikan bentuk integral tak tentu dalam bentuk string dengan menambahkan konstanta C di akhir. Semua fungsi tersebut diekspor menggunakan module.exports agar bisa dipanggil dari file JavaScript lainnya.</p>

---

### main.js
```javascript

const { FPB, KPK, Turunan, Integral } = require('./matematikaLibraries');

console.log("=== PEMANGGILAN LIBRARY MATEMATIKA ===");
console.log("FPB(60, 45):", FPB(60, 45)); 
console.log("KPK(12, 8):", KPK(12, 8));   

console.log("\nTurunan([1, 4, -12, 9]):", Turunan([1, 4, -12, 9]));

console.log("\nIntegral([4, 6, -12, 9]):", Integral([4, 6, -12, 9]));

```
<p>File main.js berperan sebagai program utama atau console application yang memanfaatkan fungsi-fungsi dari library matematikaLibraries.js. Pada awal file, library diimpor menggunakan sintaks require. Kemudian, setiap fungsi di dalam library tersebut diuji coba dengan berbagai input. Misalnya, fungsi FPB dan KPK dipanggil dengan pasangan bilangan bulat untuk menampilkan hasil faktor dan kelipatan persekutuannya. Selanjutnya, fungsi Turunan dipanggil dengan array koefisien dari polinomial untuk menampilkan bentuk turunannya dalam bentuk string. Fungsi Integral juga diuji dengan input serupa untuk menampilkan bentuk integralnya. File ini menunjukkan bagaimana sebuah library dapat dihubungkan dan dimanfaatkan oleh file utama dalam proyek berbasis JavaScript secara modular.</p>

---

## 💻 Output Program
Saat menjalankan program dengan:
```
node main.js
```
Akan menghasilkan output berikut:
```
-- OUTPUT --
=== PEMANGGILAN LIBRARY MATEMATIKA ===
FPB(60, 45): 15
KPK(12, 8): 24

Turunan([1, 4, -12, 9]): 3x^2 + 8x + -12

Integral([4, 6, -12, 9]): x^4 + 2x^3 + -6x^2 + 9x + C
```
---

<h1 style ='text-align: center'>Terima Kasih :)</h1>