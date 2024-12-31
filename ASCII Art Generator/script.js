// JavaScript file
const imageUpload = document.getElementById("image-upload");
const convertBtn = document.getElementById("convert-btn");
const asciiOutput = document.getElementById("ascii-output");
const downloadBtn = document.getElementById("download-btn");

const asciiChars = ['@', '#', 'S', '%', '?', '*', '+', ';', ':', ',', '.']; // ASCII characters used for the conversion

// Function to convert image to grayscale
function getImageData(image) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, image.width, image.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    return imageData;
}

// Function to convert grayscale image data to ASCII characters
function imageToAscii(imageData) {
    const asciiArt = [];
    const width = imageData.width;
    const height = imageData.height;

    for (let y = 0; y < height; y += 6) {
        let row = '';
        for (let x = 0; x < width; x += 3) {
            const pixelIndex = (y * width + x) * 4;
            const r = imageData.data[pixelIndex];
            const g = imageData.data[pixelIndex + 1];
            const b = imageData.data[pixelIndex + 2];

            // Calculate the brightness of the pixel
            const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            const char = asciiChars[Math.floor((brightness / 255) * (asciiChars.length - 1))];
            row += char;
        }
        asciiArt.push(row);
    }

    return asciiArt.join('\n');
}

// Function to handle image upload
imageUpload.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function () {
                const imageData = getImageData(img);
                const ascii = imageToAscii(imageData);
                asciiOutput.textContent = ascii;
            };
        };
        reader.readAsDataURL(file);
    }
});

// Function to convert ASCII art to a downloadable file
downloadBtn.addEventListener('click', function () {
    const asciiText = asciiOutput.textContent;
    const blob = new Blob([asciiText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ascii_art.txt';
    link.click();
});

convertBtn.addEventListener('click', function () {
    const file = imageUpload.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function () {
                const imageData = getImageData(img);
                const ascii = imageToAscii(imageData);
                asciiOutput.textContent = ascii;
            };
        };
        reader.readAsDataURL(file);
    }
});
