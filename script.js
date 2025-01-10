document.querySelectorAll('.song').forEach(song => {
    song.addEventListener('click', function() {
        const audioPlayer = document.getElementById('audio-player');
        const songSrc = song.getAttribute('data-src');
        const songCover = song.getAttribute('data-cover');
        
        // Set the audio source
        audioPlayer.src = songSrc;
        audioPlayer.play();

        // Update Now Playing text
        document.getElementById('current-track').innerText = `Now Playing: ${song.querySelector('strong').innerText}`;

        // Display the image of the current song
        const songImage = document.getElementById('song-image');
        songImage.innerHTML = `<img src="${songCover}" alt="Song Image" style="max-width: 300px; margin-top: 20px;">`;
    });
});
