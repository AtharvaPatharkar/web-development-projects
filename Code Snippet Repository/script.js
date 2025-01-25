// JavaScript file
// Select DOM elements
const titleInput = document.getElementById('title');
const codeInput = document.getElementById('code');
const tagsInput = document.getElementById('tags');
const addSnippetButton = document.getElementById('add-snippet');
const searchInput = document.getElementById('search');
const snippetsContainer = document.getElementById('snippets');

// Initialize snippets array
let snippets = JSON.parse(localStorage.getItem('snippets')) || [];

// Render all snippets
function renderSnippets(filteredSnippets = snippets) {
    snippetsContainer.innerHTML = '';
    filteredSnippets.forEach((snippet, index) => {
        const snippetElement = document.createElement('div');
        snippetElement.classList.add('snippet');
        snippetElement.innerHTML = `
            <h2>${snippet.title}</h2>
            <pre>${snippet.code}</pre>
            <p class="tags">Tags: ${snippet.tags.join(', ')}</p>
            <button onclick="deleteSnippet(${index})">❌ Delete</button>
        `;
        snippetsContainer.appendChild(snippetElement);
    });
}

// Add a new snippet
addSnippetButton.addEventListener('click', () => {
    const title = titleInput.value.trim();
    const code = codeInput.value.trim();
    const tags = tagsInput.value.split(',').map(tag => tag.trim());

    if (title && code) {
        snippets.push({ title, code, tags });
        localStorage.setItem('snippets', JSON.stringify(snippets));
        renderSnippets();
        titleInput.value = '';
        codeInput.value = '';
        tagsInput.value = '';
    } else {
        alert('Please provide a title and code snippet.');
    }
});

// Search snippets
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredSnippets = snippets.filter(snippet =>
        snippet.title.toLowerCase().includes(query) ||
        snippet.tags.some(tag => tag.toLowerCase().includes(query))
    );
    renderSnippets(filteredSnippets);
});

// Delete a snippet
function deleteSnippet(index) {
    snippets.splice(index, 1);
    localStorage.setItem('snippets', JSON.stringify(snippets));
    renderSnippets();
}

// Initial render
renderSnippets();
