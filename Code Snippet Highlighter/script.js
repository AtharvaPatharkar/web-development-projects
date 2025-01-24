// JavaScript file
// Get references to DOM elements
const codeEditor = document.getElementById('code-editor');
const highlightBtn = document.getElementById('highlight-btn');
const highlightedCode = document.getElementById('highlighted-code');

// Event listener for the "Highlight Code" button
highlightBtn.addEventListener('click', () => {
    const code = codeEditor.value; // Get the user's code
    highlightedCode.textContent = code; // Set the code in the output area
    Prism.highlightElement(highlightedCode); // Highlight the code using Prism.js
});
