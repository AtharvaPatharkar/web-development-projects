// JavaScript file

const canvas = document.getElementById('whiteboard');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let brushSize = 5;
let brushColor = '#000000';
let isErasing = false;

// Initialize canvas drawing context
canvas.addEventListener('mousedown', () => (isDrawing = true));
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
canvas.addEventListener('mousemove', draw);

// Draw on canvas
function draw(event) {
    if (!isDrawing) return;

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = isErasing ? '#ffffff' : brushColor;

    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}

// Change brush size
const brushSizeInput = document.getElementById('brush-size');
brushSizeInput.addEventListener('input', (event) => {
    brushSize = event.target.value;
    console.log(`Brush size updated to: ${brushSize}`);
});

// Change brush color
const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('input', (event) => {
    brushColor = event.target.value;
    isErasing = false; // Disable erasing mode when color is selected
    console.log(`Brush color updated to: ${brushColor}`);
});

// Erase mode
const eraseButton = document.getElementById('erase');
eraseButton.addEventListener('click', () => {
    isErasing = true;
    console.log('Eraser activated');
});

// Draw mode
const drawButton = document.getElementById('draw');
drawButton.addEventListener('click', () => {
    isErasing = false;
    console.log('Draw mode activated');
});

// Clear canvas
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log('Canvas cleared');
});

// Save canvas as an image
const saveButton = document.getElementById('save');
saveButton.addEventListener('click', () => {
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'whiteboard.png';
    link.click();
    console.log('Canvas saved as an image');
});
