// Open the lightbox
function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

// Close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Show the clicked image in the lightbox
function currentSlide(index) {
    const images = document.querySelectorAll('.gallery-image');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = images[index - 1].src;
}
