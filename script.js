let squareSize = 16;
const board = document.querySelector('.board');

const tile = document.createElement('div');

const button = document.querySelector('button');

tile.classList.add('tile');
boardWidth = board.clientWidth - 2*parseInt(getComputedStyle(board).padding);

tile.style.width = (boardWidth / 16 - 2) + "px";
tile.style.height = tile.style.width;

for (i=0; i<16*16 ; i++) {
    board.appendChild(tile.cloneNode(true));
}

console.log(getComputedStyle(tile).borderWidth);

function addDrawn(e) {
    this.classList.add('drawn');
}

function resizeGrid () {
    let newSize = prompt('Enter new size of grid. Length of one square side.  100 or less.');

    while(board.firstChild)
        board.removeChild(board.firstChild)

    for (i=0;i<newSize*newSize;i++)
    {
        tile.style.width = (boardWidth / newSize - 2) + "px";
        tile.style.height = tile.style.width;

        board.appendChild(tile.cloneNode(true));
    }
    const newTiles = document.querySelectorAll(".tile");

    newTiles.forEach(elem => elem.addEventListener('mouseenter', addDrawn));
}
const tiles = document.querySelectorAll(".tile");

tiles.forEach(elem => elem.addEventListener('mouseenter', addDrawn));

button.addEventListener('click', resizeGrid);