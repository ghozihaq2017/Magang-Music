//Inisiasi Variabel Awal
const musicContainer = document.getElementById("music-container");
const title = document.getElementById("title");
const audio = document.getElementById("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const background = document.getElementById("background");

//Kumpulan Judul Lagu2
const songs = [
  "Shake It Off - Mbak Taylor",
  "Anti-hero",
  "Maroon",
  "Best Friend",
  "Amazing",
  "Lily",
  "Happier Than Ever",
  "Dandelions",
  "Notion",
  "Space Song",
];

//Index lagu yang di jalankan
let songIndex = 0;

//Fungsi Memuat Lagu
function loadSong(song) {
  title.innerText = song;
  audio.src = `./src/music/${song}.mp3`;
  cover.src = `./src/images/${song}.jpg`;
  background.src = `./src/img-background/${song}.jpg`;
}

//Memuat lagu sesuai index
loadSong(songs[songIndex]);

//Fungsi Mainkan Lagu
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fa").classList.remove("fa-play");
  playBtn.querySelector("i.fa").classList.add("fa-pause");
  audio.play();
}

//Fungsi Mem-pause Lagu
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fa").classList.add("fa-play");
  playBtn.querySelector("i.fa").classList.remove("fa-pause");
  audio.pause();
}

//Fungsi menjalankan lagu setelahnya
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

//Fungsi menjalankan lagu sebelumnya
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

//Fungsi meng-uodate progress bar lagu
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPerCent = (currentTime / duration) * 100;
  progress.style.width = `${progressPerCent}%`;
}

// Fungsi Meng-set Progress
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

//Event Listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change Song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

//Time/Song Update
audio.addEventListener("timeupdate", updateProgress);

//Mengklik Progress Bar
progressContainer.addEventListener("click", setProgress);

//Ketika lagunya selesai
audio.addEventListener("ended", nextSong);

// <!-- Typed js Effect -->
var typed = new Typed(".typing-text", {
  strings: ["MAGANG PINDAD DONE", "TERIMAKASI"],
  loop: true,
  typeSpeed: 80,
  backSpeed: 55,
  backDelay: 700,
});
