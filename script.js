// Elements
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const songItems = document.getElementById('song-items');
const playerContainer = document.getElementById('player-container');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const currentTimeDisplay = document.getElementById('current-time');
const remainingTimeDisplay = document.getElementById('remaining-time');

// Songs Array
const songs = [
    {
        title: 'Duvidha',
        artist: 'Lucke',
        src: 'https://raw.githubusercontent.com/pixel143try7frs/VyrizPod/322e4bcd80fdff2cc7fd13347f66630e07cee582/DUVIDHA%20%20Hindi%20Rap%20Song%20%20By%20LUCKE.mp3'
    },
    {
        title: 'Bumpy Ride',
        artist: 'Mohombi',
        src: 'https://github.com/pixel143try7frs/VyrizPod/blob/main/Mohombi%20-%20Bumpy%20Ride.mp3?raw=true'
    },
    {
        title: 'Ride It',
        artist: 'Jay Sean',
        src: 'https://github.com/pixel143try7frs/VyrizPod/raw/main/Jay%20Sean%20-%20Ride%20It%20(Lyrics).mp3'
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

// Update progress bar and time display
function updateProgress() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;

    // Update progress bar
    const progressWidth = (currentTime / duration) * 100 + '%';
    progress.style.width = progressWidth;

    // Update current time and remaining time
    currentTimeDisplay.textContent = formatTime(currentTime);
    remainingTimeDisplay.textContent = formatTime(duration - currentTime);
}

// Format time as mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
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

// Display all songs on homepage
function displaySongs() {
    songs.forEach((song, index) => {
        const songElement = document.createElement('div');
        songElement.classList.add('song-item');
        songElement.textContent = `${song.title} - ${song.artist}`;
        songElement.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            showPlayer();
            playAudio();
        });
        songItems.appendChild(songElement);
    });
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
audioPlayer.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('click', setProgress);

// Load songs on page load
window.onload = () => {
    displaySongs();
};
