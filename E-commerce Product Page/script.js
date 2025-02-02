// Add to Cart Button Event
document.getElementById('add-to-cart-btn').addEventListener('click', function () {
    alert('Product added to cart!');
});

// Add Review Functionality
const reviewForm = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviews');

reviewForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user input
    const name = document.getElementById('reviewerName').value;
    const stars = document.getElementById('reviewStars').value;
    const reviewText = document.getElementById('reviewText').value;

    // Create a new review element
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');
    reviewDiv.innerHTML = `
        <p><strong>${name}</strong> <span class="stars">${'⭐'.repeat(stars)}</span></p>
        <p>"${reviewText}"</p>
    `;

    // Append to the reviews container
    reviewsContainer.appendChild(reviewDiv);

    // Clear the form
    reviewForm.reset();
});
