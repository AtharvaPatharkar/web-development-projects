// script.js

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const restartButton = document.getElementById('restartButton');

// Game variables
const boxSize = 20; // size of the snake block
let snake = [{ x: 200, y: 200 }];
let direction = { x: 0, y: 0 };
let food = { x: 0, y: 0 };
let score = 0;

// Generate random food position
function generateFood() {
  food.x = Math.floor(Math.random() * (canvas.width / boxSize)) * boxSize;
  food.y = Math.floor(Math.random() * (canvas.height / boxSize)) * boxSize;
}

// Draw the snake
function drawSnake() {
  ctx.shadowBlur = 5;
  ctx.shadowColor = '#4caf50';
  snake.forEach((segment, index) => {
    ctx.fillStyle = index === 0 ? '#ffeb3b' : '#4caf50'; // Head is yellow, body is green
    ctx.fillRect(segment.x, segment.y, boxSize, boxSize);
    ctx.strokeStyle = '#2e7d32';
    ctx.lineWidth = 2;
    ctx.strokeRect(segment.x, segment.y, boxSize, boxSize);
  });
}

// Draw the food
function drawFood() {
  ctx.shadowBlur = 10;
  ctx.shadowColor = '#ff5722';
  ctx.fillStyle = '#ff5722';
  ctx.beginPath();
  ctx.arc(food.x + boxSize / 2, food.y + boxSize / 2, boxSize / 2, 0, 2 * Math.PI);
  ctx.fill();
}

// Update game state
function update() {
  const head = { x: snake[0].x + direction.x * boxSize, y: snake[0].y + direction.y * boxSize };
  snake.unshift(head);

  // Check for food collision
  if (head.x === food.x && head.y === food.y) {
    score++;
    scoreEl.textContent = score;
    generateFood();
  } else {
    snake.pop();
  }

  // Check for wall or self-collision
  if (
    head.x < 0 ||
    head.x >= canvas.width ||
    head.y < 0 ||
    head.y >= canvas.height ||
    snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    clearInterval(gameLoop);
    alert('Game Over! Your score: ' + score);
  }
}

// Render the game
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSnake();
  drawFood();
}

// Handle keyboard input
document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowUp':
      if (direction.y === 0) direction = { x: 0, y: -1 };
      break;
    case 'ArrowDown':
      if (direction.y === 0) direction = { x: 0, y: 1 };
      break;
    case 'ArrowLeft':
      if (direction.x === 0) direction = { x: -1, y: 0 };
      break;
    case 'ArrowRight':
      if (direction.x === 0) direction = { x: 1, y: 0 };
      break;
  }
});

// Restart the game
restartButton.addEventListener('click', () => {
  clearInterval(gameLoop);
  snake = [{ x: 200, y: 200 }];
  direction = { x: 0, y: 0 };
  score = 0;
  scoreEl.textContent = score;
  generateFood();
  gameLoop = setInterval(() => {
    update();
    render();
  }, 100);
});

// Start the game
generateFood();
let gameLoop = setInterval(() => {
  update();
  render();
}, 100);
