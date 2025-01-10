const audio = document.getElementById('audio');
const albumArt = document.getElementById('albumArt');
const songTitle = document.getElementById('songTitle');
const artist = document.getElementById('artist');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const progressBar = document.getElementById('progressBar');
const progress = document.getElementById('progress');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');

let isPlaying = false;
let isShuffled = false;
let isRepeated = false;
let currentSongIndex = 0; // Track the current song index

const songs = [ // Array of song objects
    {
        title: 'Bumpy Ride',
        artist: 'Mohombi',
        src: 'https://github.com/pixel143try7frs/VyrizPod/blob/main/Mohombi%20-%20Bumpy%20Ride.mp3?raw=true',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b273767936a59650055722099309'
    },
    {
        title: 'Song 2',
        artist: 'Artist 2',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Example
        albumArt: 'https://via.placeholder.com/150' // Placeholder
    },
    // Add more songs here
];

function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    albumArt.src = song.albumArt;
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    audio.load(); // Important for metadata to update
}

function playSong(){
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
    isPlaying=true;
}

function pauseSong(){
    audio.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
    isPlaying=false;
}

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

audio.addEventListener('loadedmetadata', () => {
    const durationMinutes = Math.floor(audio.duration / 60);
    const durationSeconds = Math.floor(audio.duration % 60).toString().padStart(2, '0');
    durationDisplay.textContent = `${durationMinutes}:${durationSeconds}`;
});

audio.addEventListener('timeupdate', () => {
    const currentMinutes = Math.floor(audio.currentTime / 60);
    const currentSeconds = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
    currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds}`;

    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

progressBar.addEventListener('click', (e) => {
    const progressBarWidth = progressBar.clientWidth;
    const clickX = e.offsetX;
    const newTime = (clickX / progressBarWidth) * audio.duration;
    audio.currentTime = newTime;
});

shuffleBtn.addEventListener('click', () => {
    isShuffled = !isShuffled;
    shuffleBtn.classList.toggle('active');
});

repeatBtn.addEventListener('click', () => {
    isRepeated = !isRepeated;
    repeatBtn.classList.toggle('active');
    audio.loop = isRepeated; // Direct assignment is cleaner
});

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop around
    loadSong(currentSongIndex);
    playSong();

});

prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop backwards
    loadSong(currentSongIndex);
    playSong();
});

loadSong(currentSongIndex); // Load the first song initially
