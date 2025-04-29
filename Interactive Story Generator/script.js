// JavaScript file
// Handle story generation based on user inputs
const form = document.getElementById('story-form');
const storyOutput = document.getElementById('story-output');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const hero = document.getElementById('hero').value;
    const quest = document.getElementById('quest').value;

    // Create the story
    const story = `Once upon a time, a brave ${hero} embarked on a quest to ${quest}. Along the way, they encountered many challenges, but with determination and courage, they overcame them and achieved their goal. The adventure was a true testament to their strength and spirit.`;

    // Display the generated story
    storyOutput.textContent = story;
});
