// Elements
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const playerContainer = document.getElementById('player-container');
const volumeControl = document.getElementById('volume-control');

// Lyrics Modal Elements
const lyricsBtn = document.getElementById('lyricsBtn');
const lyricsModal = document.getElementById('lyrics-modal');
const closeLyrics = document.getElementById('close-lyrics');
const lyricsText = document.getElementById('lyrics-text');
const welcomeScreen = document.getElementById('welcome-screen');

// Songs Array
const songs = [
    {
        title: 'Duvidha',
        artist: 'Lucke',
        src: 'https://raw.githubusercontent.com/pixel143try7frs/VyrizPod/322e4bcd80fdff2cc7fd13347f66630e07cee582/DUVIDHA%20%20Hindi%20Rap%20Song%20%20By%20LUCKE.mp3',
        albumArt: 'https://github.com/pixel143try7frs/VyrizPod/blob/main/Duvidha%20downloaded%20from%20SpotiSongDownloader.com_.jpg?raw=true',
        lyrics: "Here are the lyrics of Duvidha..." // Example lyrics
    },
    {
        title: 'Bumpy Ride',
        artist: 'Mohombi',
        src: 'https://github.com/pixel143try7frs/VyrizPod/blob/main/Mohombi%20-%20Bumpy%20Ride.mp3?raw=true',
        albumArt: 'https://github.com/pixel143try7frs/VyrizPod/blob/main/Bumpy%20Ride%20downloaded%20from%20SpotiSongDownloader.com_.jpg?raw=true',
        lyrics: null // No lyrics for this song
    },
    {
        title: 'Ride It',
        artist: 'Jay Sean',
        src: 'https://raw.githubusercontent.com/pixel143try7frs/VyrizPod/main/Jay%20Sean%20-%20Ride%20It%20(Lyrics).mp3',
        albumArt: 'https://raw.githubusercontent.com/pixel143try7frs/VyrizPod/main/Bumpy%20Ride%20downloaded%20from%20SpotiSongDownloader.com_.jpg',
        lyrics: "Here are the lyrics of Ride It..." // Example lyrics
    }
];

let currentSongIndex = 0;

// Load a song
function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    lyricsBtn.style.display = 'block'; // Ensure button is always visible
}

// Show Player and Play Song
function showPlayer() {
    welcomeScreen.style.display = 'none'; // Hide welcome screen
    playerContainer.style.display = 'block';
    playerContainer.classList.remove('hidden');
}

// Lyrics Modal Logic
function openLyricsModal() {
    const currentSong = songs[currentSongIndex];
    if (currentSong.lyrics) {
        lyricsModal.classList.remove('no-lyrics');
        lyricsText.textContent = currentSong.lyrics;
    } else {
        lyricsModal.classList.add('no-lyrics');
        lyricsText.innerHTML = '<div class="no-lyrics-message">No Lyrics Available</div>';
    }
    lyricsModal.style.display = 'block';
}

function closeLyricsModal() {
    lyricsModal.style.display = 'none';
}

// Play/Pause functionality
function playAudio() {
    audioPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseAudio() {
    audioPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

// Event listeners for lyrics
lyricsBtn.addEventListener('click', openLyricsModal);
closeLyrics.addEventListener('click', closeLyricsModal);

// Other event listeners for controlling the player (play, prev, next, volume control)
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
});

prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
    loadSong(currentSongIndex);
    showPlayer();
    playAudio();
});

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
    loadSong(currentSongIndex);
    showPlayer();
    playAudio();
});

// Volume control
volumeControl.addEventListener('input', () => {
    audioPlayer.volume = volumeControl.value / 100;
});

// Initialize the player with the first song after a delay
window.onload = function () {
    setTimeout(function () {
        loadSong(currentSongIndex);
        showPlayer();
        playAudio();
    }, 3000); // Welcome screen shows for 3 seconds
};
