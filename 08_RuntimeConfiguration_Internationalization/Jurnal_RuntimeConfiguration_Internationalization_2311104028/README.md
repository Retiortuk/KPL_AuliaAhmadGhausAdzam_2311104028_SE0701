# Jurnal Modul 8

## Deskripsi Jurnal
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai jurnal untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari satu bagian utama:
1. **Runtime Configuration**.

---

## Penjelasan Source Code

### bank_transfer_configuration.json
```json
{
    "lang": "id",
    "transfer": {
      "threshold": 25000000,
      "low_fee": 6500,
      "high_fee": 15000
    },
    "methods": ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
    "confirmation": {
      "en": "yes",
      "id": "ya"
    }
  }
  

```
<p>Kelas JSON Ini berisikan data yang menyimpan variael bahasa yang nantinya bisa diubah dari en ke id dan sebaliknyba, lalu juga
terdapat data dari pajak yang dikenakan dan methode apa saja.</p>

---

### bankTransferConfiguration.js
```javascript
const fs = require('fs');

class BankTransferConfig {
  constructor() {
    const defaultConfig = {
      lang: "en",
      transfer: {
        threshold: 25000000,
        low_fee: 6500,
        high_fee: 15000
      },
      methods: ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
      confirmation: {
        en: "yes",
        id: "ya"
      }
    };

    try {
      const data = fs.readFileSync('bank_transfer_config.json', 'utf-8');
      this.config = JSON.parse(data);
    } catch (err) {
      this.config = defaultConfig;
      fs.writeFileSync('bank_transfer_config.json', JSON.stringify(defaultConfig, null, 2));
    }
  }

  getConfig() {
    return this.config;
  }
}

module.exports = BankTransferConfig;


```
<p>File bankTransferConfig.js berfungsi sebagai class konfigurasi untuk membaca dan mengelola pengaturan aplikasi dari file eksternal bernama bank_transfer_config.json. Di dalam file ini, terdapat class BankTransferConfig yang ketika diinstansiasi, akan mencoba membaca file konfigurasi menggunakan modul fs (file system) bawaan Node.js. Jika file berhasil dibaca, maka isi dari file JSON tersebut akan di-parse menjadi objek JavaScript dan disimpan dalam properti this.config. Namun, jika file tidak ditemukan atau terjadi kesalahan saat membaca file (misalnya karena format JSON yang tidak valid), maka class ini akan menggunakan konfigurasi default yang telah ditentukan di dalam kode. Selain itu, jika file konfigurasi belum ada, file ini juga akan membuat file baru bank_transfer_config.json dengan isi default tersebut. Dengan pendekatan ini, file bankTransferConfig.js memungkinkan aplikasi utama (app.js) untuk membaca pengaturan secara fleksibel dan mendukung runtime configuration sesuai kebutuhan pengguna.</p>

---

## Penjelasan Source Code

### app.js
```javascript
const readline = require('readline');
const BankTransferConfig = require('./bankTransferConfig');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const config = new BankTransferConfig().getConfig();
const lang = config.lang;
const t = config.transfer;
const methods = config.methods;
const confirmText = config.confirmation[lang];

const ask = (q) => new Promise(resolve => rl.question(q, answer => resolve(answer)));

(async function main() {
  const label = {
    en: {
      amount: "Please insert the amount of money to transfer: ",
      fee: "Transfer fee = ",
      total: "Total amount = ",
      method: "Select transfer method:",
      confirm: `Please type "${confirmText}" to confirm the transaction: `,
      success: "The transfer is completed",
      cancelled: "Transfer is cancelled"
    },
    id: {
      amount: "Masukkan jumlah uang yang akan di-transfer: ",
      fee: "Biaya transfer = ",
      total: "Total biaya = ",
      method: "Pilih metode transfer:",
      confirm: `Ketik "${confirmText}" untuk mengkonfirmasi transaksi: `,
      success: "Proses transfer berhasil",
      cancelled: "Transfer dibatalkan"
    }
  }[lang];

  const input = await ask(label.amount);
  const amount = parseInt(input);
  const fee = amount <= t.threshold ? t.low_fee : t.high_fee;
  const total = amount + fee;

  console.log(`${label.fee}${fee}`);
  console.log(`${label.total}${total}`);

  console.log(label.method);
  methods.forEach((method, i) => console.log(`${i + 1}. ${method}`));
  await ask("> "); // user memilih metode (tidak digunakan lebih lanjut)

  const confirmation = await ask(label.confirm);
  console.log(confirmation === confirmText ? label.success : label.cancelled);

  rl.close();
})();

```
<p>app.js adalah titik masuk aplikasi yang membaca konfigurasi dari bank_transfer_config.json, lalu meminta jumlah uang yang akan ditransfer, menghitung biaya berdasarkan ambang (threshold) dan menampilkan biaya serta totalnya dalam bahasa sesuai pengaturan. Selanjutnya, ia menampilkan daftar metode transfer, menerima pilihan pengguna, lalu meminta konfirmasi (“yes” atau “ya”) sesuai bahasa dan menyimpulkan apakah transaksi berhasil atau dibatalkan. Semua interaksi dilakukan lewat modul readline di terminal, membuat alur program fleksibel sesuai konfigurasi runtime.</p>

---

## 💻 Output Program
Saat menjalankan program dengan:
```
node app.js
```
Akan menghasilkan output berikut:
```
-- OUTPUT --
Masukkan jumlah uang yang akan di-transfer: 20000
Biaya transfer = 6500
Total biaya = 26500
Pilih metode transfer:
1. RTO (real-time)
2. SKN
3. RTGS
4. BI FAST
> 4
Ketik "ya" untuk mengkonfirmasi transaksi: ya
Proses transfer berhasil
```
---

<h1 style ='text-align: center'>Terima Kasih :)</h1>