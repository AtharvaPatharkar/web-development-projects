// JavaScript file
// Variables
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

// Function to show the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

// Function to show the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
}

// Function to update the carousel based on the current index
function updateCarousel() {
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Autoplay functionality
setInterval(nextSlide, 3000); // Slide every 3 seconds
