// JavaScript file
// Function to convert markdown input to HTML with syntax highlighting
function convertMarkdownToHTML(markdown) {
    // Simple markdown to HTML conversion for headings, lists, and bold/italic text
    let html = markdown;

    // Convert headings (H1 to H6)
    html = html.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
    html = html.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
    html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Convert bold text
    html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
    
    // Convert italic text
    html = html.replace(/\*(.*)\*/gim, '<em>$1</em>');
    
    // Convert unordered list (UL)
    html = html.replace(/^\* (.*$)/gim, '<ul><li>$1</li></ul>');
    
    // Convert ordered list (OL)
    html = html.replace(/^\d+\. (.*$)/gim, '<ol><li>$1</li></ol>');

    // Convert line breaks
    html = html.replace(/\n/gim, '<br>');

    return html.trim();
}

// Attach event listener to the textarea for live preview
document.getElementById('markdown-input').addEventListener('input', function() {
    const markdownText = this.value;
    const previewContainer = document.getElementById('preview');
    previewContainer.innerHTML = convertMarkdownToHTML(markdownText);
});
