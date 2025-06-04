# Tugas Penadahluan Modul 14

## Deskripsi TP
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai jurnal untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari satu bagian utama:
1. **Clean Code**.
---

## 2. Penjelasan Source Code

### appBefore.js
```javascript
// Tampilan Sebelum Menerapkan Clean Code (REfactoring)
function total(x,y){
return x*y;
}

let hasil = total(5, 3);
console.log("Hasil: " + hasil);
```
<p>File ini berisi kelas sebelume menerapkan konsep clean code lebih tepat nya refacturing begitu</p>

---

### app.js
```javascript
/**
 * Menghitung total harga berdasarkan jumlah dan harga satuan
 * @param {number} jumlah - Jumlah item
 * @param {number} hargaSatuan - Harga per item
 * @returns {number} Total harga
 */
function hitungTotalHarga(jumlah, hargaSatuan) {
  return jumlah * hargaSatuan;
}

const jumlahBarang = 5;
const hargaPerBarang = 3;

const totalHarga = hitungTotalHarga(jumlahBarang, hargaPerBarang);
console.log(`Hasil: ${totalHarga}`);
```
<p>Berkas app.js berisi sebuah fungsi bernama hitungTotalHarga yang digunakan untuk menghitung total harga berdasarkan jumlah barang dan harga satuan. Fungsi ini menerima dua parameter (jumlah dan hargaSatuan) lalu mengembalikan hasil perkaliannya. Di dalam skrip, nilai jumlahBarang dan hargaPerBarang ditentukan, lalu diproses menggunakan fungsi tersebut dan hasilnya ditampilkan ke konsol. Penulisan kode sudah mengikuti standar JavaScript modern seperti penggunaan const, penamaan variabel dengan camelCase, serta disertai komentar JSDoc untuk memperjelas fungsi.</p>

---

## 💻 Output Program
Saat menjalankan program dengan:
```
node app.js
```

```
-- OUTPUT --
Hasil: 15
```
---

<h1 style ='text-align: center'>Terima Kasih :)</h1>