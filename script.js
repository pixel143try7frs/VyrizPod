// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const welcomeScreen = document.getElementById('welcome-screen');
  const enterBtn = document.getElementById('enter-btn');
  const siteHeader = document.querySelector('.site-header');
  const mainContent = document.querySelector('.main-content');
  const siteFooter = document.querySelector('.site-footer');

  enterBtn.addEventListener('click', () => {
    // Animate welcome screen fade out
    welcomeScreen.classList.add('fade-out');
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
      // Show main content
      siteHeader.classList.remove('hidden');
      mainContent.classList.remove('hidden');
      siteFooter.classList.remove('hidden');
      animateMainContent();
    }, 1000);
  });

  // Animate main content elements
  function animateMainContent() {
    siteHeader.style.opacity = 0;
    mainContent.style.opacity = 0;
    siteFooter.style.opacity = 0;
    fadeIn(siteHeader, 300);
    setTimeout(() => fadeIn(mainContent, 600), 300);
    setTimeout(() => fadeIn(siteFooter, 900), 900);
  }

  function fadeIn(element, duration) {
    let op = 0;
    element.style.display = 'block';
    const increment = 50 / duration;
    const timer = setInterval(() => {
      if (op >= 1) clearInterval(timer);
      element.style.opacity = op;
      op += increment;
    }, 50);
  }

  // SONGS SECTION
  // Add your GitHub raw URLs for songs here along with a display title
  const songs = [
    {
      title: "Sample Song One",
      url: "https://raw.githubusercontent.com/yourusername/yourrepo/main/songs/song1.mp3"
    },
    {
      title: "Sample Song Two",
      url: "https://raw.githubusercontent.com/yourusername/yourrepo/main/songs/song2.mp3"
    }
    // Add more songs here
  ];

  const songsList = document.getElementById('songs-list');

  // Function to create song cards dynamically
  function displaySongs() {
    if(songs.length === 0) {
      songsList.innerHTML = "<p>No songs available yet. Upload to GitHub and add URLs in script.js!</p>";
      return;
    }

    songsList.innerHTML = ''; // Clear existing

    songs.forEach(song => {
      const card = document.createElement('div');
      card.className = 'song-card';

      const title = document.createElement('div');
      title.className = 'song-title';
      title.textContent = song.title;

      const audio = document.createElement('audio');
      audio.className = 'song-audio';
      audio.controls = true;
      audio.src = song.url;

      card.appendChild(title);
      card.appendChild(audio);

      songsList.appendChild(card);
    });
  }

  displaySongs();
});

