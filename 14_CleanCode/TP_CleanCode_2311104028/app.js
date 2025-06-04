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
