// Select Elements
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const songItems = document.getElementById('song-items');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Songs Array
const songs = [
    { title: "Duvidha", artist: "Lucke", src: "URL1", albumArt: "ART_URL1" },
    { title: "Bumpy Ride", artist: "Mohombi", src: "URL2", albumArt: "ART_URL2" },
];

// Variables
let currentSongIndex = 0;
let isShuffle = false;
let isRepeat = false;

// Functions
function loadSong(index) {
    const song = songs[index];
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    audioPlayer.src = song.src;
}

function playSong() {
    audioPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseSong() {
    audioPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active');
}

function toggleRepeat() {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle('active');
}

// Event Listeners
playBtn.addEventListener('click', () => audioPlayer.paused ? playSong() : pauseSong());
darkModeToggle.addEventListener('click', () => document.body.classList.toggle('dark-mode'));

// Initialize
loadSong(currentSongIndex);
