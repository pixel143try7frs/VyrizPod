// Display a welcome message in the console
console.log("Welcome to VyrizPod!");

// Spotify API token
const token = 'BQDv7eCUTBTSjR12drOUwKAF7W290zgfgKTNai7FtnODDO1IK0bUy01ImLWdyiGH3H5otDNZLdB81CJBfAg3JKyCHPuPReMiK42dLVEhuHfhAoMAC6ybS4UOFY2K1F-2P1_TwK_UNi9_2Kz_UTHaaG5VWrpsqgLjsqRZCpO8SybX5FjXKQGccoS07-F2ICjI2BrFKGfpoL-yyLmUwiThEqrN2g';

// Function to fetch top artists and display them
function fetchTopArtists() {
    fetch('https://api.spotify.com/v1/me/top/artists', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const playlistDiv = document.getElementById('playlist');
        playlistDiv.innerHTML = ''; // Clear previous content
        data.items.forEach(artist => {
            const artistElement = document.createElement('div');
            artistElement.innerHTML = `<h3>${artist.name}</h3>`;
            playlistDiv.appendChild(artistElement);
        });
    })
    .catch(error => {
        console.error('Error fetching top artists:', error);
    });
}

// Call the function to fetch top artists
fetchTopArtists();
