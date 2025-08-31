// JavaScript file
// Elements
const taskName = document.getElementById('taskName');
const taskDeadline = document.getElementById('taskDeadline');
const taskProgress = document.getElementById('taskProgress');
const addTaskBtn = document.getElementById('addTaskBtn');
const tasksContainer = document.getElementById('tasksContainer');

// Event Listener: Add Task
addTaskBtn.addEventListener('click', () => {
    const name = taskName.value.trim();
    const deadline = taskDeadline.value;
    const progress = parseInt(taskProgress.value, 10);

    if (!name || !deadline || isNaN(progress) || progress < 0 || progress > 100) {
        alert('Please provide valid task details.');
        return;
    }

    addTaskToList(name, deadline, progress);
    clearInputs();
});

// Add Task to List
function addTaskToList(name, deadline, progress) {
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="task-details">
            <span>${name}</span>
            <span>Deadline: ${deadline}</span>
            <span>${progress}%</span>
            <button onclick="removeTask(this)">Delete</button>
        </div>
        <div class="progress-bar">
            <div style="width: ${progress}%;"></div>
        </div>
    `;
    tasksContainer.appendChild(li);
}

// Clear Input Fields
function clearInputs() {
    taskName.value = '';
    taskDeadline.value = '';
    taskProgress.value = '';
}

// Remove Task from List
function removeTask(button) {
    const li = button.parentElement.parentElement;
    tasksContainer.removeChild(li);
}
