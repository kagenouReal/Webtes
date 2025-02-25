let video = document.getElementById("video");

function playPause() {
    let video = document.getElementById("videoPlayer");
    let btn = document.getElementById("playPauseBtn");

    if (video.paused) {
        video.play();
        btn.innerHTML = "⏸ Pause"; // Ganti teks jadi Pause
    } else {
        video.pause();
        btn.innerHTML = "▶ Play"; // Ganti teks jadi Play
    }
}