# Jurnal Modul 6

## Deskripsi Jurnal
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai jurnal untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari satu bagian utama:
1. **Object-Oriented Programming(OOP)**.

---

## Penjelasan Source Code

### 1. SayaTubeVIdeo.js
```javascript
class SayaTubeVideo {

    constructor(title) {
        if (!title || title.length > 200) {
            throw new Error("Judul Video Tidak Boleh Kosong dan Maksimal 200 Karakter.")
        }

        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (typeof count !== 'number' || count < 0 || count > 25000000) {
            throw new Error("Input play tidak valid.");
        }
        this.playCount += count;
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Tittle: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}
module.exports = SayaTubeVideo;
```
<p>Kelas SayaTubeVideo merepresentasikan sebuah video dalam sistem, dengan atribut id, title, dan playCount. ID dibuat secara acak untuk memastikan keunikan, judul divalidasi agar tidak kosong dan maksimal 200 karakter, serta play count awalnya 0. Kelas ini memiliki metode increasePlayCount(count) untuk menambah jumlah tayangan dengan validasi maksimal 25 juta, serta printVideoDetails() untuk mencetak informasi video. Kelas ini menerapkan prinsip Encapsulation dan Design by Contract untuk memastikan input yang valid.</p>

---

### 2. SayaTubeUser.js
```javascript
const SayaTubeVideo = require("./SayaTubeVideo");
class SayaTubeUser {
    constructor(username) {
        if (!username || username.length > 100) {
            throw new Error("Username TIdak Boleh Kosong dan Maksimal 100 Karakter.")
        }
        this.username = username;
        this.uploadedVideos = [];
    }

    addVideo(video) {
        if (!(video instanceof SayaTubeVideo)) {
            throw new Error("Input harus berupa instance dari SayaTubeVideo.");
        }
        this.uploadedVideos.push(video);
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    printAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        for (let i = 0; i < Math.min(this.uploadedVideos.length, 8); i++) {
            console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
        }
    }
}

// Buat Kelas Main A.K.A Terpisah
try {
    let user = new SayaTubeUser("Gesa");
    let video1 = new SayaTubeVideo("Cara Buat Kueh Nastar");
    let video2 = new SayaTubeVideo("Cara Pasang RAM Komputer");

    video1.increasePlayCount(100);
    video2.increasePlayCount(200);

    user.addVideo(video1);
    user.addVideo(video2);

    user.printAllVideoPlaycount();
    console.log("Total play count:", user.getTotalVideoPlayCount());
} catch (error) {
    console.error("Terjadi kesalahan:", error.message);
}
module.exports = SayaTubeUser;

```
<p>Kelas SayaTubeUser merepresentasikan pengguna dalam sistem, dengan atribut username dan uploadedVideos (daftar video yang diunggah). Username divalidasi agar tidak kosong dan maksimal 100 karakter, sementara daftar video disimpan dalam array. Kelas ini memiliki metode addVideo(video) untuk menambahkan video dengan validasi tipe data, getTotalVideoPlayCount() untuk menghitung total jumlah tayangan dari semua video, dan printAllVideoPlaycount() untuk mencetak daftar maksimal 8 video milik pengguna. Kelas ini menerapkan prinsip Encapsulation dan Exception Handling untuk memastikan keamanan data.</p>

## 💻 Output Program
Saat menjalankan program dengan:
```
node main.js
```
Akan menghasilkan output berikut:
```
-- OUTPUT --
User: Gesa
Video 1 judul: Cara Buat Kueh Nastar
Video 2 judul: Cara Pasang RAM Komputer
Total play count: 300
```


---


---
<h1 style ='text-align: center'>Terima Kasih :)</h1>