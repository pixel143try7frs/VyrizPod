const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.querySelector('.progress');
const lyricsContainer = document.getElementById('lyrics-container');
const welcomeScreen = document.getElementById('welcome-screen');
const playerContainer = document.getElementById('player-container');

// Audio playback functions
function playAudio() {
    audioPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseAudio() {
    audioPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function updateProgress() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progressWidth = (currentTime / duration) * 100 + '%';
    progress.style.width = progressWidth;
}

// Show or hide lyrics
function toggleLyrics() {
    if (lyricsContainer.style.display === 'block') {
        lyricsContainer.style.display = 'none';
    } else {
        lyricsContainer.style.display = 'block';
    }
}

// Event listeners
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
});

audioPlayer.addEventListener('timeupdate', updateProgress);

// Welcome screen fadeout
window.onload = () => {
    setTimeout(() => {
        welcomeScreen.classList.add('fade-out');
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            playerContainer.style.display = 'block';
        }, 1000);
    }, 5000); // Fade out after 5 seconds
};
