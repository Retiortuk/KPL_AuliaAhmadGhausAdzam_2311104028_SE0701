# Tugas Jurnal Modul 15

## Deskripsi Jurnal
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai jurnal untuk praktikum KPL menggunakan JavaScript.
---

## 2. Penjelasan Source Code

### app.js
```javascript
const fs = require('fs');
const readline = require('readline');
const crypto = require('crypto');

// Path ke file penyimpanan user
const USERS_FILE = './users.json';

// Fungsi hash password menggunakan SHA-256
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// Validasi input username dan password
function isValidUsername(username) {
  return /^[a-zA-Z]{3,20}$/.test(username); // hanya huruf ASCII, panjang 3-20
}

function isValidPassword(password, username) {
  const panjang = password.length >= 8 && password.length <= 20;
  const adaKarakterUnik = /[!@#$%^&*]/.test(password);
  const tidakMengandungUsername = !password.toLowerCase().includes(username.toLowerCase());
  return panjang && adaKarakterUnik && tidakMengandungUsername;
}

// Load data user
function loadUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];
  const data = fs.readFileSync(USERS_FILE, 'utf-8');
  return JSON.parse(data);
}

// Simpan data user
function saveUser(user) {
  const users = loadUsers();
  users.push(user);
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Login user
function login(username, password) {
  const users = loadUsers();
  const hash = hashPassword(password);
  const found = users.find(u => u.username === username && u.password === hash);
  return !!found;
}

// CLI Interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("1. Registrasi\n2. Login");
rl.question("Pilih menu (1/2): ", (menu) => {
  if (menu === '1') {
    // Registrasi
    rl.question("Masukkan username: ", (username) => {
      if (!isValidUsername(username)) {
        console.log("Username tidak valid. Hanya huruf (3–20 karakter).");
        rl.close();
        return;
      }

      rl.question("Masukkan password: ", (password) => {
        if (!isValidPassword(password, username)) {
          console.log("Password tidak valid. Minimal 8 karakter, maksimal 20, mengandung karakter unik, dan tidak mengandung username.");
          rl.close();
          return;
        }

        const hashedPassword = hashPassword(password);
        saveUser({ username, password: hashedPassword });
        console.log("Registrasi berhasil!");
        rl.close();
      });
    });

  } else if (menu === '2') {
    // Login
    rl.question("Masukkan username: ", (username) => {
      rl.question("Masukkan password: ", (password) => {
        if (login(username, password)) {
          console.log("Login berhasil!");
        } else {
          console.log("Login gagal. Username atau password salah.");
        }
        rl.close();
      });
    });

  } else {
    console.log("Menu tidak tersedia.");
    rl.close();
}
});
```
<p>Berkas app.js pada Jurnal Modul 15 merupakan aplikasi CLI sederhana untuk registrasi dan login user, dengan penyimpanan data ke file JSON serta penerapan prinsip secure coding. Aplikasi ini memvalidasi input username agar hanya berisi huruf ASCII sepanjang 3–20 karakter, dan password harus memiliki panjang 8–20 karakter, mengandung karakter unik, serta tidak mengandung bagian dari username. Password disimpan dalam bentuk hash SHA-256 untuk keamanan. Data user disimpan dan dibaca dari users.json, dan aplikasi menangani input serta error dengan baik untuk mencegah celah keamanan umum.</p>

---

## 💻 Output Program
Saat menjalankan program dengan:
```
node app.js
```

```
-- OUTPUT --
1. Registrasi
2. Login
Pilih menu (1/2): 1
Masukkan username: gesaa
Masukkan password: GesaUhuy1305#
Registrasi berhasil!
```
---

### users.json
```json
[
  {
    "username": "gesaa",
    "password": "93ad797a875319578ebf8aa815b535b95427e6eb1c663342002072805c38acdb"
  }
]
```
<p>Maka data yang telah di input akan masuk kedalam file users.json ini begitu</p>

<h1 style ='text-align: center'>Terima Kasih :)</h1>