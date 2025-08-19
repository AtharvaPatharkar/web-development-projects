// JavaScript file
// Selecting the input field and counters
const textInput = document.getElementById('text-input');
const wordCount = document.getElementById('word-count');
const charCount = document.getElementById('char-count');

// Event Listener to update counts in real-time
textInput.addEventListener('input', () => {
  const text = textInput.value.trim();

  // Word count
  const words = text.split(/\s+/).filter(word => word.length > 0);
  wordCount.textContent = words.length;

  // Character count
  charCount.textContent = text.length;
});
