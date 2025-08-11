// JavaScript file
const markdownInput = document.getElementById('markdown-input');
const markdownPreview = document.getElementById('markdown-preview');

// Update the preview as the user types
markdownInput.addEventListener('input', () => {
    const markdownText = markdownInput.value;
    markdownPreview.innerHTML = marked.parse(markdownText);
});

// Load an example markdown by default
const exampleMarkdown = `
# Welcome to Markdown Previewer
**Markdown** is a lightweight markup language with plain text formatting syntax.

## Features
- Live Preview
- **Bold Text**
- *Italicized Text*
- [Links](https://www.google.com)

### Code Example
\`\`\`javascript
console.log("Hello, Markdown!");
\`\`\`

### Tables
| Header 1 | Header 2 |
|----------|----------|
| Row 1    | Row 1    |
| Row 2    | Row 2    |

Enjoy typing your markdown!
`;

markdownInput.value = exampleMarkdown;
markdownPreview.innerHTML = marked.parse(exampleMarkdown);
