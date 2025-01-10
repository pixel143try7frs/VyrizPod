// Get reference to the audio player and the 'Now Playing' text
const audioPlayer = document.getElementById('audio-player');
const nowPlaying = document.getElementById('current-track');

// Add event listeners to each song in the playlist
document.querySelectorAll('.song').forEach(song => {
    song.addEventListener('click', () => {
        // Get the source (path) of the audio file and the song details
        const trackSrc = song.getAttribute('data-src');
        const trackName = song.querySelector('strong').textContent;
        const trackArtist = song.querySelector('p').textContent;

        // Update the "Now Playing" text with the current song's name and artist
        nowPlaying.textContent = `${trackName} by ${trackArtist}`;

        // Set the source of the audio player to the selected track
        audioPlayer.src = trackSrc;

        // Play the selected track
        audioPlayer.play().catch(error => {
            console.error('Error playing track:', error);
            alert('Failed to play the track. Please try again.');
        });
    });
});
