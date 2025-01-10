const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const lyricsContainer = document.getElementById('lyrics');

// Duvidha Lyrics Data
const lyricsData = [
    { time: 2, text: "[संगीत]" },
    { time: 32.57, text: "[प्रशंसा]" },
    { time: 34.38, text: "[संगीत]" },
    { time: 41.76, text: "दुख शुरू थे मेरे जन्म से पहले जन्म से" },
    { time: 44.08, text: "पहले मेरी मौत इंतजार में कैसे कहूं" },
    { time: 46.08, text: "कहानियां अब सुनो पूरी लंबी कतार में जन्म" },
    { time: 49.04, text: "हुआ मेरा जेल में मां बाप का चेहरा मैंने" },
    { time: 51.28, text: "देखा नहीं हां रोती रही मां देव की जुदाई" },
    // Add remaining lyrics
];

// Populate lyrics on the page
lyricsData.forEach((line) => {
    const div = document.createElement('div');
    div.textContent = line.text;
    div.setAttribute('data-time', line.time);
    lyricsContainer.appendChild(div);
});

// Play/Pause Toggle
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audioPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Update Progress Bar
audioPlayer.addEventListener('timeupdate', () => {
    const progressWidth = (audioPlayer.currentTime / audioPlayer.duration) * 100 + '%';
    progress.style.width = progressWidth;

    const currentTime = audioPlayer.currentTime;
    lyricsData.forEach((line, index) => {
        const lyricDiv = lyricsContainer.children[index];
        if (line.time <= currentTime && (lyricsData[index + 1]?.time > currentTime || index === lyricsData.length - 1)) {
            document.querySelector('.lyrics .active')?.classList.remove('active');
            lyricDiv.classList.add('active');
            lyricDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});

// Seek in Progress Bar
progressBar.addEventListener('click', (e) => {
    const barWidth = progressBar.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (clickX / barWidth) * duration;
});
