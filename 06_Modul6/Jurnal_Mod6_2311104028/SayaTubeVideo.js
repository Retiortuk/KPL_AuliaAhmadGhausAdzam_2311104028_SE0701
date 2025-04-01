class SayaTubeVideo {

    constructor(title) {
        if (!title || title.length > 200) {
            throw new Error("Judul Video Tidak Boleh Kosong dan Maksimal 200 Karakter.")
        }

        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (typeof count !== 'number' || count < 0 || count > 25000000) {
            throw new Error("Input play tidak valid.");
        }
        this.playCount += count;
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Tittle: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}