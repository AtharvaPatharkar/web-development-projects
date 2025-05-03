// JavaScript file
// Get references to the input elements
const taskInput = document.getElementById('task-input');
const categorySelect = document.getElementById('category-select');
const addTaskBtn = document.getElementById('add-task-btn');

// Get references to the task lists for each category
const workList = document.getElementById('work-list');
const personalList = document.getElementById('personal-list');
const urgentList = document.getElementById('urgent-list');

// Function to add a new task
const addTask = () => {
  const task = taskInput.value.trim();
  const category = categorySelect.value;

  // If the task input is empty, don't add anything
  if (!task) return;

  // Create a new task element
  const taskElement = document.createElement('li');
  taskElement.innerHTML = `
    ${task}
    <button class="delete-btn">Delete</button>
  `;

  // Attach event listener to delete button
  taskElement.querySelector('.delete-btn').addEventListener('click', () => {
    taskElement.remove();
  });

  // Add the task to the appropriate list based on the category
  if (category === 'work') {
    workList.appendChild(taskElement);
  } else if (category === 'personal') {
    personalList.appendChild(taskElement);
  } else if (category === 'urgent') {
    urgentList.appendChild(taskElement);
  }

  // Clear the input field
  taskInput.value = '';
};

// Add event listener to the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Allow pressing 'Enter' to add task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
