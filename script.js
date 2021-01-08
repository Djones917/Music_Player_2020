const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Check if playing
let isPlaying = false;

// Play Song
function playSong() {
    let isPlaying = true;
    music.play();
}

// Pause Song
function pauseSong() {
    let isPlaying = false;
    music.pause();
}

// Play Or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));