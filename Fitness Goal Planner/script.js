// JavaScript file
// Handle fitness goal submissions and progress tracking
const form = document.getElementById('goal-form');
const progressLog = document.getElementById('progress-log');

// Event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const goalType = document.getElementById('goal-type').value;
    const target = document.getElementById('target').value;
    const duration = document.getElementById('duration').value;

    // Create a new list item for progress log
    const listItem = document.createElement('li');
    listItem.textContent = `Goal: ${goalType}, Target: ${target}, Duration: ${duration} days`;

    // Add the new item to the log
    progressLog.appendChild(listItem);

    // Reset the form
    form.reset();
});
