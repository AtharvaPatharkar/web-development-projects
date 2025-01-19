document.addEventListener("DOMContentLoaded", () => {
    const playerXButton = document.querySelector(".playerX");
    const playerOButton = document.querySelector(".playerO");
    const playArea = document.querySelector(".play-area");
    const boxes = Array.from(document.querySelectorAll(".play-area span"));
    const resultBox = document.querySelector(".result-box");
    const wonText = document.querySelector(".won-text");
    const replayButton = resultBox.querySelector("button");
    const XturnIndicator = document.querySelector(".Xturn");
    const OturnIndicator = document.querySelector(".Oturn");
    const darkModeToggle = document.getElementById("icon");

    let currentPlayer = "X"; // Default player
    let gameActive = true; // Tracks if the game is ongoing
    let board = Array(9).fill(""); // Board state

    // Winning combinations
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6],           // Diagonals
    ];

    // Player selection buttons
    playerXButton.addEventListener("click", () => startGame("X"));
    playerOButton.addEventListener("click", () => startGame("O"));

    // Start the game with the selected player
    function startGame(selectedPlayer) {
        currentPlayer = selectedPlayer;
        togglePlayerTurn();
        document.querySelector(".select-box").style.display = "none";
        playArea.style.pointerEvents = "auto";
    }

    // Update the player turn indicators
    function togglePlayerTurn() {
        XturnIndicator.style.opacity = currentPlayer === "X" ? "1" : "0.5";
        OturnIndicator.style.opacity = currentPlayer === "O" ? "1" : "0.5";
    }

    // Handle box clicks
    boxes.forEach((box, index) => {
        box.addEventListener("click", () => {
            if (gameActive && box.textContent === "") {
                box.textContent = currentPlayer;
                box.classList.add(currentPlayer === "X" ? "x-mark" : "o-mark");
                board[index] = currentPlayer;
                if (checkWin(currentPlayer)) {
                    endGame(`${currentPlayer} Wins!`);
                } else if (board.every(cell => cell)) {
                    endGame("It's a Draw!");
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                    togglePlayerTurn();
                }
            }
        });
    });

    // Check for a win
    function checkWin(player) {
        return winningCombinations.some(combination =>
            combination.every(index => board[index] === player)
        );
    }

    // End the game and display the result
    function endGame(message) {
        gameActive = false;
        playArea.style.pointerEvents = "none";
        wonText.textContent = message;
        resultBox.style.display = "block";
    }

    // Replay the game
    replayButton.addEventListener("click", () => {
        board.fill("");
        boxes.forEach(box => {
            box.textContent = "";
            box.classList.remove("x-mark", "o-mark");
        });
        currentPlayer = "X";
        gameActive = true;
        resultBox.style.display = "none";
        togglePlayerTurn();
        playArea.style.pointerEvents = "auto";
    });

    // Dark mode toggle
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
});







// Dark Mode Toggle Script
const darkModeToggle = document.getElementById("icon");

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    darkModeToggle.classList.add("active");
}

// Toggle dark mode on button click
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    darkModeToggle.classList.toggle("active");

    // Save the user's theme preference
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
