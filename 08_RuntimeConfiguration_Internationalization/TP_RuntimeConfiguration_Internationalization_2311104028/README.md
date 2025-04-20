# TP Modul 8

## Deskripsi TP
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai Tugas Pendahuluan untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari satu bagian utama:
1. **Runtime Configuration**.

---

## Penjelasan Source Code

### covid_config.json
```json
{
    "satuan_suhu": "celcius",
    "batas_hari_deman": 14,
    "pesan_ditolak": "Anda tidak diperbolehkan masuk ke dalam gedung ini",
    "pesan_diterima": "Anda dipersilahkan untuk masuk ke dalam gedung ini"
  }
  

```
<p>File covid_config.json adalah file konfigurasi eksternal yang digunakan untuk menyimpan nilai-nilai penting yang dibutuhkan oleh program secara dinamis saat runtime, tanpa harus mengubah kode sumber. File ini menggunakan format JSON (JavaScript Object Notation) yang berisi empat properti utama, yaitu satuan_suhu, batas_hari_deman, pesan_ditolak, dan pesan_diterima. Properti satuan_suhu menentukan satuan suhu yang digunakan (misalnya "celcius" atau "fahrenheit"), sedangkan batas_hari_deman adalah batas maksimal hari sejak terakhir kali pengguna mengalami gejala demam agar bisa dianggap sehat. Dua properti lainnya berisi pesan output yang akan ditampilkan program sebagai hasil akhir: pesan_diterima untuk kondisi lolos pemeriksaan, dan pesan_ditolak untuk kondisi tidak lolos. Dengan pendekatan runtime configuration ini, program menjadi lebih fleksibel dan mudah dikustomisasi tanpa perlu memodifikasi langsung kode program utamanya.</p>

---

### covidConfig.js
```javascript
const fs = require('fs');

class CovidConfig {
  constructor(path = './covid_config.json') {
    this.path = path;
    this.config = {
      satuan_suhu: "celcius",
      batas_hari_deman: 14,
      pesan_ditolak: "Anda tidak diperbolehkan masuk ke dalam gedung ini",
      pesan_diterima: "Anda dipersilahkan untuk masuk ke dalam gedung ini"
    };

    this.loadConfig();
  }

  loadConfig() {
    if (fs.existsSync(this.path)) {
      const rawData = fs.readFileSync(this.path);
      this.config = JSON.parse(rawData);
    }
  }

  saveConfig() {
    fs.writeFileSync(this.path, JSON.stringify(this.config, null, 2));
  }

  ubahSatuan() {
    this.config.satuan_suhu = this.config.satuan_suhu === "celcius" ? "fahrenheit" : "celcius";
    this.saveConfig();
  }

  getConfig() {
    return this.config;
  }
}

module.exports = CovidConfig;

```
<p>File covidConfig.js berisi sebuah class bernama CovidConfig yang berfungsi untuk mengelola konfigurasi aplikasi secara dinamis melalui file covid_config.json. Class ini memiliki kemampuan untuk membaca (load), menyimpan (save), dan memodifikasi isi konfigurasi tersebut. Saat objek CovidConfig dibuat, ia akan mengecek apakah file konfigurasi sudah ada; jika ya, maka isinya akan dibaca dan dimuat ke dalam aplikasi, namun jika tidak ditemukan, maka nilai default akan digunakan. Salah satu method penting dalam class ini adalah ubahSatuan(), yang berfungsi untuk mengganti satuan suhu dari "celcius" ke "fahrenheit" atau sebaliknya, lalu menyimpan perubahan tersebut kembali ke file konfigurasi. Dengan pendekatan ini, konfigurasi aplikasi menjadi fleksibel dan dapat diubah tanpa harus memodifikasi kode utama secara langsung. File ini merupakan inti dari penerapan runtime configuration dalam program.</p>

---

## Penjelasan Source Code

### index.js
```javascript
const readline = require('readline');
const CovidConfig = require('./covidConfig');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const config = new CovidConfig();
const cfg = config.getConfig();

rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${cfg.satuan_suhu}: `, (suhu) => {
  rl.question(`Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? `, (hari) => {
    let suhuFloat = parseFloat(suhu);
    let hariInt = parseInt(hari);
    let suhuNormal = false;

    if (cfg.satuan_suhu === "celcius") {
      suhuNormal = suhuFloat >= 36.5 && suhuFloat <= 37.5;
    } else if (cfg.satuan_suhu === "fahrenheit") {
      suhuNormal = suhuFloat >= 97.7 && suhuFloat <= 99.5;
    }

    if (suhuNormal && hariInt < cfg.batas_hari_deman) {
      console.log(cfg.pesan_diterima);
    } else {
      console.log(cfg.pesan_ditolak);
    }

    rl.close();
  });
});

```
<p>File index.js merupakan program utama yang menjalankan logika pemeriksaan kondisi kesehatan pengguna berdasarkan konfigurasi yang telah ditentukan di file covid_config.json. Program ini menggunakan modul readline untuk menerima input dari pengguna melalui console. Pertama, program menanyakan suhu tubuh pengguna sesuai dengan satuan suhu yang tercantum dalam konfigurasi (celcius atau fahrenheit). Kedua, program meminta input jumlah hari sejak terakhir kali pengguna mengalami gejala demam. Berdasarkan input tersebut, program akan memeriksa apakah suhu tubuh berada dalam rentang normal dan apakah jumlah hari tersebut masih di bawah batas maksimal (batas_hari_deman). Jika kedua kondisi terpenuhi, maka program akan mencetak pesan diterima; jika tidak, program akan mencetak pesan ditolak. Program ini juga mendukung pemanggilan method ubahSatuan() dari class CovidConfig jika ingin mengubah satuan suhu secara manual. Secara keseluruhan, index.js menjadi pusat pengambilan keputusan dengan memanfaatkan konfigurasi yang dapat diubah secara fleksibel.</p>

---

## 💻 Output Program
Saat menjalankan program dengan:
```
node index.js
```
Akan menghasilkan output berikut:
```
-- OUTPUT --
Berapa suhu badan anda saat ini? Dalam nilai celcius: 40
Anda tidak diperbolehkan masuk ke dalam gedung ini
```

---

<h1 style ='text-align: center'>Terima Kasih :)</h1>