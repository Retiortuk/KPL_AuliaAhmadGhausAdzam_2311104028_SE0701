const readline = require('readline');
const CovidConfig = require('./covidConfig');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const config = new CovidConfig();
const cfg = config.getConfig();

rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${cfg.satuan_suhu}: `, (suhu) => {
  rl.question(`Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? `, (hari) => {
    let suhuFloat = parseFloat(suhu);
    let hariInt = parseInt(hari);
    let suhuNormal = false;

    if (cfg.satuan_suhu === "celcius") {
      suhuNormal = suhuFloat >= 36.5 && suhuFloat <= 37.5;
    } else if (cfg.satuan_suhu === "fahrenheit") {
      suhuNormal = suhuFloat >= 97.7 && suhuFloat <= 99.5;
    }

    if (suhuNormal && hariInt < cfg.batas_hari_deman) {
      console.log(cfg.pesan_diterima);
    } else {
      console.log(cfg.pesan_ditolak);
    }

    rl.close();
  });
});
