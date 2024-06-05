const audio = document.getElementById('background-music');

function playAudio() {
    audio.play().then(() => {
        console.log("Audio is playing");
    }).catch((error) => {
        console.log("Autoplay was prevented. Triggered play after user interaction.");
    });
}

// Adding an event listener to play audio on user interaction
document.addEventListener('click', function () {
    playAudio();
}, {once: true});

// Optionally, you can add more event listeners for different types of interactions
document.addEventListener('keydown', function () {
    playAudio();
}, {once: true});

