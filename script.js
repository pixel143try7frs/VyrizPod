const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const lyricsContainer = document.getElementById('lyrics-container');
const lyricsBtn = document.getElementById('lyricsBtn');

let isPlaying = false;

// Full Duvidha Lyrics with Timestamps
const lyricsData = [
    { time: 2.58, text: "[संगीत]" },
    { time: 32.57, text: "[प्रशंसा]" },
    { time: 41.76, text: "दुख शुरू थे मेरे जन्म से पहले जन्म से" },
    { time: 44.08, text: "पहले मेरी मौत इंतजार में कैसे कहूं" },
    { time: 46.08, text: "कहानियां अब सुनो पूरी लंबी कतार में जन्म" },
    { time: 49.04, text: "हुआ मेरा जेल में मां बाप का चेहरा मैंने" },
    { time: 51.28, text: "देखा नहीं हां रोती रही मां देव की जुदाई" },
    { time: 54.04, text: "मिली मुझे भेंट में मामा से मिला उपहार ये" },
    { time: 56.84, text: "मेरे मात पिता लाचार थे छह भाइयों को मारा" },
    { time: 59.44, text: "सामने आंसू थे मां की आंखों में वैसे तो" },
    { time: 62.44, text: "था भगवान में अजीब सा ये खेल है मेरे" },
    { time: 65.36, text: "मात-पिता मेरे देवता वो दोनों ही थे जेल" },
    { time: 68.2, text: "में कर्तव्य मिले मुझे जन्म से बचपन बीता" },
    { time: 71.88, text: "संघर्ष में जिस्मा ने पाला पोसा मुझे उससे" },
    { time: 74.36, text: "भी हो गया दूर में विधि का क्या विधान था" },
    { time: 77.2, text: "क्या लेख लिखा था कर्मों का तुम ठीक से रो" },
    { time: 80.36, text: "तो लेते हो मैं रो भी ना पाया चैन से कहने" },
    // Add the remaining lyrics here
];

// Populate lyrics on the page
lyricsData.forEach((line) => {
    const div = document.createElement('div');
    div.textContent = line.text;
    div.setAttribute('data-time', line.time);
    lyricsContainer.appendChild(div);
});

// Toggle Play/Pause functionality
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

// Update Progress Bar as the song plays
audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progressWidth = (currentTime / duration) * 100;
    progress.style.width = progressWidth + '%';

    // Sync lyrics with the audio time
    const currentLyric = lyricsData.find((line) => currentTime >= line.time);
    if (currentLyric) {
        const lyricsDivs = document.querySelectorAll('#lyrics-container div');
        lyricsDivs.forEach((div) => {
            if (parseFloat(div.getAttribute('data-time')) === currentLyric.time) {
                div.classList.add('active');
            } else {
                div.classList.remove('active');
            }
        });
    }
});

// Allow user to click on the progress bar to seek to a specific time
progressBar.addEventListener('click', (e) => {
    const barWidth = progressBar.offsetWidth;
    const clickPosition = e.offsetX;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (clickPosition / barWidth) * duration;
});

// Lyrics Toggle
lyricsBtn.addEventListener('click', () => {
    lyricsContainer.classList.toggle('visible');
    if (lyricsContainer.classList.contains('visible')) {
        lyricsBtn.textContent = 'Hide Lyrics';
    } else {
        lyricsBtn.textContent = 'Show Lyrics';
    }
});

// Next button functionality
nextBtn.addEventListener('click', () => {
    alert('Next song functionality to be added.');
});

// Previous button functionality
prevBtn.addEventListener('click', () => {
    alert('Previous song functionality to be added.');
});
