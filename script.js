// Elements
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const audioPlayer = document.getElementById('audioPlayer');
const progress = document.getElementById('progress');
const songTitle = document.getElementById('song-title');
const welcomeScreen = document.getElementById('welcome-screen');

// Play / Pause Button
let isPlaying = false;
playBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audioPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// Update Progress Bar
audioPlayer.addEventListener('timeupdate', () => {
    const progressPercentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progress.style.width = `${progressPercentage}%`;
});

// Next / Previous Button Functionality (for demo, just toggles the song)
nextBtn.addEventListener('click', () => {
    audioPlayer.currentTime += 10;
});

prevBtn.addEventListener('click', () => {
    audioPlayer.currentTime -= 10;
});

// Welcome Screen Fade Out
setTimeout(() => {
    welcomeScreen.classList.add('fade-out');
}, 5000);
