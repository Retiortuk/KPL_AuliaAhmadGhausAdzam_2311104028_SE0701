// Global Varr Adalah Var Yang bisa dipakai diuar function
let globalVariable = "Aulia Ahmad Ghaus Adzam"

function getMyIdentity() {
    // SemenjakLocal Hanya Bisa dipakai di dalam function dan dipanggil menggunakan function 
    let localVariable = 2311104028
    
    console.log(`Nama Saya ${globalVariable} dan nim saya ${localVariable}`)
}

console.log(globalVariable)
// console.log(localVariable)

getMyIdentity()