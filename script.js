// Elements
const welcomeScreen = document.getElementById('welcome-screen');
const playerContainer = document.getElementById('player-container'); // Your existing player container
const playBtn = document.getElementById('playBtn'); // Your existing play button
const audioPlayer = document.getElementById('audioPlayer'); // Your existing audio player
const songTitle = document.getElementById('song-title'); // Song title element
const artistName = document.getElementById('artist-name'); // Artist name element
const progress = document.querySelector('.progress'); // Progress bar element

// Songs Array (Your songs data)
const songs = [
    { title: 'Duvidha', artist: 'Lucke', src: 'https://raw.githubusercontent.com/pixel143try7frs/VyrizPod/322e4bcd80fdff2cc7fd13347f66630e07cee582/DUVIDHA%20%20Hindi%20Rap%20Song%20%20By%20LUCKE.mp3' },
    { title: 'Bumpy Ride', artist: 'Mohombi', src: 'https://github.com/pixel143try7frs/VyrizPod/blob/main/Mohombi%20-%20Bumpy%20Ride.mp3?raw=true' },
];

// Load song
function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
}

// Show player after welcome screen
function showPlayer() {
    welcomeScreen.style.display = 'none'; // Hide the welcome screen
    playerContainer.style.display = 'block'; // Show the music player
}

// Play Audio
function playAudio() {
    audioPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Pause button
}

// Pause Audio
function pauseAudio() {
    audioPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>'; // Play button
}

// Update Progress Bar
function updateProgress() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progressWidth = (currentTime / duration) * 100 + '%';
    progress.style.width = progressWidth;
}

// Event listener for play button
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
});

// Initialize player
window.onload = function () {
    setTimeout(function () {
        loadSong(0); // Load the first song
        showPlayer(); // Show the music player
        playAudio(); // Automatically play the song
    }, 3000); // Welcome screen for 3 seconds
};

// Update progress every time the song plays
audioPlayer.addEventListener('timeupdate', updateProgress);
