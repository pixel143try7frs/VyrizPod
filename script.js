const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const albumArt = document.getElementById('album-art');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const songList = document.getElementById('song-list');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const mainContent = document.getElementById('main-content');
const welcomeScreen = document.getElementById('welcome-screen');

const songs = [
    {
        title: 'Duvidha',
        artist: 'Lucke',
        src: 'https://raw.githubusercontent.com/pixel143try7frs/VyrizPod/322e4bcd80fdff2cc7fd13347f66630e07cee582/DUVIDHA%20%20Hindi%20Rap%20Song%20%20By%20LUCKE.mp3',
        albumArt: 'https://github.com/pixel143try7frs/VyrizPod/blob/main/Duvidha%20downloaded%20from%20SpotiSongDownloader.com_.jpg?raw=true',
        image: 'https://github.com/pixel143try7frs/VyrizPod/blob/main/Duvidha%20downloaded%20from%20SpotiSongDownloader.com_.jpg?raw=true'
    },
    {
        title: 'Bumpy Ride',
        artist: 'Mohombi',
        src: 'https://github.com/pixel143try7frs/VyrizPod/blob/main/Mohombi%20-%20Bumpy%20Ride.mp3?raw=true',
        albumArt: 'https://github.com/pixel143try7frs/VyrizPod/blob/main/Bumpy%20Ride%20downloaded%20from%20SpotiSongDownloader.com_.jpg?raw=true',
        image: 'https://github.com/pixel143try7frs/VyrizPod/blob/main/Bumpy%20Ride%20downloaded%20from%20SpotiSongDownloader.com_.jpg?raw=true'
    },
    {
        title: 'Song 3',
        artist: 'Artist 3',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        albumArt: 'https://via.placeholder.com/300',
        image: 'https://via.placeholder.com/50'
    },
    {
        title: 'Song 4',
        artist: 'Artist 4',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
        albumArt: 'https://via.placeholder.com/300',
        image: 'https://via.placeholder.com/50'
    }
];

let currentSongIndex = 0;

function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    albumArt.src = song.albumArt;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
}

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

function setProgress(e) {
    const width = progressBar.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (clickX / width) * duration;
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playAudio();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playAudio();
}

function displaySongs(songsToDisplay) {
    songList.innerHTML = '';
    songsToDisplay.forEach((song, index) => {
        const songDiv = document.createElement('div');
        songDiv.classList.add('song-item');
        songDiv.innerHTML = `<img src="${song.image}" alt="${song.title} Album Art"><h3>${song.title}</h3><p>${song.artist}</p>`;
        songDiv.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            playAudio();
        });
        songList.appendChild(songDiv);
    });
}

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredSongs = songs.filter(song =>
        song.title.toLowerCase().includes(searchTerm) ||
        song.artist.toLowerCase().includes(searchTerm)
    );
    displaySongs(filteredSongs);
});

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
progressBar.addEventListener('click', setProgress);

window.onload = function () {
    setTimeout(() => {
        welcomeScreen.style.opacity = '0';
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            mainContent.style.display = 'block';
            displaySongs(songs);
        }, 1000);
    }, 3000);
    loadSong(currentSongIndex);
};
