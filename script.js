let squareSize = 16;
const board = document.querySelector('.board');

const tile = document.createElement('div');

tile.classList.add('tile');
boardWidth = board.clientWidth - 2*parseInt(getComputedStyle(board).padding);

tile.style.width = (boardWidth / 16) + "px";
tile.style.height = tile.style.width;

for (i=0; i<16*16 ; i++) {
    board.appendChild(tile.cloneNode(true));
}


function addDrawn(e) {
    this.classList.add('drawn');
}
const tiles = document.querySelectorAll(".tile");

tiles.forEach(elem => elem.addEventListener('mouseenter', addDrawn));