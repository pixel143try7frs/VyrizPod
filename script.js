// Show the welcome screen for 5 seconds, then hide it and show the player
window.onload = function() {
    setTimeout(() => {
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('player-container').style.display = 'block';
    }, 5000);
};

// Play/Pause functionality
const playBtn = document.getElementById('playBtn');
const audioPlayer = document.getElementById('audioPlayer');

playBtn.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audioPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Toggle lyrics visibility
const lyricsBtn = document.getElementById('lyricsBtn');
const lyricsDiv = document.getElementById('lyrics');

lyricsBtn.addEventListener('click', function() {
    if (lyricsDiv.style.display === 'none') {
        lyricsDiv.style.display = 'block';
        lyricsBtn.innerText = 'Hide Lyrics';
    } else {
        lyricsDiv.style.display = 'none';
        lyricsBtn.innerText = 'Show Lyrics';
    }
});

// Next/Previous buttons functionality (Can be expanded)
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', function() {
    // You can add logic to skip to the next song here
    console.log('Next song');
});

prevBtn.addEventListener('click', function() {
    // You can add logic to go to the previous song here
    console.log('Previous song');
});
