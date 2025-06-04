# Tugas Jurnal Modul 14

## Deskripsi TP
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai jurnal untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari satu bagian utama:
1. **Clean Code**.
---

## 2. Penjelasan Source Code

### appBefore.js
```javascript
// Sebelum menerapkan prinsip Clean Code dan refactoring
function calc(x,y){
return x+y;
}
let hasil=calc(10,5);
console.log("Hasilnya adalah: "+hasil);

```
<p>File ini berisi kelas sebelume menerapkan konsep clean code lebih tepat nya refacturing begitu.</p>

---

### app.js
```javascript
/**
 * Menjumlahkan dua bilangan
 * @param {number} angka1 - Bilangan pertama
 * @param {number} angka2 - Bilangan kedua
 * @returns {number} Hasil penjumlahan
 */
function jumlahkan(angka1, angka2) {
    return angka1 + angka2;
}

const bilanganPertama = 20;
const bilanganKedua = 8;

const hasilPenjumlahan = jumlahkan(bilanganPertama, bilanganKedua);
console.log(`Hasilnya adalah: ${hasilPenjumlahan}`);
```
<p>Berkas app.js pada jurnal modul 14 berisi fungsi jumlahkan yang digunakan untuk menjumlahkan dua bilangan, yaitu angka1 dan angka2, lalu mengembalikan hasilnya. Nilai dari kedua bilangan disimpan dalam variabel bilanganPertama dan bilanganKedua, kemudian hasil penjumlahannya disimpan dalam hasilPenjumlahan dan ditampilkan ke konsol. Kode telah direfaktor menggunakan konvensi penamaan camelCase, penggunaan const untuk deklarasi variabel, indentasi yang rapi, serta dokumentasi fungsi dengan komentar JSDoc agar mudah dipahami.</p>

---

## 💻 Output Program
Saat menjalankan program dengan:
```
node app.js
```

```
-- OUTPUT --
Hasilnya adalah: 28
```
---

<h1 style ='text-align: center'>Terima Kasih :)</h1>