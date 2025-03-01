let habitList = JSON.parse(localStorage.getItem('habits')) || [];
let habitData = JSON.parse(localStorage.getItem('habitData')) || {};

// Timer state
let habitTimers = {};

document.getElementById('habit-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const habitInput = document.getElementById('habit-input');
  const habit = habitInput.value.trim();
  if (habit) {
    addHabit(habit);
    habitInput.value = '';
  }
});

function addHabit(habit) {
  habitList.push(habit);
  habitData[habit] = [];
  saveData();
  renderHabitList();
}

function deleteHabit(habit) {
  habitList = habitList.filter(h => h !== habit);
  delete habitData[habit];
  saveData();
  renderHabitList();
}

function startTimer(habit) {
  if (habitTimers[habit]) return; // Timer already running
  const timerElement = document.getElementById(`timer-${habit}`);
  let seconds = 0;

  habitTimers[habit] = setInterval(() => {
    seconds++;
    timerElement.textContent = `Time: ${Math.floor(seconds / 60)}m ${seconds % 60}s`;
  }, 1000);
}

function stopTimer(habit) {
  clearInterval(habitTimers[habit]);
  delete habitTimers[habit];
}

function trackHabit(habit) {
  const today = new Date().toLocaleDateString();

  if (!habitData[habit].find(record => record.date === today)) {
    habitData[habit].push({ date: today, completed: true });
    startTimer(habit);
    saveData();
    renderHabitList();
    updateProgress();
  } else {
    alert('You already tracked this habit today!');
  }
}

function renderHabitList() {
  const habitListContainer = document.getElementById('habit-list');
  habitListContainer.innerHTML = '';

  habitList.forEach(habit => {
    const habitItem = document.createElement('div');
    habitItem.classList.add('habit-item');

    const timerId = `timer-${habit}`;
    const habitButtonText = habitData[habit].length === 0 ? 'Start' : 'Track Today';

    habitItem.innerHTML = `
      <h3>${habit}</h3>
      <p>Consistency: ${calculateConsistency(habit)}%</p>
      <div id="${timerId}" class="timer">Time: 0m 0s</div>
      <div class="habit-item-actions">
        <button onclick="trackHabit('${habit}')">${habitButtonText}</button>
        <button onclick="deleteHabit('${habit}')" style="background-color: #ff4b5c;">Delete</button>
      </div>
    `;

    habitListContainer.appendChild(habitItem);
  });
}

function calculateConsistency(habit) {
  const habitRecords = habitData[habit];
  const totalDays = habitRecords.length;
  const completedDays = habitRecords.filter(record => record.completed).length;
  return totalDays === 0 ? 0 : Math.round((completedDays / totalDays) * 100);
}

function saveData() {
  localStorage.setItem('habits', JSON.stringify(habitList));
  localStorage.setItem('habitData', JSON.stringify(habitData));
}

function updateProgress() {
  const progressCanvas = document.getElementById('habit-progress');
  const ctx = progressCanvas.getContext('2d');

  const data = habitList.map(habit => calculateConsistency(habit));

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: habitList,
      datasets: [{
        label: 'Habit Progress',
        data: data,
        backgroundColor: ['#ff9a8b', '#ff6a88', '#d4a5a5', '#ffed4b', '#ff5c8f'],
      }]
    }
  });
}

renderHabitList();
updateProgress();
