// Song Data
const songs = [
  { title: "Song 1", src: "../audio/song1.mp3" },
  { title: "Song 2", src: "../audio/song2.mp3" },
  { title: "Song 3", src: "../audio/song3.mp3" },
];

const welcomeScreen = document.getElementById("welcome-screen");
const mainApp = document.getElementById("main-app");
const searchBar = document.getElementById("search-bar");
const songsList = document.getElementById("songs-list");
const audioPlayer = document.getElementById("audio-player");
const currentSongTitle = document.getElementById("current-song-title");

// Enter App
function enterApp() {
  welcomeScreen.classList.add("hidden");
  mainApp.classList.remove("hidden");
  searchBar.classList.remove("hidden");
  loadSongs();
}

// Load Songs
function loadSongs() {
  songsList.innerHTML = "";
  songs.forEach((song, index) => {
    const songItem = document.createElement("div");
    songItem.className = "song-item";
    songItem.textContent = song.title;
    songItem.onclick = () => playSong(index);
    songsList.appendChild(songItem);
  });
}

// Play Song
function playSong(index) {
  const song = songs[index];
  currentSongTitle.textContent = song.title;
  audioPlayer.src = song.src;
  audioPlayer.play();
}

// Search Songs
function searchSongs() {
  const query = document.getElementById("search").value.toLowerCase();
  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(query)
  );
  songsList.innerHTML = "";
  filteredSongs.forEach((song, index) => {
    const songItem = document.createElement("div");
    songItem.className = "song-item";
    songItem.textContent = song.title;
    songItem.onclick = () => playSong(index);
    songsList.appendChild(songItem);
  });
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
