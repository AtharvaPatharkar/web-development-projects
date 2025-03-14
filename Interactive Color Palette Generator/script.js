// JavaScript file
// Script for Interactive Color Palette Generator

const colorBoxes = document.querySelectorAll('.color-box');
const generateButton = document.getElementById('generate');
const lockButtons = document.querySelectorAll('.lock-btn');

// Generate random HEX color
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Update palette colors
function generatePalette() {
    colorBoxes.forEach((box, index) => {
        const colorCode = document.getElementById(`colorCode${index + 1}`);
        const lockButton = document.getElementById(`lock${index + 1}`);

        if (!lockButton.classList.contains('locked')) {
            const newColor = getRandomColor();
            box.style.background = newColor;
            colorCode.textContent = newColor;
        }
    });
}

// Toggle lock on color box
lockButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        button.classList.toggle('locked');
        button.textContent = button.classList.contains('locked') ? '🔓' : '🔒';
    });
});

// Add event listener to generate button
generateButton.addEventListener('click', generatePalette);

// Initial palette generation
generatePalette();
