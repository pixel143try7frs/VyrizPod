document.addEventListener('DOMContentLoaded', () => {
    const playlistItems = document.querySelectorAll('.song');
    const audioPlayer = document.getElementById('audio-player');
    const currentTrackDisplay = document.getElementById('current-track');

    // When a song is clicked, play it
    playlistItems.forEach(item => {
        item.addEventListener('click', () => {
            const songUrl = item.getAttribute('data-src');
            audioPlayer.src = songUrl;
            audioPlayer.play();

            const songName = item.querySelector('strong').textContent;
            currentTrackDisplay.textContent = `Now Playing: ${songName}`;
        });
    });
});
