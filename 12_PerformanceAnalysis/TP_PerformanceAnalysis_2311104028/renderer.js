const { CariTandaBilangan } = require('./fungsi');

window.cekTanda = function () {
    const input = parseInt(document.getElementById('inputNumber').value);
    const hasil = CariTandaBilangan(input);
    document.getElementById('outputLabel').textContent = hasil;
}
