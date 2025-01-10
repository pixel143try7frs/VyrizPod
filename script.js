// Song Data
const songs = [
    {
        title: "Duvidha",
        artist: "By Unknown",
        audioSrc: "https://github.com/pixel143try7frs/VyrizPod/blob/main/Duvidha%20downloaded%20from%20SpotiSongDownloader.com_.mp3",
        albumArt: "https://github.com/pixel143try7frs/VyrizPod/blob/main/Duvidha%20downloaded%20from%20SpotiSongDownloader.com_.jpg"
    },
    {
        title: "Bumpy Ride",
        artist: "By Mohombi",
        audioSrc: "https://github.com/pixel143try7frs/VyrizPod/blob/main/Mohombi%20-%20Bumpy%20Ride.mp3",
        albumArt: "https://github.com/pixel143try7frs/VyrizPod/blob/main/Bumpy%20Ride%20downloaded%20from%20SpotiSongDownloader.com_.jpg"
    }
];

let currentSongIndex = 0;

// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const musicPlayer = document.getElementById('musicPlayer');
const audioPlayer = document.getElementById('audioPlayer');
const albumArt = document.getElementById('albumArt');
const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let isPlaying = false;

// Welcome Screen Fade-Out
setTimeout(() => {
    welcomeScreen.style.display = 'none';
    musicPlayer.style.display = 'block';
    loadSong(currentSongIndex);
}, 3000);

// Load Song
function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.audioSrc;
    albumArt.src = song.albumArt;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
}

// Play and Pause Functionality
playBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audioPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// Next Song
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) {
        audioPlayer.play();
    }
});

// Previous Song
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) {
        audioPlayer.play();
    }
});
