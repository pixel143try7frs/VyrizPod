const welcomeScreen = document.getElementById('welcomeScreen');
const musicPlayer = document.getElementById('musicPlayer');
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let isPlaying = false;

// Welcome Screen Fade-Out
setTimeout(() => {
    welcomeScreen.style.display = 'none';
    musicPlayer.style.display = 'block';
}, 3000);

// Play and Pause functionality
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

// Placeholder for next/previous functionality
prevBtn.addEventListener('click', () => {
    alert('Previous song functionality not implemented yet.');
});

nextBtn.addEventListener('click', () => {
    alert('Next song functionality not implemented yet.');
});
