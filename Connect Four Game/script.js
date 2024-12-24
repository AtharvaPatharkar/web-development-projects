// Wait until the DOM is fully loaded
$(document).ready(function () {
	const rows = 6;
	const cols = 7;
	let currentPlayer = "player1";
  
	// Initialize the board state
	let board = Array(rows)
	  .fill(null)
	  .map(() => Array(cols).fill(null));
  
	// Function to check if the move is valid
	function isValidMove(col) {
	  return board[0][col] === null;
	}
  
	// Function to place a chip in the lowest available row in the column
	function placeChip(col) {
	  for (let row = rows - 1; row >= 0; row--) {
		if (board[row][col] === null) {
		  board[row][col] = currentPlayer;
		  return row;
		}
	  }
	  return -1;
	}
  
	// Function to check for a win
	function checkWin(row, col) {
	  function countDirection(dx, dy) {
		let count = 0;
		let r = row + dx;
		let c = col + dy;
		while (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] === currentPlayer) {
		  count++;
		  r += dx;
		  c += dy;
		}
		return count;
	  }
  
	  // Check all directions (horizontal, vertical, diagonal)
	  return (
		countDirection(0, 1) + countDirection(0, -1) >= 3 || // Horizontal
		countDirection(1, 0) + countDirection(-1, 0) >= 3 || // Vertical
		countDirection(1, 1) + countDirection(-1, -1) >= 3 || // Diagonal /
		countDirection(1, -1) + countDirection(-1, 1) >= 3 // Diagonal \
	  );
	}
  
	// Function to restart the game
	function restartGame() {
	  board = Array(rows)
		.fill(null)
		.map(() => Array(cols).fill(null));
	  $(".board button").removeClass("player1 player2");
	  currentPlayer = "player1";
	}
  
	// Handle cell clicks
	$(".board button").click(function () {
	  const col = $(this).closest("td").index();
	  if (!isValidMove(col)) {
		alert("Invalid move! Try a different column.");
		return;
	  }
  
	  const row = placeChip(col);
	  const cell = $(`.board tr:eq(${row}) td:eq(${col}) button`);
	  cell.addClass(currentPlayer);
  
	  if (checkWin(row, col)) {
		alert(`${currentPlayer === "player1" ? "Player 1 (Red)" : "Player 2 (Yellow)"} wins!`);
		restartGame();
		return;
	  }
  
	  // Switch players
	  currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
	});
  
	// Restart button click handler
	$("#restartBtn").click(restartGame);
  });
  

  