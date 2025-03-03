// JavaScript file
// Selecting elements
const imageInput = document.getElementById('image-input');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const resizeButton = document.getElementById('resize-btn');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const downloadLink = document.getElementById('download-link');

let image = new Image();

// Function to handle image upload
imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (readerEvent) => {
            image.onload = () => {
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image, 0, 0);
            };
            image.src = readerEvent.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Function to resize the image
resizeButton.addEventListener('click', () => {
    const newWidth = parseInt(widthInput.value);
    const newHeight = parseInt(heightInput.value);

    if (isNaN(newWidth) || isNaN(newHeight)) {
        alert("Please enter valid dimensions!");
        return;
    }

    canvas.width = newWidth;
    canvas.height = newHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, newWidth, newHeight);

    // Set up the download link
    downloadLink.href = canvas.toDataURL('image/png');
});

// Prevent download link from opening immediately
downloadLink.addEventListener('click', (e) => {
    if (!canvas.toDataURL('image/png')) {
        e.preventDefault();
        alert("Resize the image first!");
    }
});
