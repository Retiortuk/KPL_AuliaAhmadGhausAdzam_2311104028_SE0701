// Aulia Ahmad Ghaus Adzam
// 2311104028

// Barang Yang DiBeli Misalnya
const items = [
    { name: 'Barang Ke 1', price: 50000},
    { name: 'Barang ke 2', price: 10000},
    { name: 'Barang ke 3', price: 12000}
];

let totalPrice = items.reduce((sum, item) => sum + item.price, 0);