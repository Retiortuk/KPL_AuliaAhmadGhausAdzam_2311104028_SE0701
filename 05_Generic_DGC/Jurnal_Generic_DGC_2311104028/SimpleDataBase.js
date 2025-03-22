// Nama file: modul5_2311104028.js

// Kelas Penjumlahan
class Penjumlahan {
    static JumlahTigaAngka(a, b, c) {
        if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
            return a + b + c;
        }
        throw new Error('Input harus berupa angka');
    }
}

// Memanggil method JumlahTigaAngka sesuai dengan ketentuan
const hasilPenjumlahan = Penjumlahan.JumlahTigaAngka(12, 40, 28);
console.log(`Hasil penjumlahan: ${hasilPenjumlahan}`);


// Kelas SimpleDataBase
class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    AddNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date().toUTCString());
    }

    PrintAllData() {
        if (this.storedData.length === this.inputDates.length) {
            this.storedData.forEach((data, index) => {
                console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index]}`);
            });
        } else {
            console.error('Jumlah data dan tanggal tidak sinkron.');
        }
    }
}


const database = new SimpleDataBase();
database.AddNewData(12);
database.AddNewData(40);
database.AddNewData(28);

database.PrintAllData();
