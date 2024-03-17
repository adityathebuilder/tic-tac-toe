const board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameover = false;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function makeMove(index) {
  if (!gameover && board[index] === '') {
    board[index] = currentPlayer;
    render();
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWinner() {
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameover = true;
      document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
      return;
    }
  }

  if (!board.includes('')) {
    gameover = true;
    document.getElementById('status').innerText = "It's a draw!";
  }
}

function resetGame() {
  board.fill('');
  currentPlayer = 'X';
  gameover = false;
  document.getElementById('status').innerText = '';
  render();
}

function render() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.innerText = board[index];
  });
}

render();
