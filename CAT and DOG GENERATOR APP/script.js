
function generateCat() {
    // Clear any previous cat image
    var div = document.getElementById('flex-cat-gen');
    div.innerHTML = ''; // Clear the div content

    // Create a new image and append it
    var image = document.createElement('img');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif"; // Cat image API (GIF format)
    image.alt = "Random Cat";
    image.className = "generated-image"; // Add CSS class for styling
    div.appendChild(image);
}

function generateDog() {
    // Clear any previous dog image
    var div = document.getElementById('flex-dog-gen');
    div.innerHTML = ''; // Clear the div content

    // Create a new image and append it
    var image = document.createElement('img');
    image.src = "http://thedogapi.com/api/images/get?format=src&type=gif"; // Dog image API (GIF format)
    image.alt = "Random Dog";
    image.className = "generated-image"; // Add CSS class for styling
    div.appendChild(image);
}

function restartCatGenerator() {
    // Clear the cat image when the restart button is clicked
    var div = document.getElementById('flex-cat-gen');
    div.innerHTML = ''; // Clears the images
}
