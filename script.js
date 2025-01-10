// Wait for 5 seconds before showing the player
setTimeout(() => {
    // Hide the loading screen
    document.getElementById('loading-screen').style.display = 'none';

    // Show the player with fade-in effect
    const playerContainer = document.getElementById('player-container');
    playerContainer.classList.add('show');
}, 5000); // 5 seconds for the loading screen

// Play/Pause functionality
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');

// Play/Pause Audio Functions
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

// Event listeners for play/pause
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
});

// Update progress bar while playing
audioPlayer.addEventListener('timeupdate', updateProgress);
