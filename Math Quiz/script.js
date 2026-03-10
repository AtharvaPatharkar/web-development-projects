// Elements
const questionText = document.getElementById('questionText');
const userAnswer = document.getElementById('userAnswer');
const submitAnswer = document.getElementById('submitAnswer');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const resultMessage = document.getElementById('resultMessage');

// Variables
let score = 0;
let timeLeft = 30;
let currentAnswer = 0;
let timerInterval;

// Start Timer
function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
        } else {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

// Generate a new question
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    currentAnswer = num1 + num2;
    questionText.textContent = `What is ${num1} + ${num2}?`;
}

// Submit Answer
submitAnswer.addEventListener('click', () => {
    const userResponse = parseInt(userAnswer.value, 10);
    if (userResponse === currentAnswer) {
        score++;
        scoreDisplay.textContent = score;
        resultMessage.textContent = 'Correct! 🎉';
    } else {
        resultMessage.textContent = 'Incorrect. Try again! ❌';
    }
    userAnswer.value = '';
    generateQuestion();
});

// Game Over
function gameOver() {
    resultMessage.textContent = `Game Over! Your final score is ${score}.`;
    submitAnswer.disabled = true;
}

// Initialize Game
function initGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    generateQuestion();
    startTimer();
}

initGame();
