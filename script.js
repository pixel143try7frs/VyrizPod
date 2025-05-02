const fileInput = document.getElementById('fileInput');
const playlist = document.getElementById('playlist');
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const nowPlaying = document.getElementById('nowPlaying');

let tracks = [];
let currentIndex = -1;
let isPlaying = false;
let playBtnAnimationTimeout = null;

fileInput.addEventListener('change', (e) => {
  const files = Array.from(e.target.files);
  if (files.length === 0) return;

  // Clean up old URLs
  tracks.forEach(track => URL.revokeObjectURL(track.url));
  tracks = [];
  playlist.innerHTML = '';
  currentIndex = -1;
  isPlaying = false;
  audio.pause();
  audio.src = '';
  updatePlayPauseButton();
  updateNowPlaying();

  files.forEach((file, index) => {
    if (!file.type.startsWith('audio/')) return;
    const track = {
      name: file.name,
      url: URL.createObjectURL(file)
    };
    tracks.push(track);

    const li = document.createElement('li');
    li.textContent = track.name;
    li.dataset.index = index;
    li.addEventListener('click', () => {
      playTrack(index);
    });
    playlist.appendChild(li);
  });

  if (tracks.length > 0) {
    playTrack(0);
  }
});

function updatePlayPauseButton() {
  playPauseBtn.textContent = isPlaying ? '⏸️' : '▶️';
  if (isPlaying) {
    // Animate bounce on play button when playing
    playPauseBtn.classList.add('playing-bounce');
    if (playBtnAnimationTimeout) clearTimeout(playBtnAnimationTimeout);
    playBtnAnimationTimeout = setTimeout(() => {
      playPauseBtn.classList.remove('playing-bounce');
    }, 600);
  } else {
    playPauseBtn.classList.remove('playing-bounce');
  }
}

function updateNowPlaying() {
  if (currentIndex >= 0 && tracks[currentIndex]) {
    nowPlaying.textContent = `Now playing: ${tracks[currentIndex].name}`;

    // If text is longer than container, add marquee animation
    if (nowPlaying.scrollWidth > nowPlaying.clientWidth) {
      nowPlaying.classList.add('scrolling');
    } else {
      nowPlaying.classList.remove('scrolling');
    }
  } else {
    nowPlaying.textContent = 'No track playing';
    nowPlaying.classList.remove('scrolling');
  }
  updatePlaylistHighlight();
}

function updatePlaylistHighlight() {
  const lis = playlist.querySelectorAll('li');
  lis.forEach(li => {
    li.classList.remove('active');
  });
  if (currentIndex >= 0) {
    const currentLi = playlist.querySelector(`li[data-index="${currentIndex}"]`);
    if (currentLi) {
      currentLi.classList.add('active');
    }
  }
}

function playTrack(index) {
  if (index < 0 || index >= tracks.length) return;
  currentIndex = index;
  audio.src = tracks[index].url;
  audio.play();
  isPlaying = true;
  updatePlayPauseButton();
  updateNowPlaying();
}

playPauseBtn.addEventListener('click', () => {
  if (!audio.src) {
    if (tracks.length > 0) {
      playTrack(0);
    }
    return;
  }
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
});

prevBtn.addEventListener('click', () => {
  if (tracks.length === 0) return;
  let newIndex = currentIndex - 1;
  if (newIndex < 0) newIndex = tracks.length - 1;
  playTrack(newIndex);
});

nextBtn.addEventListener('click', () => {
  if (tracks.length === 0) return;
  let newIndex = currentIndex + 1;
  if (newIndex >= tracks.length) newIndex = 0;
  playTrack(newIndex);
});

audio.addEventListener('play', () => {
  isPlaying = true;
  updatePlayPauseButton();
});

audio.addEventListener('pause', () => {
  isPlaying = false;
  updatePlayPauseButton();
});

audio.addEventListener('ended', () => {
  nextBtn.click();
});
