// JavaScript file
let timer;
let seconds = 0;
let isRunning = false;
let timeDisplay = document.getElementById('time-display');
let startBtn = document.getElementById('start-btn');
let resetBtn = document.getElementById('reset-btn');

// Start or stop the timer when the start button is clicked
startBtn.addEventListener('click', function() {
  if (!isRunning) {
    isRunning = true;
    startBtn.textContent = 'Stop';
    startTimer();
  } else {
    isRunning = false;
    startBtn.textContent = 'Start';
    clearInterval(timer);
  }
});

// Reset the timer when the reset button is clicked
resetBtn.addEventListener('click', function() {
  isRunning = false;
  startBtn.textContent = 'Start';
  clearInterval(timer);
  seconds = 0;
  updateTimeDisplay();
});

// Function to start the timer
function startTimer() {
  timer = setInterval(function() {
    seconds++;
    updateTimeDisplay();
  }, 1000);
}

// Function to update the time display
function updateTimeDisplay() {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = seconds % 60;

  timeDisplay.textContent = formatTime(hours, minutes, remainingSeconds);
}

// Function to format time into hh:mm:ss format
function formatTime(hours, minutes, seconds) {
  return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
}

// Function to add leading zeros to time units
function padTime(timeUnit) {
  return timeUnit < 10 ? '0' + timeUnit : timeUnit;
}
