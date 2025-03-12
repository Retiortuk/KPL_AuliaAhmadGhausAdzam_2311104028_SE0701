const getKodeBuah = require ('./KodeBuah');
const { PosisiKarakterGame } = require ('./PosisiKarakterGame');

// TABLE-DRIVEN
console.log('Table-Driven');
console.log('Kode Buah Apel: ' + getKodeBuah('Apel'));
console.log('Kode Buah Pisang: ' + getKodeBuah('Pisang'));
console.log('Kode Buah Kurma: ' + getKodeBuah('Kurma'));

// STATE-BASED
console.log('\nSTATE-BASED');
const karakter= new PosisiKarakterGame();

karakter.tombolW();
karakter.tombolS();
karakter.tombolS();
karakter.tombolS();
karakter.tombolW();
karakter.tombolW();
karakter.tombolW();
karakter.tombolX();


