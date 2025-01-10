// Elements
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const albumArt = document.getElementById('album-art');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const lyricsContainer = document.getElementById('lyrics-container'); // Add this element for lyrics

// Songs Array
const songs = [
    {
        title: 'Duvidha',
        artist: 'Lucke',
        src: 'https://raw.githubusercontent.com/pixel143try7frs/VyrizPod/322e4bcd80fdff2cc7fd13347f66630e07cee582/DUVIDHA%20%20Hindi%20Rap%20Song%20%20By%20LUCKE.mp3',
        albumArt: 'https://github.com/pixel143try7frs/VyrizPod/blob/main/Duvidha%20downloaded%20from%20SpotiSongDownloader.com_.jpg?raw=true',
        lyrics: [] // No lyrics for Duvidha
    },
    {
        title: 'Bumpy Ride',
        artist: 'Mohombi',
        src: 'https://github.com/pixel143try7frs/VyrizPod/blob/main/Mohombi%20-%20Bumpy%20Ride.mp3?raw=true',
        albumArt: 'https://github.com/pixel143try7frs/VyrizPod/blob/main/Bumpy%20Ride%20downloaded%20from%20SpotiSongDownloader.com_.jpg?raw=true',
        lyrics: [
            { time: 21.1, text: 'I wanna boom bang bang with your body yo' },
            { time: 22.9, text: 'We\'re gonna rough it up before we take it slow' },
            { time: 25.2, text: 'Girl lemme rock you rock you like a rodeo' },
            { time: 27.7, text: '(It\'s gonna be a bumpy ride)' },
            { time: 30.0, text: 'I wanna boom bang bang with your body yo' },
            { time: 32.0, text: 'We\'re gonna rough it up before we take it slow' },
            { time: 34.3, text: 'Girl lemme rock you rock you like a rodeo' },
            { time: 36.6, text: '(It\'s gonna be a bumpy ride)' },
            { time: 39.1, text: 'I wanna boom bang bang with your body yo' },
            { time: 41.1, text: 'We\'re gonna rough it up before we take it slow' },
            { time: 43.4, text: 'Girl lemme rock you rock you like a rodeo' },
            { time: 45.6, text: '(It\'s gonna be a bumpy ride)' },
            { time: 48.2, text: 'I\'m gonna pull you over, pull you under' },
            { time: 50.7, text: 'Make your body surrender to mine' },
            { time: 56.9, text: 'Girl you can make me suffer, do whatever' },
            { time: 59.8, text: 'Cause I know you\'re one of a kind' },
            { time: 1.06, text: 'Tell me who can love you, nobody' },
            { time: 1.09, text: 'Hold you, nobody' },
            { time: 1.11, text: 'Make your body wind, like me' },
            { time: 1.13, text: 'You will never find someone like me' },
            { time: 1.15, text: 'Who can love you, nobody' },
            { time: 1.18, text: 'Hold you, nobody' },
            { time: 1.20, text: 'Make your body wind, like me' },
            { time: 1.22, text: 'You will never find someone like me' },
            { time: 1.25, text: 'I wanna boom bang bang with your body yo' }
            // Add all other lyrics timestamps here
        ]
    }
];

let currentSongIndex = 0;

// Load a song
function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    albumArt.src = song.albumArt;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;

    // Load lyrics
    loadLyrics(song.lyrics);
}

// Display lyrics
function loadLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Clear existing lyrics
    lyrics.forEach(lyric => {
        const lyricElement = document.createElement('p');
        lyricElement.classList.add('lyric');
        lyricElement.dataset.time = lyric.time; // Store timestamp as data attribute
        lyricElement.textContent = lyric.text;
        lyricsContainer.appendChild(lyricElement);
    });
}

// Play/Pause functionality
function playAudio() {
    audioPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseAudio() {
    audioPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

// Update progress bar and lyrics
function updateProgress() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progressWidth = (currentTime / duration) * 100 + '%';
    progress.style.width = progressWidth;

    // Highlight current lyric based on time
    const lyrics = document.querySelectorAll('.lyric');
    lyrics.forEach(lyric => {
        const lyricTime = parseFloat(lyric.dataset.time);
        if (currentTime >= lyricTime - 0.5 && currentTime < lyricTime + 0.5) {
            lyric.classList.add('highlight');
        } else {
            lyric.classList.remove('highlight');
        }
    });
}

// Set progress when user clicks on the progress bar
function setProgress(e) {
    const width = progressBar.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;

    audioPlayer.currentTime = (clickX / width) * duration;
}

// Previous Song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playAudio();
}

// Next Song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playAudio();
}

// Event listeners
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audioPlayer.addEventListener('timeupdate', updateProgress);

// Add event listener for progress bar interaction
progressBar.addEventListener('click', setProgress);

// Load the first song when the page loads
window.onload = function () {
    loadSong(currentSongIndex);

    // Welcome screen transition
    setTimeout(() => {
        document.getElementById('welcome-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('welcome-screen').style.display = 'none';
        }, 1000);
    }, 3000);
};
