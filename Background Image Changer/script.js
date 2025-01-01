// JavaScript file
// Elements
const imageInput = document.getElementById('imageInput');
const positionX = document.getElementById('positionX');
const positionY = document.getElementById('positionY');
const size = document.getElementById('size');
const imageInfo = document.getElementById('imageInfo');

// Event Listener for Image Upload
imageInput.addEventListener('change', handleImageUpload);

// Event Listeners for Adjusting Image Settings
positionX.addEventListener('input', updateBackground);
positionY.addEventListener('input', updateBackground);
size.addEventListener('input', updateBackground);

// Function to handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;
            document.body.style.backgroundImage = `url(${imageUrl})`;
            imageInfo.textContent = `Image selected: ${file.name}`;
            updateBackground();
        };
        reader.readAsDataURL(file);
    }
}

// Function to update the background settings based on user input
function updateBackground() {
    const xPos = positionX.value;
    const yPos = positionY.value;
    const imageSize = size.value;

    document.body.style.backgroundPosition = `${xPos}% ${yPos}%`;
    document.body.style.backgroundSize = `${imageSize}%`;
}
