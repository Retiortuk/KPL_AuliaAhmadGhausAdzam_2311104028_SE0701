export class PusatDataSingleton {
    static _instance = null;

    constructor() {
        if (PusatDataSingleton._instance) {
            throw new Error("Gunakan getDataSingleton() untuk mendapatkan instance.");
        }
        this.DataTersimpan = [];
    }

    static getDataSingleton() {
        if (!PusatDataSingleton._instance) {
            PusatDataSingleton._instance = new PusatDataSingleton();
        }
        return PusatDataSingleton._instance;
    }

    getSemuaData() {
        return this.DataTersimpan;
    }

    printSemuaData() {
        this.DataTersimpan.forEach((data, i) => {
            console.log(`${i + 1}. ${data}`);
        });
    }

    addSebuahData(input) {
        this.DataTersimpan.push(input);
    }

    hapusSebuahData(index) {
        if (index >= 0 && index < this.DataTersimpan.length) {
            this.DataTersimpan.splice(index, 1);
        } else {
            console.log("Index tidak valid.");
        }
    }
}
