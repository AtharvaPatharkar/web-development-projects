// JavaScript file
// Handle fitness log submissions
const form = document.getElementById('fitness-form');
const logList = document.getElementById('log-list');

// Event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const steps = document.getElementById('steps').value;
    const calories = document.getElementById('calories').value;
    const workout = document.getElementById('workout').value;

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = `Steps: ${steps}, Calories Burned: ${calories}, Workout Duration: ${workout} mins`;

    // Add the new item to the log
    logList.appendChild(listItem);

    // Clear the form fields
    form.reset();
});
