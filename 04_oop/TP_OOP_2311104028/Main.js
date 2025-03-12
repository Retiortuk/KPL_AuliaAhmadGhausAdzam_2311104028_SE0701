// IMPLEMENTASI TABLE-DRIVEN
console.log('TABLE DRIVEN:');
console.log('Kode Pos Dari Batununggal: ' + getKodePos('Batununggal'));
console.log('Kode Pos Dari Jatisari: ' + getKodePos('Jatisari'));

// IMPLEMENTASI STATE-BASED
console.log('STATE-BASED:');
const door = new DoorMachine();
door.bukaPintu;
door.kunciPintu;
