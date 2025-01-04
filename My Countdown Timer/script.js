let timer;
let minutesInput = document.getElementById("inputMinutes");
let timerDisplay = document.getElementById("timerDisplay");

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    timerDisplay.textContent = "00:00:00";
}

function restartTimer() {
    resetTimer();
    startTimer();
}

function setTimer() {
    let minutes = parseInt(minutesInput.value, 10);
    if (!isNaN(minutes) && minutes > 0) {
        let seconds = minutes * 60;
        displayTime(seconds);
        minutesInput.value = "";
        stopTimer();
    } else {
        alert("Please enter a valid positive number for minutes.");
    }
}

function updateTimer() {
    let currentTime = timerDisplay.textContent.split(":");
    let totalSeconds = parseInt(currentTime[0]) * 3600 + parseInt(currentTime[1]) * 60 + parseInt(currentTime[2]);

    if (totalSeconds > 0) {
        totalSeconds--;
        displayTime(totalSeconds);
    } else {
        stopTimer();
    }
}

function displayTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    hours = padTime(hours);
    minutes = padTime(minutes);
    remainingSeconds = padTime(remainingSeconds);

    timerDisplay.textContent = hours + ":" + minutes + ":" + remainingSeconds;
}

function padTime(time) {
    return time < 10 ? "0" + time : time;
}



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Append renderer to the background container
const backgroundContainer = document.getElementById('background');
if (backgroundContainer) {
    backgroundContainer.appendChild(renderer.domElement);
} else {
    console.error("Background container (#background) not found!");
}

// Create a cube
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation function
const animate = () => {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

// Change color every second
const changeColor = () => {
    const newColor = Math.random() * 0xffffff;
    cube.material.color.setHex(newColor);
};

// Adjust on window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start animations
try {
    setInterval(changeColor, 1000);
    animate();
} catch (error) {
    console.error("An error occurred in the animation loop:", error);
}
