// JavaScript file
// Get DOM Elements
const editor = document.getElementById('editor');
const boldButton = document.getElementById('bold');
const italicButton = document.getElementById('italic');
const underlineButton = document.getElementById('underline');
const fontSizeSelector = document.getElementById('fontSize');
const fontColorSelector = document.getElementById('fontColor');
const saveButton = document.getElementById('save');

// Toolbar Functions
boldButton.addEventListener('click', () => {
    document.execCommand('bold');
});

italicButton.addEventListener('click', () => {
    document.execCommand('italic');
});

underlineButton.addEventListener('click', () => {
    document.execCommand('underline');
});

fontSizeSelector.addEventListener('change', (e) => {
    document.execCommand('fontSize', false, '7'); // Size 7 is a trick to apply font size
    const fontElements = document.getElementsByTagName('font');
    for (let font of fontElements) {
        if (font.size === "7") {
            font.removeAttribute('size');
            font.style.fontSize = e.target.value;
        }
    }
});

fontColorSelector.addEventListener('change', (e) => {
    document.execCommand('foreColor', false, e.target.value);
});

saveButton.addEventListener('click', () => {
    const content = editor.innerHTML;
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.html';
    a.click();
    URL.revokeObjectURL(url);
});
