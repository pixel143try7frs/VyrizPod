// Elements
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.querySelector('.progress');

// Welcome screen transition
window.onload = function() {
    setTimeout(() => {
        document.getElementById('welcome-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('welcome-screen').style.display = 'none';
            document.getElementById('slogan-screen').style.display = 'block';
            document.getElementById('slogan-screen').style.opacity = '1';
        }, 2000);
    }, 3000);
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

// Event listeners
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
});

audioPlayer.addEventListener('timeupdate', updateProgress);

// Dummy previous and next buttons functionality
prevBtn.addEventListener('click', () => {
    alert('Previous song');
});

nextBtn.addEventListener('click', () => {
    alert('Next song');
});
