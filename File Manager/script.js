// JavaScript file
// Elements
const fileUpload = document.getElementById('fileUpload');
const uploadBtn = document.getElementById('uploadBtn');
const filesContainer = document.getElementById('filesContainer');

// Event Listener: Upload Files
uploadBtn.addEventListener('click', () => {
    const files = Array.from(fileUpload.files);

    if (files.length === 0) {
        alert('Please select files to upload.');
        return;
    }

    files.forEach((file) => {
        addFileToList(file.name);
    });

    fileUpload.value = ''; // Clear input
});

// Add File to List
function addFileToList(fileName) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${fileName}</span>
        <button onclick="removeFile(this)">Delete</button>
    `;
    filesContainer.appendChild(li);
}

// Remove File from List
function removeFile(button) {
    const li = button.parentElement;
    filesContainer.removeChild(li);
}
