class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

const dataNIM = new DataGeneric('2311104028');
dataNIM.PrintData();