// Select elements
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const audioPlayer = document.getElementById('audioPlayer');
const playerContainer = document.getElementById('player-container');
const welcomeScreen = document.getElementById('welcome-screen');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
let isPlaying = false;

// Web Audio API setup
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const source = audioContext.createMediaElementSource(audioPlayer);
source.connect(analyser);
analyser.connect(audioContext.destination);
analyser.fftSize = 256; // Number of frequency bins

// Set up gradient colors
let gradientColors = ['#1db954', '#191414']; // Default colors

// Welcome Screen animation
window.onload = () => {
    setTimeout(() => {
        welcomeScreen.style.opacity = '0';
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
        }, 1000);
    }, 3000);
};

// Play/Pause functionality
playBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        resetBackgroundColor();
    } else {
        audioPlayer.play();
        audioContext.resume(); // Ensure the audio context is resumed after play
        updateBackgroundColor();
    }
    isPlaying = !isPlaying;
});

// Next and Previous functionality (you can implement song changes later)
nextBtn.addEventListener('click', () => {
    console.log("Next song");
});

prevBtn.addEventListener('click', () => {
    console.log("Previous song");
});

// Update background gradient based on audio frequency
function updateBackgroundColor() {
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);

    let average = 0;
    for (let i = 0; i < bufferLength; i++) {
        average += dataArray[i];
    }
    average = average / bufferLength;

    // Map the average frequency to a gradient effect
    let color1 = `hsl(${average % 360}, 100%, 50%)`;
    let color2 = `hsl(${(average + 120) % 360}, 100%, 50%)`;

    playerContainer.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;

    if (isPlaying) {
        requestAnimationFrame(updateBackgroundColor);
    }
}

// Reset to default color when paused
function resetBackgroundColor() {
    playerContainer.style.background = `linear-gradient(45deg, #1db954, #191414)`;
}
