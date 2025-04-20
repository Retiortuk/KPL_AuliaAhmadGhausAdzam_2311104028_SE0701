const readline = require('readline');
const BankTransferConfig = require('./bankTransferConfig');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const config = new BankTransferConfig().getConfig();
const lang = config.lang;
const t = config.transfer;
const methods = config.methods;
const confirmText = config.confirmation[lang];

const ask = (q) => new Promise(resolve => rl.question(q, answer => resolve(answer)));

(async function main() {
  const label = {
    en: {
      amount: "Please insert the amount of money to transfer: ",
      fee: "Transfer fee = ",
      total: "Total amount = ",
      method: "Select transfer method:",
      confirm: `Please type "${confirmText}" to confirm the transaction: `,
      success: "The transfer is completed",
      cancelled: "Transfer is cancelled"
    },
    id: {
      amount: "Masukkan jumlah uang yang akan di-transfer: ",
      fee: "Biaya transfer = ",
      total: "Total biaya = ",
      method: "Pilih metode transfer:",
      confirm: `Ketik "${confirmText}" untuk mengkonfirmasi transaksi: `,
      success: "Proses transfer berhasil",
      cancelled: "Transfer dibatalkan"
    }
  }[lang];

  const input = await ask(label.amount);
  const amount = parseInt(input);
  const fee = amount <= t.threshold ? t.low_fee : t.high_fee;
  const total = amount + fee;

  console.log(`${label.fee}${fee}`);
  console.log(`${label.total}${total}`);

  console.log(label.method);
  methods.forEach((method, i) => console.log(`${i + 1}. ${method}`));
  await ask("> "); // user memilih metode (tidak digunakan lebih lanjut)

  const confirmation = await ask(label.confirm);
  console.log(confirmation === confirmText ? label.success : label.cancelled);

  rl.close();
})();
