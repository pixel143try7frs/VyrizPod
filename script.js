const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const audioVisualizer = document.getElementById('audio-visualizer');
const cd = document.querySelector('.cd');

// Play and Pause functionality
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

// Audio visualizer
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const source = audioContext.createMediaElementSource(audioPlayer);
source.connect(analyser);
analyser.connect(audioContext.destination);
analyser.fftSize = 256;

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

function drawVisualizer() {
    analyser.getByteFrequencyData(dataArray);
    const canvasCtx = audioVisualizer.getContext('2d');
    canvasCtx.clearRect(0, 0, audioVisualizer.width, audioVisualizer.height);
    const barWidth = audioVisualizer.width / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];
        canvasCtx.fillStyle = '#1db954';
        canvasCtx.fillRect(x, audioVisualizer.height - barHeight, barWidth, barHeight);
        x += barWidth;
    }

    requestAnimationFrame(drawVisualizer);
}

drawVisualizer();

// To start visualizer after audio is loaded
audioPlayer.addEventListener('play', () => {
    audioContext.resume().then(() => {
        drawVisualizer();
    });
});
