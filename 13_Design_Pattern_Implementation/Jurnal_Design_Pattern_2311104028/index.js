import { PusatDataSingleton } from "./PusatDataSingleton.js";

// A. buat dua variabel data1 dan data2
const data1 = PusatDataSingleton.getDataSingleton();
const data2 = PusatDataSingleton.getDataSingleton();

// B. Tambahkan data anggota kelompok dan asisten ke data1
data1.addSebuahData("Nama Anggota 1");
data1.addSebuahData("Nama Anggota 2");
data1.addSebuahData("Asisten Praktikum");

// C. Print data dari data2 (harus sama dengan data1)
console.log("\nData dari data2:");
data2.printSemuaData();

// D. Hapus nama asisten dari data2
data2.hapusSebuahData(2); // index 2 = Asisten

// E. Print dari data1 (nama asisten tidak boleh muncul)
console.log("\nData dari data1 setelah penghapusan:");
data1.printSemuaData();

// F. Print jumlah data dari keduanya
console.log(`\nJumlah data di data1: ${data1.getSemuaData().length}`);
console.log(`Jumlah data di data2: ${data2.getSemuaData().length}`);
