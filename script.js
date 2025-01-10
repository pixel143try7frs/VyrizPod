// Grab the elements
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.querySelector('.progress');
const playerContainer = document.getElementById('player-container');
const welcomeScreen = document.getElementById('welcome-screen');

// Function to show the player after welcome screen fades out
setTimeout(() => {
    welcomeScreen.style.display = 'none';
    playerContainer.style.display = 'flex';
}, 7000);

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

// Event listeners
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
});

audioPlayer.addEventListener('timeupdate', updateProgress);

// For next/prev buttons (can be expanded later)
nextBtn.addEventListener('click', () => {
    console.log("Next song functionality goes here");
});

prevBtn.addEventListener('click', () => {
    console.log("Previous song functionality goes here");
});
