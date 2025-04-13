class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 100) {
            throw new Error("Judul video tidak boleh kosong dan maksimal 100 karakter.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000); // ID 5 digit acak
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (count > 10000000) {
            throw new Error("Penambahan play count maksimal 10.000.000.");
        }
        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
            throw new Error("Overflow: Jumlah play count melebihi batas maksimum integer.");
        }
        this.playCount += count;
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}\nTitle: ${this.title}\nPlay Count: ${this.playCount}`);
    }
}
try {
    let video = new SayaTubeVideo("Tutorial Design By Contract – [Aulia Ahmad Ghaus Adzam]");
    video.increasePlayCount(5000000);
    video.printVideoDetails();
} catch (error) {
    console.error("Error:", error.message);
}