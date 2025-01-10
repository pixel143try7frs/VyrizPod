const welcomeScreen = document.getElementById('welcomeScreen');
const musicPlayer = document.getElementById('musicPlayer');
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');
const albumArt = document.getElementById('albumArt');

let isPlaying = false;

// Fade in music player after welcome screen disappears
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

// Next and Previous button functionality
prevBtn.addEventListener('click', () => {
    alert('Previous song functionality not implemented yet.');
});

nextBtn.addEventListener('click', () => {
    alert('Next song functionality not implemented yet.');
});
