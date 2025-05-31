# Tugas Penadahluan Modul 13

## Deskripsi TP
<h3>Coder: Aulia Ahmad Ghaus Adzam | 2311104028</h3>

Proyek ini dibuat sebagai jurnal untuk praktikum KPL menggunakan JavaScript. Program ini terdiri dari satu bagian utama:
1. **Design Pattern Implementation**.
---
## 2. Menjelaskan Salah Satu Design Pattern "Observer".

#### A. Contoh Penggunaan Observer
**Observer cocok digunakan dalam aplikasi notifikasi, misalnya:**
Aplikasi cuaca, di mana banyak komponen (seperti tampilan suhu, prakiraan, kelembaban) bergantung pada data cuaca pusat. Jika data cuaca berubah, semua komponen tersebut akan diperbarui otomatis.

#### B. Langkah-langkah implementasi:
1. **Buat Subject (Publisher): Menyimpan data dan daftar observer.**
2. **Buat Observer: Kelas/objek yang ingin diberi tahu saat data berubah.**
3. **Registrasi Observer ke Objek.**
4. **Saat data diubah, Subject memberi tahu semua observer dengan memanggil metode mereka.**

#### C. Kelebihan dan Kekurangan:
**Kelebihan:**
- Loose coupling antar objek (independen).
- Mempermudah penambahan fitur notifikasi.

**Kekurangan:**
- Sulit dilacak saat observer terlalu banyak.
- Potensi masalah performa jika banyak observer aktif.

---

## 3. Penjelasan Source Code

### Subject.js
```javascript
export class Subject {
    constructor() {
        this.observers = [];
        this.state = null;
    }

    attach(observer) {
        this.observers.push(observer);
    }

    detach(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify() {
        this.observers.forEach(observer => observer.update(this));
    }

    setState(state) {
        this.state = state;
        this.notify();
    }

    getState() {
        return this.state;
    }
}
```
<p>File ini berisi kelas Subject yang berperan sebagai pusat data (publisher). Kelas ini menyimpan daftar observer, menyediakan metode attach untuk menambahkan observer, detach untuk menghapus observer, dan notify untuk memberi tahu semua observer ketika terjadi perubahan. Method setState digunakan untuk mengubah data dan secara otomatis memanggil notify, sedangkan getState mengembalikan data terkini.</p>

---

### Observer.js
```javascript
export class Observer {
    constructor(name) {
        this.name = name;
    }

    update(subject) {
        console.log(`${this.name} menerima update: ${subject.getState()}`);
    }
}
```
<p>File ini mendefinisikan kelas Observer yang memiliki nama dan method update(). Ketika objek Subject berubah, method update() dipanggil dan mencetak pesan ke konsol bahwa observer tersebut menerima pembaruan, termasuk data terbaru dari subject. Observer ini adalah “pendengar” perubahan dari subject.</p>

---

### index.js

```javascript
import { Subject } from "./Subject.js";
import { Observer } from "./Observer.js";

const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.attach(observer1);
subject.attach(observer2);

// Simulasi perubahan state
subject.setState("Data 1");
// Output: Observer 1 menerima update: Data 1
//         Observer 2 menerima update: Data 1

subject.setState("Data 2");
// Output: Observer 1 menerima update: Data 2
//         Observer 2 menerima update: Data 2
```
<p>File utama ini menghubungkan semua bagian. Program membuat instance dari Subject dan dua observer, lalu mendaftarkan observer ke subject menggunakan attach. Ketika method setState() dipanggil untuk mengubah data, observer secara otomatis diberi tahu dan menampilkan hasilnya di konsol. Ini menunjukkan cara kerja pola Observer dalam praktik.</p>

---

## 💻 Output Program
Saat menjalankan program dengan:
```
node index.js
```

```
-- OUTPUT --
Observer 1 menerima update: Data 1
Observer 2 menerima update: Data 1
Observer 1 menerima update: Data 2
Observer 2 menerima update: Data 2
```
---

<h1 style ='text-align: center'>Terima Kasih :)</h1>