// Songs Data
const songs = [
    {
        title: "Duvidha",
        artist: "Lucke",
        url: "https://raw.githubusercontent.com/pixel143try7frs/VyrizPod/322e4bcd80fdff2cc7fd13347f66630e07cee582/DUVIDHA%20%20Hindi%20Rap%20Song%20%20By%20LUCKE.mp3"
    },
    {
        title: "Bumpy Ride",
        artist: "Mohombi",
        url: "https://github.com/pixel143try7frs/VyrizPod/blob/main/Mohombi%20-%20Bumpy%20Ride.mp3?raw=true"
    },
    {
        title: "Ride It",
        artist: "Jay Sean",
        url: "https://github.com/pixel143try7frs/VyrizPod/blob/main/Jay%20Sean%20-%20Ride%20It%20(Lyrics).mp3?raw=true"
    }
];

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const searchBar = document.getElementById('search-bar');
const searchInput = document.getElementById('search-input');
const songItemsContainer = document.getElementById('song-items');
const playerContainer = document.getElementById('player-container');
const songTitleElement = document.getElementById('song-title');
const artistNameElement = document.getElementById('artist-name');
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.querySelector('.progress');
const progressBarContainer = document.querySelector('.progress-bar');
const volumeControl = document.getElementById('volume-control');

// Current State
let currentSongIndex = 0;
let isPlaying = false;

// Functions
function initializeSongs() {
    songs.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.setAttribute('data-index', index);

        songItem.innerHTML = `
            <div class="song-info">
                <h3 class="song-title">${song.title}</h3>
                <p class="artist-name">${song.artist}</p>
            </div>
        `;

        songItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            playSong();
        });

        songItemsContainer.appendChild(songItem);
    });
}

function loadSong(index) {
    const song = songs[index];
    songTitleElement.textContent = song.title;
    artistNameElement.textContent = song.artist;
    audioPlayer.src = song.url;
    updateProgressBar();
}

function playSong() {
    audioPlayer.play();
    isPlaying = true;
    playerContainer.style.display = 'block';
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseSong() {
    audioPlayer.pause();
    isPlaying = false;
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function togglePlayPause() {
    isPlaying ? pauseSong() : playSong();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function updateProgressBar() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progress}%`;
}

function filterSongs(searchTerm) {
    const filteredSongs = songs.filter(song =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    songItemsContainer.innerHTML = '';
    filteredSongs.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.setAttribute('data-index', index);

        songItem.innerHTML = `
            <div class="song-info">
                <h3 class="song-title">${song.title}</h3>
                <p class="artist-name">${song.artist}</p>
            </div>
        `;

        songItem.addEventListener('click', () => {
            currentSongIndex = songs.indexOf(song);
            loadSong(currentSongIndex);
            playSong();
        });

        songItemsContainer.appendChild(songItem);
    });
}

// Volume Control Functionality
function setVolume() {
    audioPlayer.volume = volumeControl.value / 100;
}

// Event Listeners
playBtn.addEventListener('click', togglePlayPause);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audioPlayer.addEventListener('timeupdate', updateProgressBar);

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.trim();
    filterSongs(searchTerm);
});

// Handle progress bar click or drag
let isMouseDown = false;
progressBarContainer.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    setProgressBarPosition(e);
});

progressBarContainer.addEventListener('mousemove', (e) => {
    if (isMouseDown) {
        setProgressBarPosition(e);
    }
});

progressBarContainer.addEventListener('mouseup', () => {
    isMouseDown = false;
});

progressBarContainer.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

function setProgressBarPosition(e) {
    const clickX = e.offsetX;
    const width = progressBarContainer.clientWidth;
    const newTime = (clickX / width) * audioPlayer.duration;
    audioPlayer.currentTime = newTime;
}

// Initial Setup
setTimeout(() => {
    welcomeScreen.style.opacity = 0;
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        searchBar.classList.add('show');
        document.getElementById('songs-list').style.display = 'block';
    }, 1000);
}, 2000);

initializeSongs();
loadSong(currentSongIndex);
