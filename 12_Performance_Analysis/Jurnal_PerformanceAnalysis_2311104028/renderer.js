const { CariNilaiPangkat } = require('./fungsi');

window.hitung = function () {
    const a = parseInt(document.getElementById('inputA').value);
    const b = parseInt(document.getElementById('inputB').value);
    const hasil = CariNilaiPangkat(a, b);
    document.getElementById('outputLabel').textContent = hasil;
}
