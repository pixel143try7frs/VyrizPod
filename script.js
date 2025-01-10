// Elements
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-btn');
const searchContainer = document.getElementById('search-container');
const songsContainer = document.getElementById('songs-container');
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent = document.getElementById('main-content');
const musicPlayer = document.getElementById('music-player');

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
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playAudio();
}

// Next Song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playAudio();
}

// Show the music player
function showMusicPlayer() {
    musicPlayer.classList.add('show');
}

// Event listeners
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audioPlayer.addEventListener('timeupdate', updateProgress);

// Add event listener for progress bar interaction
progressBar.addEventListener('click', setProgress);

// Show the main content after welcome screen disappears
window.onload = function () {
    setTimeout(() => {
        welcomeScreen.style.opacity = '0';
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            searchContainer.style.display = 'block';
            searchContainer.classList.add('fadeIn');
        }, 1000);
    }, 3000);
};
