// IF-ELSE
const a = 5; 
const b = 7; 
const c = 2; 

if(a > b) {
    console.log("A Lebih Besar Dari B")
}

if(a % 2 === 0) {
    console.log("Maka Sisah Bagi 2 dari A HABIS")
} else if (b % 2 === 0) {
    console.log("Sisah bagi b dari 2 HABIS")
} else if (c % 2 === 0) {
    console.log("Sisah Bagi c dari 2 HABIS")
} else {
    console.log("Sisah Bagi dari 2 untuk A b dan c hasilnya gak habis")
}

//SWITCH CASE
let pilihan = 2;

switch(pilihan){
    case 1:
        console.log("ini pilihan 1")
        break;
    case 2:
        console.log("ini pilihan 2")
        break;
    default:
        console.log("Gak Ada Pilihan Boy")
        break;  
} 