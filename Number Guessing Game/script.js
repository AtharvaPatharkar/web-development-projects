// JavaScript file
const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");

// Random number generation
const minRange = 1;
const maxRange = 5;
const randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

console.log("Cheat code: The number is", randomNumber); // For debugging

// Event listener for the submit button
submitBtn.addEventListener("click", () => {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess)) {
    feedback.textContent = "❌ Please enter a valid number!";
    feedback.style.color = "red";
    return;
  }

  if (userGuess < randomNumber) {
    feedback.textContent = "📉 Too low! Try again.";
    feedback.style.color = "orange";
  } else if (userGuess > randomNumber) {
    feedback.textContent = "📈 Too high! Try again.";
    feedback.style.color = "orange";
  } else {
    feedback.textContent = "🎉 Correct! You guessed the number!";
    feedback.style.color = "green";
    guessInput.disabled = true;
    submitBtn.disabled = true;
  }

  guessInput.value = ""; // Clear the input field
});
