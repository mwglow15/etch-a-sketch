const board = document.querySelector('.board');

const tile = document.createElement('div');
tile.classList.add('tile');
console.log(board.style.width);
tile.style.width = 10%
tile.style.height = tile.style.width;

for (i=0; i<16*16 ; i++) {
    board.appendChild(tile.cloneNode(true));
}