// JavaScript file
const posts = [];

document.getElementById("create-button").addEventListener("click", () => {
    const title = document.getElementById("post-title").value.trim();
    const content = document.getElementById("post-content").value.trim();

    if (!title || !content) {
        alert("Both title and content are required.");
        return;
    }

    const postId = posts.length + 1;
    posts.push({ id: postId, title, content });
    displayPosts();
    document.getElementById("post-title").value = "";
    document.getElementById("post-content").value = "";
});

function displayPosts() {
    const postsList = document.getElementById("posts-list");
    postsList.innerHTML = "";

    posts.forEach((post) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <div class="post-actions">
                <button onclick="editPost(${post.id})">Edit</button>
                <button onclick="deletePost(${post.id})">Delete</button>
            </div>
        `;
        postsList.appendChild(listItem);
    });
}

function editPost(id) {
    const post = posts.find((p) => p.id === id);
    if (!post) return;

    const newTitle = prompt("Edit Title:", post.title);
    const newContent = prompt("Edit Content:", post.content);

    if (newTitle && newContent) {
        post.title = newTitle;
        post.content = newContent;
        displayPosts();
    }
}

function deletePost(id) {
    const index = posts.findIndex((p) => p.id === id);
    if (index > -1) {
        posts.splice(index, 1);
        displayPosts();
    }
}
