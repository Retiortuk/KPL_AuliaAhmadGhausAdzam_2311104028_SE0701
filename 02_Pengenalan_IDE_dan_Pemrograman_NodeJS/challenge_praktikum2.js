// Aulia Ahmad Ghaus Adzam
// 2311104028

// Barang Yang DiBeli Misalnyee
const items = [
    { name: 'Barang Ke 1', price: 50000},
    { name: 'Barang ke 2', price: 10000},
    { name: 'Barang ke 3', price: 12000}
];

let totalPrice = items.reduce((sum, item) => sum + item.price, 0);
let discountCategory = totalPrice > 100000 ? "Diskon Besar" : totalPrice >= 50000 ? "Diskon Sedang" : "Diskon Tidak Ada";

console.log("== Irasshaimase Di XYZ Store ==");
console.log("\Daftar Barang");
items.forEach(item => {
    console.log(`- ${item.name}: Rp.${item.price}`)
});

console.log(`Total Jumlah Barang: ${items.length}`);
console.log(`Total Harga: Rp.${totalPrice}`);
console.log(`Kategori Diskon: ${discountCategory}`);