window.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const playerContainer = document.getElementById('player-container');
    const audioPlayer = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressBar = document.getElementById('progress-bar');
    const progress = document.getElementById('progress');

    // Welcome Screen Animation
    setTimeout(() => {
        welcomeScreen.style.opacity = 0;
        welcomeScreen.style.transition = 'opacity 1s';
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            playerContainer.style.display = 'flex';
        }, 1000);
    }, 5000);

    // Play/Pause Functionality
    playBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audioPlayer.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    // Update Progress Bar
    audioPlayer.addEventListener('timeupdate', () => {
        const progressWidth = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progress.style.width = `${progressWidth}%`;
    });

    // Progress Bar Click
    progressBar.addEventListener('click', (e) => {
        const clickX = e.offsetX;
        const width = progressBar.clientWidth;
        const duration = audioPlayer.duration;

        audioPlayer.currentTime = (clickX / width) * duration;
    });

    // Progress Bar Drag
    progressBar.addEventListener('mousedown', () => {
        progressBar.addEventListener('mousemove', seek);
    });

    window.addEventListener('mouseup', () => {
        progressBar.removeEventListener('mousemove', seek);
    });

    function seek(e) {
        const clickX = e.offsetX;
        const width = progressBar.clientWidth;
        const duration = audioPlayer.duration;

        audioPlayer.currentTime = (clickX / width) * duration;
    }
});
