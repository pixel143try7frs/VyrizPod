// Elements
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const audioPlayer = document.getElementById('audioPlayer');
const progress = document.getElementById('progress');
const songTitle = document.getElementById('song-title');
const showLyricsBtn = document.getElementById('showLyricsBtn');
const lyricsContainer = document.getElementById('lyrics');
const welcomeScreen = document.getElementById('welcome-screen');

// Lyrics
const lyrics = [
    { time: 0, text: "[संगीत]" },
    { time: 5, text: "दुख शुरू थे मेरे जन्म से पहले जन्म से" },
    { time: 15, text: "पहले मेरी मौत इंतजार में कैसे कहूं" },
    { time: 25, text: "कहानियां अब सुनो पूरी लंबी कतार में जन्म" },
    // Add more lyrics here...
];

let isPlaying = false;
let currentIndex = 0;

// Welcome Screen Fade Out
setTimeout(() => {
    welcomeScreen.classList.add('fade-out');
}, 5000);

// Play / Pause Button
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
    
    // Sync lyrics with time
    lyrics.forEach((lyric, index) => {
        if (audioPlayer.currentTime >= lyric.time && currentIndex !== index) {
            currentIndex = index;
            document.getElementById('lyrics-text').innerText = lyric.text;
        }
    });
});

// Show Lyrics Button
showLyricsBtn.addEventListener('click', () => {
    lyricsContainer.style.display = 'block';
});

// Next / Previous Button Functionality (for demo, just toggles the song)
nextBtn.addEventListener('click', () => {
    audioPlayer.currentTime += 10;
});

prevBtn.addEventListener('click', () => {
    audioPlayer.currentTime -= 10;
});

