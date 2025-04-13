# Tugas Pendahuluan Modul 6

## Deskripsi TP
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai tugas pendahuluan untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari satu bagian utama:
1. **Object Oriented Programming OOP**.

---

## Penjelasan Source Code

### 1. SayaTubeVideo.js
```javascript
class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 100) {
            throw new Error("Judul video tidak boleh kosong dan maksimal 100 karakter.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000); // ID 5 digit acak
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (count > 10000000) {
            throw new Error("Penambahan play count maksimal 10.000.000.");
        }
        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
            throw new Error("Overflow: Jumlah play count melebihi batas maksimum integer.");
        }
        this.playCount += count;
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}\nTitle: ${this.title}\nPlay Count: ${this.playCount}`);
    }
}
try {
    let video = new SayaTubeVideo("Tutorial Design By Contract – [Aulia Ahmad Ghaus Adzam]");
    video.increasePlayCount(5000000);
    video.printVideoDetails();
} catch (error) {
    console.error("Error:", error.message);
}
```
<p>Kelas ini dirancang untuk merepresentasikan sebuah video di platform berbagi video. Kelas ini memiliki tiga properti: id, yang berupa angka acak lima digit untuk setiap objek video, title untuk menyimpan judul video, dan playCount, yang mengindikasikan jumlah pemutaran video yang dimulai dengan nilai 0. Konstruktor kelas menerima parameter judul video dan menginisialisasi properti tersebut. Selain itu, terdapat dua metode utama: IncreasePlayCount(int) yang menambah nilai playCount sesuai dengan input, dan PrintVideoDetails() yang mencetak detail video (ID, judul, dan jumlah pemutaran). Tugas ini juga mengharuskan implementasi prinsip Design by Contract dengan pengecekan terhadap panjang judul video dan batas maksimal penambahan play count, serta penanganan exception jika terjadi overflow pada penambahan playCount.</p>
---

## 💻 Output Program
Saat menjalankan program dengan:
```
node SayaTubeVideo.js
```
Akan menghasilkan output berikut:
```
ID: 86019
Title: Tutorial Design By Contract – [Aulia Ahmad Ghaus Adzam]
Play Count: 5000000
```

---
<h1 style ='text-align: center'>Terima Kasih :)</h1>