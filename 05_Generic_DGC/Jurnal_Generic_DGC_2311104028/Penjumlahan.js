
class Penjumlahan {
    static JumlahTigaAngka(a, b, c) {
        if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
            return a + b + c;
        }
        throw new Error('input harus berupa angka');
    }
}

const hasilPenjumlahan = Penjumlahan.JumlahTigaAngka(12, 40, 28);
console.log(`Hasil Penjumlahan: ${hasilPenjumlahan}`);