const SayaTubeVideo = require("./SayaTubeVideo");
const SayaTubeUser = require("./SayaTubeUser");

try {
    let user = new SayaTubeUser("Gesa");
    let video1 = new SayaTubeVideo("Cara Buat Kueh Nastar");
    let video2 = new SayaTubeVideo("Cara Pasang RAM Komputer");

    video1.increasePlayCount(100);
    video2.increasePlayCount(200);

    user.addVideo(video1);
    user.addVideo(video2);

    user.printAllVideoPlaycount();
    console.log("Total play count:", user.getTotalVideoPlayCount());
} catch (error) {
    console.error("Terjadi kesalahan:", error.message);
}