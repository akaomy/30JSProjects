const enlargeKey = (keyElem) => {
    keyElem.style['font-size'] = '1.5em';
    keyElem.style['background-color'] = '#303030';
}

const playSound = (sound) => {
    let audio = new Audio(sound);
    audio.play();
}


document.addEventListener( 'keydown', (e) => {
        let keyElem = document.getElementById(e.key.toLocaleLowerCase());

        if (keyElem) {
            enlargeKey(keyElem);
        } else {
            console.log(`No element found for key: ${e.key.toLowerCase()}`);
        }

        switch (e.key) {
            case 'a':
                soundName = 'sounds/mixkit-arcade-bonus-alert-767.wav';
                playSound(soundName);
                break;
            case's':
                soundName ='sounds/mixkit-arcade-fast-game-over-233.wav';
                playSound(soundName);
                break;
            case 'd':
                soundName = 'sounds/mixkit-arcade-game-over-3068.wav';
                playSound(soundName);
                break;
            case 'f':
                soundName = 'sounds/mixkit-boy-says-car-1556.wav';
                playSound(soundName);
                break;
            case 'g':
                soundName = 'sounds/mixkit-drum-bass-hit-2294.wav';
                playSound(soundName);
                break;
            case 'h':
                soundName = 'sounds/mixkit-game-notification-wave-alarm-987.wav';
                playSound(soundName);
                break;
            case 'j':
                soundName = 'sounds/mixkit-light-saber-sword-1708.wav';
                playSound(soundName);
                break;
            case 'k':
                soundName = 'sounds/mixkit-losing-piano-2024.wav';
                playSound(soundName);
                break;
            case 'l':
                soundName = 'sounds/mixkit-pixel-chiptune-explosion-1692.wav';
                playSound(soundName);
                break;
            default:
                soundName = 'sounds/mixkit-winning-a-coin-video-game-2069.wav';
                playSound(soundName);
                break;
    
    }}
);

document.addEventListener('keyup', (e) => {
    let keyElem = document.getElementById(e.key.toLocaleLowerCase());
    keyElem.style['font-size'] = '1em';
    keyElem.style['background-color'] = 'transparent';
})
