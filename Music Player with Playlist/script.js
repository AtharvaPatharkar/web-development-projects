// JavaScript file
// Array of songs (can be replaced with actual file URLs)
const songs = [
    'song1.mp3',
    'song2.mp3',
    'song3.mp3'
  ];
  
  let currentSongIndex = 0;
  const audioElement = document.getElementById('audio');
  const audioSource = document.getElementById('audio-source');
  
  // Play or pause the music
  function togglePlay() {
    if (audioElement.paused) {
      audioElement.play();
      document.getElementById('play-pause').innerText = '⏸️';
    } else {
      audioElement.pause();
      document.getElementById('play-pause').innerText = '▶️';
    }
  }
  
  // Change to the next or previous song
  function changeSong(direction) {
    currentSongIndex = (currentSongIndex + direction + songs.length) % songs.length;
    updateSong();
  }
  
  // Change to a specific song
  function changeSongTo(index) {
    currentSongIndex = index;
    updateSong();
  }
  
  // Update the audio source and play the song
  function updateSong() {
    audioSource.src = songs[currentSongIndex];
    audioElement.load();
    audioElement.play();
    document.getElementById('play-pause').innerText = '⏸️';
    highlightCurrentSong();
  }
  
  // Set the volume
  function setVolume(volume) {
    audioElement.volume = volume;
  }
  
  // Highlight the current song in the playlist
  function highlightCurrentSong() {
    const playlistItems = document.querySelectorAll('.playlist li');
    playlistItems.forEach((item, index) => {
      item.style.backgroundColor = (index === currentSongIndex) ? 'rgba(255, 255, 255, 0.2)' : 'transparent';
    });
  }
  
  // Initialize the playlist
  document.addEventListener('DOMContentLoaded', function() {
    highlightCurrentSong();
  });
  