// JavaScript file
const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');

// Convert Markdown to HTML using simple regex (basic conversion)
function convertMarkdownToHTML(markdown) {
    // Headers
    markdown = markdown.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
    markdown = markdown.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
    markdown = markdown.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    markdown = markdown.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    markdown = markdown.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    markdown = markdown.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Bold
    markdown = markdown.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');

    // Italics
    markdown = markdown.replace(/\*(.*)\*/gim, '<em>$1</em>');

    // Unordered Lists
    markdown = markdown.replace(/^\* (.*$)/gim, '<ul><li>$1</li></ul>');

    // Ordered Lists
    markdown = markdown.replace(/^\d+\. (.*$)/gim, '<ol><li>$1</li></ol>');

    // Links
    markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');

    // Images
    markdown = markdown.replace(/\!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" />');

    // Code
    markdown = markdown.replace(/`(.*?)`/gim, '<code>$1</code>');

    return markdown.trim();
}

markdownInput.addEventListener('input', () => {
    const markdownText = markdownInput.value;
    const htmlText = convertMarkdownToHTML(markdownText);
    htmlOutput.innerHTML = htmlText;
});
