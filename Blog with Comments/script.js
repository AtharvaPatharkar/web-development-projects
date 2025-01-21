// JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    const commentsList = document.getElementById('comments-list');
    const commentInput = document.getElementById('comment-input');
    const addCommentBtn = document.getElementById('add-comment-btn');

    // Load comments from localStorage
    const loadComments = () => {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        commentsList.innerHTML = comments.map((comment, index) => `
            <li>
                ${comment}
                <button class="delete-btn" data-index="${index}">Delete</button>
            </li>
        `).join('');
        addDeleteEventListeners();
    };

    // Save comments to localStorage
    const saveComment = comment => {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
        loadComments();
    };

    // Delete a comment
    const deleteComment = index => {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.splice(index, 1);
        localStorage.setItem('comments', JSON.stringify(comments));
        loadComments();
    };

    // Add event listeners to delete buttons
    const addDeleteEventListeners = () => {
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const index = parseInt(button.getAttribute('data-index'));
                deleteComment(index);
            });
        });
    };

    addCommentBtn.addEventListener('click', () => {
        const comment = commentInput.value.trim();
        if (comment) {
            saveComment(comment);
            commentInput.value = '';
        }
    });

    loadComments();
});
