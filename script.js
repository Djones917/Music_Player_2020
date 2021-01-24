const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
    {
        name: 'jacinto-1',
        displayName: 'Electric Chill',
        artist: 'Jacinto Design'
    },
    {
        name: 'jacinto-2',
        displayName: 'Seven Nation',
        artist: 'Jacinto Design'
    },
    {
        name: 'jacinto-3',
        displayName: 'Good Night',
        artist: 'Jacinto Design'
    },
    {
        name: 'metric-1',
        displayName: 'Front Row',
        artist: 'Jacinto Design'
    }
];

// Check if playing
let isPlaying = false;

// Play Song
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

// Pause Song
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

// Play Or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// Prev Song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
       songIndex = songs.length - 1;
    }    
    loadSong(songs[songIndex]);
    playSong();
}

// Next Song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }    
    loadSong(songs[songIndex]);
    playSong();
}


// On Load - Select First Song
loadSong(songs[songIndex]);

// Update Progress bar
function updateProgressBar(e) {
    if (isPlaying) {
       const { duration, currentTime } = e.srcElement;
       console.log(duration, currentTime);
       const progressPercent = (currentTime / duration) * 100;
       progress.style.width = `${progressPercent}%`;
       // Calculate display for duration
       const durationMinutes = duration / 60;
    }
}

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);