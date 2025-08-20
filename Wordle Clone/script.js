// JavaScript file
// Define the hidden word and the number of attempts
const hiddenWord = "APPLE";
let attempts = 0;

// Create the game board dynamically
const board = document.getElementById("board");
for (let i = 0; i < 6; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < 5; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);
  }
  board.appendChild(row);
}

// Handle the guess submission
document.getElementById("submitGuess").addEventListener("click", function() {
  const guessInput = document.getElementById("guess");
  const guess = guessInput.value.toUpperCase();

  if (guess.length === 5 && /^[A-Z]+$/.test(guess)) {
    submitGuess(guess);
  } else {
    alert("Please enter a valid 5-letter word!");
  }

  guessInput.value = "";
});

// Function to submit guess and give feedback
function submitGuess(guess) {
  const row = document.getElementsByClassName("row")[attempts];
  for (let i = 0; i < 5; i++) {
    const cell = row.children[i];
    cell.textContent = guess[i];
    if (guess[i] === hiddenWord[i]) {
      cell.style.backgroundColor = "green";
    } else if (hiddenWord.includes(guess[i])) {
      cell.style.backgroundColor = "yellow";
    } else {
      cell.style.backgroundColor = "gray";
    }
  }
  
  attempts++;
  
  if (guess === hiddenWord) {
    setTimeout(() => alert("Congratulations! You guessed the word!"), 100);
    return;
  }
  
  if (attempts === 6) {
    setTimeout(() => alert("Game Over! The correct word was " + hiddenWord), 100);
  }
}
