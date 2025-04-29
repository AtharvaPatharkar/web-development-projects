// JavaScript file
document.querySelectorAll('.object').forEach(item => {
    item.addEventListener('click', function() {
        const animation = this.getAttribute('data-animation');
        triggerAnimation(animation);
    });
});

function triggerAnimation(animation) {
    switch (animation) {
        case 'tree':
            playSound('tree-sound.mp3');
            animateObject('tree');
            break;
        case 'bird':
            playSound('bird-sound.mp3');
            animateObject('bird');
            break;
        case 'sun':
            playSound('sun-sound.mp3');
            animateObject('sun');
            break;
        default:
            console.log('No animation defined for this object');
    }
}

function playSound(soundFile) {
    const audio = new Audio(`sounds/${soundFile}`);
    audio.play();
}

function animateObject(objectId) {
    const object = document.getElementById(objectId);
    object.style.transform = 'scale(1.5)';
    setTimeout(() => {
        object.style.transform = 'scale(1)';
    }, 500);
}
