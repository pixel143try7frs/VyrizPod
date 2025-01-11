// Elements
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const songItems = document.getElementById('song-items');
const playerContainer = document.getElementById('player-container');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// Songs Array
const songs = [
    {
        title: 'Duvidha',
        artist: 'Lucke',
        src: 'https://raw.githubusercontent.com/pixel143try7frs/VyrizPod/322e4bcd80fdff2cc7fd13347f66630e07cee582/DUVIDHA%20%20Hindi%20Rap%20Song%20%20By%20LUCKE.mp3',
        albumArt: 'https://github.com/pixel143try7frs/VyrizPod/blob/main/Duvidha%20downloaded%20from%20SpotiSongDownloader.com_.jpg?raw=true'
    },
    {
        title: 'Bumpy Ride',
        artist: 'Mohombi',
        src: 'https://github.com/pixel143try7frs/VyrizPod/blob/main/Mohombi%20-%20Bumpy%20Ride.mp3?raw=true',
        albumArt: 'https://github.com/pixel143try7frs/VyrizPod/blob/main/Bumpy%20Ride%20downloaded%20from%20SpotiSongDownloader.com_.jpg?raw=true'
    }
];

let currentSongIndex = 0;

// Load a song
function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
}

// Show Player and Play Song
function showPlayer() {
    playerContainer.style.display = 'block';
    playerContainer.style.transform = 'translateY(0)';
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

// Update progress bar
function updateProgress() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progressWidth = (currentTime / duration) * 100 + '%';
    progress.style.width = progressWidth;
}

// Set progress when user clicks on the progress bar
function setProgress(e) {
    const width = progressBar.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;

    audioPlayer.currentTime = (clickX / width) * duration;
}

// Previous Song
function prevSong() {
    currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
    loadSong(currentSongIndex);
    showPlayer();
    playAudio();
}

// Next Song
function nextSong() {
    currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
    loadSong(currentSongIndex);
    showPlayer();
    playAudio();
}

// Event Listeners
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
progressBar.addEventListener('click', setProgress);
audioPlayer.addEventListener('timeupdate', updateProgress);

// Initialize app
loadSong(currentSongIndex);

// Welcome Screen fade out logic
setTimeout(() => {
    document.getElementById('welcome-screen').style.opacity = '0';
    document.getElementById('welcome-screen').style.transition = 'opacity 1s ease-in-out';
    document.getElementById('search-bar').classList.add('show');
    document.getElementById('songs-list').style.display = 'block';
}, 3000);
