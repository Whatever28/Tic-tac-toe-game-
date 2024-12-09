Tic-Tac-Toe Game Documentation
This JavaScript code implements a simple Tic-Tac-Toe game with features like score tracking, grid resizing, and theme switching.

Global Variables
area:
const area = document.getElementById('area');
Represents the game grid container in the DOM.

playerDisplay:
const playerDisplay = document.getElementById('player');
Displays the current player's turn.

scoreX, scoreO, scoreDraw:
Represent the DOM elements for keeping track of the score for Player X, Player O, and draws.

currentPlayer:
A string variable initialized to 'X'. Tracks the current player's turn.

size:
An integer representing the size of the game grid. Default is 3 (for a 3x3 grid).

Functions
createGrid()
Creates and displays the Tic-Tac-Toe grid in the DOM.

Steps:
Clears the existing grid using area.innerHTML = '';.
Sets the grid layout using gridTemplateColumns.
Initializes a 2D array gameGrid to track cell values.
Creates div elements for each cell and appends them to the grid container.
Adds a click event listener to each cell, allowing players to make moves.
The event listener is added with { once: true } to ensure a cell can only be clicked once.
makeMove(cell, row, col, gameGrid)
Handles player moves and updates the grid.

Parameters:

cell: The DOM element of the clicked cell.
row, col: The row and column indices of the cell in the grid.
gameGrid: A 2D array representing the current state of the game.
Steps:

Updates the gameGrid and displays the current player's symbol ('X' or 'O') in the cell.
Checks for a winner using checkWinner() or a draw using isDraw().
If no winner or draw, switches to the other player and updates the display.
checkWinner(grid)
Checks if the current player has won.

Parameters:

grid: A 2D array representing the current state of the game.
Returns:

true if the current player has completed a winning line (row, column, or diagonal).
false otherwise.
Logic:

Checks each row for a win using .every().
Checks each column for a win using .every().
Checks both diagonals for a win.
isDraw(grid)
Determines if the game is a draw.

Parameters:

grid: A 2D array representing the current state of the game.
Returns:

true if all cells are filled and no player has won.
false otherwise.
Logic: Uses .flat() to create a one-dimensional array and checks if all cells are filled.

updateScore(winner)
Updates the score based on the game's result.

Parameters:

winner: A string representing the winner ('X', 'O', or 'draw').
Steps:

If the result is a draw, increments the draw counter.
If Player X or O wins, increments their respective score.
Displays an alert with the game result.
Calls createGrid() to restart the game.
Theme Switching
Allows players to switch the game's theme.

Logic: Adds click event listeners to buttons with the class .theme-button. Updates the className of the body element to apply a new theme.
Grid Resizing
Allows players to change the grid size.

Logic: Adds click event listeners to buttons with the class .size-button. Updates the size variable and recreates the grid with the new size by calling createGrid().
Event Listeners
Theme Buttons:
Dynamically updates the theme using the data-theme attribute.

Size Buttons:
Changes the size of the grid using the data-size attribute.

Initialization
The game is initialized with a call to createGrid() at the end of the script.

Usage
Open an HTML file with corresponding IDs and buttons (area, player, scoreX, etc.).
Link the script to the HTML file.
Start playing Tic-Tac-Toe with the default 3x3 grid, track scores, and enjoy additional features like theme switching and resizing the grid.
