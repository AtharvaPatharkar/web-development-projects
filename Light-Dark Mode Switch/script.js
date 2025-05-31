// JavaScript file
// Select the button and the body element
const modeToggleButton = document.getElementById('mode-toggle');
const bodyElement = document.body;

// Check if the user has previously chosen a mode
if(localStorage.getItem('theme') === 'dark') {
    bodyElement.classList.add('dark-mode');
    modeToggleButton.innerHTML = 'Switch to Light Mode';
} else {
    bodyElement.classList.remove('dark-mode');
    modeToggleButton.innerHTML = 'Switch to Dark Mode';
}

// Function to toggle between light and dark mode
modeToggleButton.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
    // Change the button text based on the mode
    if (bodyElement.classList.contains('dark-mode')) {
        modeToggleButton.innerHTML = 'Switch to Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        modeToggleButton.innerHTML = 'Switch to Dark Mode';
        localStorage.removeItem('theme');
    }
});
