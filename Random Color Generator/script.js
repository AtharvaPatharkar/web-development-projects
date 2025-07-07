// JavaScript file
// Function to generate a random integer between a given range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random color in RGB format
function generateRandomColor() {
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to convert RGB to Hex format
function rgbToHex(rgb) {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}`;
}

// Handle the "Generate Random Color" button click
document.getElementById('generate-btn').addEventListener('click', function () {
    const rgb = generateRandomColor();
    const hex = rgbToHex(rgb);

    // Display the generated color and its codes
    document.getElementById('color-display').style.backgroundColor = rgb;
    document.getElementById('rgb-value').textContent = `RGB: ${rgb.slice(4, -1)}`;
    document.getElementById('hex-value').textContent = `Hex: ${hex}`;
});
