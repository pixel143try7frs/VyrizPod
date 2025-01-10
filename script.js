// Get elements
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const progress = document.querySelector('.progress');
const lyricsBtn = document.getElementById('lyricsBtn');
const lyricsSection = document.getElementById('lyrics');
const lyricsContent = document.getElementById('lyrics-content');

// Lyrics Data
const lyrics = [
    { time: 2.580, text: '[संगीत]' },
    { time: 32.570, text: '[प्रशंसा]' },
    { time: 34.380, text: '[संगीत]' },
    { time: 41.760, text: 'दुख शुरू थे मेरे जन्म से पहले जन्म से' },
    { time: 44.079, text: 'पहले मेरी मौत इंतजार में कैसे कहूं' },
    { time: 46.079, text: 'कहानियां अब सुनो पूरी लंबी कतार में जन्म' },
    // Add all the remaining lyrics with their corresponding time
    { time: 59.440, text: 'मिली मुझे भेंट में मामा से मिला उपहार ये' },
    { time: 102.440, text: 'मेरे मात पिता लाचार थे छह भाइयों को मारा' },
    // Continue with all lyrics...
];

// Play/Pause functionality
function playAudio() {
    audioPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseAudio() {
    audioPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
});

// Lyrics Display functionality
lyricsBtn.addEventListener('click', () => {
    if (lyricsSection.style.display === 'block') {
        lyricsSection.style.display = 'none';
        lyricsBtn.textContent = 'Show Lyrics';
    } else {
        lyricsSection.style.display = 'block';
        lyricsBtn.textContent = 'Hide Lyrics';
        displayLyrics();
    }
});

// Display Lyrics based on audio time
function displayLyrics() {
    const currentTime = audioPlayer.currentTime;
    const lyric = lyrics.find((lyric) => currentTime >= lyric.time);
    if (lyric) {
        lyricsContent.innerHTML = lyric.text;
    }
}

// Update progress bar
function updateProgress() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progressWidth = (currentTime / duration) * 100 + '%';
    progress.style.width = progressWidth;
}

// Event listeners for audio
audioPlayer.addEventListener('timeupdate', updateProgress);

// Show the player after 5 seconds
setTimeout(() => {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('player-container').style.display = 'block';
}, 5000);
