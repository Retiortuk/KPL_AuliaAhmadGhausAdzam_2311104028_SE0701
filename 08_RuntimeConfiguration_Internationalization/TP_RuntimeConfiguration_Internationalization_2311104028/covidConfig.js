const fs = require('fs');

class CovidConfig {
  constructor(path = './covid_config.json') {
    this.path = path;
    this.config = {
      satuan_suhu: "celcius",
      batas_hari_deman: 14,
      pesan_ditolak: "Anda tidak diperbolehkan masuk ke dalam gedung ini",
      pesan_diterima: "Anda dipersilahkan untuk masuk ke dalam gedung ini"
    };

    this.loadConfig();
  }

  loadConfig() {
    if (fs.existsSync(this.path)) {
      const rawData = fs.readFileSync(this.path);
      this.config = JSON.parse(rawData);
    }
  }

  saveConfig() {
    fs.writeFileSync(this.path, JSON.stringify(this.config, null, 2));
  }

  ubahSatuan() {
    this.config.satuan_suhu = this.config.satuan_suhu === "celcius" ? "fahrenheit" : "celcius";
    this.saveConfig();
  }

  getConfig() {
    return this.config;
  }
}

module.exports = CovidConfig;
