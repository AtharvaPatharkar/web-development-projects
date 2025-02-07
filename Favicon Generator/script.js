// JavaScript file
document.getElementById('generateButton').addEventListener('click', () => {
    const imageInput = document.getElementById('imageInput');
    const canvas = document.getElementById('faviconCanvas');
    const downloadLink = document.getElementById('downloadLink');

    if (imageInput.files.length === 0) {
        alert('Please upload an image file.');
        return;
    }

    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        const img = new Image();
        img.onload = () => {
            const context = canvas.getContext('2d');
            canvas.width = 64;
            canvas.height = 64;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0, canvas.width, canvas.height);

            canvas.toBlob(blob => {
                const url = URL.createObjectURL(blob);
                downloadLink.href = url;
            }, 'image/x-icon');
        };
        img.src = reader.result;
    };

    reader.readAsDataURL(file);
});
