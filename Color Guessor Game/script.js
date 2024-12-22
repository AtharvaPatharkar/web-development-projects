// DOM Elements
const rgbSpan = document.getElementById("rgbspan");
const boxes = document.querySelectorAll(".box");
const playAgainButton = document.getElementById("playAgain");
const statusDisplay = document.querySelector(".status");
const easyButton = document.getElementById("easyBtn");
const hardButton = document.getElementById("hardBtn");

// Variables
let numBoxes = 6;
let colors = [];
let pickedColor;

// Event Listeners
playAgainButton.addEventListener("click", initializeGame);
easyButton.addEventListener("click", () => setDifficulty(3));
hardButton.addEventListener("click", () => setDifficulty(6));

// Functions
function initializeGame() {
    colors = generateRandomColors(numBoxes);
    pickedColor = pickColor();
    rgbSpan.textContent = pickedColor;
    statusDisplay.textContent = "";
    setupBoxes();
}

function setDifficulty(level) {
    numBoxes = level;
    easyButton.classList.toggle("active", level === 3);
    hardButton.classList.toggle("active", level === 6);
    initializeGame();
}

function setupBoxes() {
    boxes.forEach((box, index) => {
        if (index < numBoxes) {
            box.style.backgroundColor = colors[index];
            box.classList.remove("hidden");
            box.addEventListener("click", handleBoxClick);
        } else {
            box.classList.add("hidden");
        }
    });
}

function handleBoxClick() {
    const clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
        statusDisplay.textContent = "Correct!";
        changeColors(pickedColor);
    } else {
        this.style.backgroundColor = "#f4f4f9";
        statusDisplay.textContent = "Try Again!";
    }
}

function changeColors(color) {
    boxes.forEach((box) => {
        box.style.backgroundColor = color;
    });
}

function pickColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function generateRandomColors(num) {
    const colors = [];
    for (let i = 0; i < num; i++) {
        colors.push(randomRGB());
    }
    return colors;
}

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Initialize Game
initializeGame();
