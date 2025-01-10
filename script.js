document.querySelectorAll('.song').forEach(song => {
    song.addEventListener('click', function() {
        const audioPlayer = document.getElementById('audio-player');
        const songSrc = song.getAttribute('data-src');
        const songCover = song.getAttribute('data-cover');
        
        // Set the audio source
        audioPlayer.src = songSrc;
        audioPlayer.play();

        // Update Now Playing text and artist
        document.getElementById('current-track').innerText = `Now Playing: ${song.querySelector('strong').innerText}`;
        document.getElementById('current-artist').innerText = song.querySelector('p').innerText;

        // Display the image of the current song
        const songImage = document.getElementById('song-image');
        songImage.innerHTML = `<img src="${songCover}" alt="Song Image">`;
        
        // Update play/pause button
        const playBtn = document.getElementById('play-btn');
        playBtn.innerText = "⏸️";  // Pause button after play starts
    });
});

document.getElementById('play-btn').addEventListener('click', () => {
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');

    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.innerText = "⏸️";  // Change to pause icon
    } else {
        audioPlayer.pause();
        playBtn.innerText = "▶️";  // Change to play icon
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    // Implement next song functionality here
});

document.getElementById('prev-btn').addEventListener('click', () => {
    // Implement previous song functionality here
});

// Handle progress bar
document.getElementById('audio-player').addEventListener('timeupdate', () => {
    const progressBar = document.getElementById('progress-bar');
    const audioPlayer = document.getElementById('audio-player');
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
});

document.getElementById('progress-bar').addEventListener('input', function() {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.currentTime = (this.value / 100) * audioPlayer.duration;
});
