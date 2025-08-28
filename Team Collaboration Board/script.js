// JavaScript file
// Add task to a specific column
function addTask(column) {
  const taskDescription = prompt("Enter Task Description:");

  if (!taskDescription) return;

  const taskId = new Date().getTime(); // unique task ID based on time
  const taskData = {
      id: taskId,
      description: taskDescription,
      status: column
  };

  // Save task to localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskData);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // Update UI with new task
  renderTasks();
}

// Allow drag event
function allowDrop(event) {
  event.preventDefault();
}

// Start dragging the task
function drag(event, taskId) {
  event.dataTransfer.setData("taskId", taskId);
}

// Drop task in the new column
function drop(event) {
  event.preventDefault();
  const taskId = event.dataTransfer.getData("taskId");
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  // Find the task and update the column
  const task = tasks.find(t => t.id == taskId);
  if (task) {
      const targetColumn = event.target.closest('.column').id;
      task.status = targetColumn.replace('-column', ''); // update task status based on dropped column
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks(); // Re-render tasks after update
  }
}

// Delete a task
function deleteTask(taskId) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task.id != taskId); // Remove task by ID
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks(); // Re-render tasks after deletion
}

// Render tasks from localStorage
function renderTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const columns = ['todo', 'inprogress', 'completed'];

  columns.forEach(column => {
      const columnElement = document.getElementById(`${column}-list`);
      columnElement.innerHTML = ''; // Clear column before rendering

      tasks.filter(task => task.status === column).forEach(task => {
          const taskElement = document.createElement('li');
          taskElement.classList.add('task-item');
          taskElement.draggable = true;
          taskElement.setAttribute('ondragstart', `drag(event, ${task.id})`);
          taskElement.innerHTML = `
              ${task.description}
              <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
          `;
          columnElement.appendChild(taskElement);
      });
  });
}

// Initial render of tasks
document.addEventListener('DOMContentLoaded', renderTasks);
