const SayaTubeVideo = require("./SayaTubeVideo");
class SayaTubeUser {
    constructor(username) {
        if (!username || username.length > 100) {
            throw new Error("Username TIdak Boleh Kosong dan Maksimal 100 Karakter.")
        }
        this.username = username;
        this.uploadedVideos = [];
    }

    addVideo(video) {
        if (!(video instanceof SayaTubeVideo)) {
            throw new Error("Input harus berupa instance dari SayaTubeVideo.");
        }
        this.uploadedVideos.push(video);
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    printAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        for (let i = 0; i < Math.min(this.uploadedVideos.length, 8); i++) {
            console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
        }
    }
}
module.exports = SayaTubeUser;

