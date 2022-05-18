let squareSize = 16;
const board = document.querySelector('.board');

const tile = document.createElement('div');

tile.classList.add('tile');
boardWidth = board.clientWidth - 2*parseInt(getComputedStyle(board).padding);
tile.style.width = boardWidth / squareSize + "px";
tile.style.height = tile.style.width;

for (i=0; i<Math.pow(squareSize) ; i++) {
    board.appendChild(tile.cloneNode(true));
}