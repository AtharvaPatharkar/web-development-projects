// JavaScript file
// Function to create a new node
function createNode(parentNode) {
    const newNode = document.createElement('div');
    newNode.classList.add('node');
    newNode.innerHTML = `
        New Node
        <button class="add-node-btn">+ Add Node</button>
    `;

    parentNode.appendChild(newNode);

    // Attach event listener to the new node's button
    const addButton = newNode.querySelector('.add-node-btn');
    addButton.addEventListener('click', () => createNode(newNode));
}

// Initial setup: Add event listener to the root node's button
document.querySelector('.add-node-btn').addEventListener('click', () => {
    const rootNode = document.getElementById('root-node');
    createNode(rootNode.parentNode);
});
