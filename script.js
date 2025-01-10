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
const albumArt = document.getElementById('album-art');

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
    albumArt.src = song.albumArt;
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

// Load the first song on page load
loadSong(currentSongIndex);

// Event Listeners
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playAudio();
        showPlayer();
    } else {
        pauseAudio();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audioPlayer.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('click', setProgress);

// Simulate loading songs into the list (optional search feature)
// Add this part if you want to have song items in the list (for searching)
function displaySongs() {
    songItems.innerHTML = '';
    songs.forEach((song, index) => {
        const songElement = document.createElement('div');
        songElement.classList.add('song-item');
        songElement.innerHTML = `
            <img src="${song.albumArt}" alt="${song.title}">
            <div>
                <h3 class="song-title">${song.title}</h3>
                <p class="artist-name">${song.artist}</p>
            </div>
        `;
        songElement.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            playAudio();
            showPlayer();
        });
        songItems.appendChild(songElement);
    });
}

displaySongs();
