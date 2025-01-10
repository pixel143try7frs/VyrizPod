const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');

// Song data for next and previous tracks
const songs = [
    {
        title: "Duvidha",
        artist: "Lucke",
        url: "https://raw.githubusercontent.com/pixel143try7frs/VyrizPod/322e4bcd80fdff2cc7fd13347f66630e07cee582/DUVIDHA%20%20Hindi%20Rap%20Song%20%20By%20LUCKE.mp3",
        image: "https://raw.githubusercontent.com/pixel143try7frs/VyrizPod/main/Duvidha%20downloaded%20from%20SpotiSongDownloader.com_.jpg"
    },
    // Add more songs here if needed
];

// Set the first song
let currentSongIndex = 0;
audioPlayer.src = songs[currentSongIndex].url;
document.getElementById('song-title').textContent = songs[currentSongIndex].title;
document.getElementById('artist-name').textContent = songs[currentSongIndex].artist;
document.getElementById('album-art').src = songs[currentSongIndex].image;

// Audio playback functions
function playAudio() {
    audioPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseAudio() {
    audioPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function updateProgress() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progressWidth = (currentTime / duration) * 100 + '%';
    progress.style.width = progressWidth;
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex].url;
    document.getElementById('song-title').textContent = songs[currentSongIndex].title;
    document.getElementById('artist-name').textContent = songs[currentSongIndex].artist;
    document.getElementById('album-art').src = songs[currentSongIndex].image;
    playAudio();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audioPlayer.src = songs[currentSongIndex].url;
    document.getElementById('song-title').textContent = songs[currentSongIndex].title;
    document.getElementById('artist-name').textContent = songs[currentSongIndex].artist;
    document.getElementById('album-art').src = songs[currentSongIndex].image;
    playAudio();
}

// Handle drag on the progress bar
let isDragging = false;

progressBar.addEventListener('click', (event) => {
    if (!isDragging) {
        const clickPosition = event.offsetX;
        const progressBarWidth = progressBar.offsetWidth;
        const newTime = (clickPosition / progressBarWidth) * audioPlayer.duration;
        audioPlayer.currentTime = newTime;
    }
});

progressBar.addEventListener('mousedown', (event) => {
    isDragging = true;
    const clickPosition = event.offsetX;
    const progressBarWidth = progressBar.offsetWidth;
    const newTime = (clickPosition / progressBarWidth) * audioPlayer.duration;
    audioPlayer.currentTime = newTime;
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const mousePosition = event.clientX - progressBar.getBoundingClientRect().left;
        const progressBarWidth = progressBar.offsetWidth;
        const newTime = (mousePosition / progressBarWidth) * audioPlayer.duration;
        audioPlayer.currentTime = newTime;
        const progressWidth = (audioPlayer.currentTime / audioPlayer.duration) * 100 + '%';
        progress.style.width = progressWidth;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Event listeners
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
});

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

// Update the progress bar as the song plays
audioPlayer.addEventListener('timeupdate', updateProgress);
