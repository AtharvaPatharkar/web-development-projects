// JavaScript file
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const timerDisplay = document.getElementById('timer-display');
const startTimerButton = document.getElementById('start-timer');
const pauseTimerButton = document.getElementById('pause-timer');
const resetTimerButton = document.getElementById('reset-timer');

let timerInterval;
let timeLeft = 1500; // 25 minutes in seconds
let isTimerRunning = false;

// Add a new task
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task === '') return;

    const taskItem = document.createElement('li');
    taskItem.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
});

// Timer functionality
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (isTimerRunning) return;

    isTimerRunning = true;
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            isTimerRunning = false;
            alert('Pomodoro complete! Take a break.');
        }
    }, 1000);

    startTimerButton.disabled = true;
    pauseTimerButton.disabled = false;
}

function pauseTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;

    startTimerButton.disabled = false;
    pauseTimerButton.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timeLeft = 1500; // Reset to 25 minutes
    updateTimerDisplay();

    startTimerButton.disabled = false;
    pauseTimerButton.disabled = true;
}

// Event listeners
startTimerButton.addEventListener('click', startTimer);
pauseTimerButton.addEventListener('click', pauseTimer);
resetTimerButton.addEventListener('click', resetTimer);

// Initialize timer display
updateTimerDisplay();
