const puzzleContainer = document.getElementById('puzzle-container');
const resetButton = document.getElementById('reset');

let tiles = [
    1, 2, 3,
    4, 5, 6,
    7, 8, null
];

function renderTiles() {
    puzzleContainer.innerHTML = '';
    tiles.forEach((tile, index) => {
        const tileElement = document.createElement('div');
        tileElement.classList.add('tile');
        if (tile === null) {
            tileElement.classList.add('empty');
            tileElement.innerText = '';
        } else {
            tileElement.innerText = tile;
            tileElement.addEventListener('click', () => handleTileClick(index));
        }
        puzzleContainer.appendChild(tileElement);
    });
}

function handleTileClick(index) {
    const emptyIndex = tiles.indexOf(null);
    const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 3, emptyIndex + 3]; // left, right, up, down

    if (validMoves.includes(index)) {
        [tiles[emptyIndex], tiles[index]] = [tiles[index], tiles[emptyIndex]];
        renderTiles();
        checkWin();
    }
}

// function checkWin() {
//     if (tiles.join(',') === '1,2,3,4,5,6,7,8,,') {
//         setTimeout(() => {
//             alert('Congratulations! You solved the puzzle!');
//             resetGame();
//         }, 100);
//     }
// }

function resetGame() {
    tiles = [
        1, 2, 3,
        4, 5, 6,
        7, 8, null
    ];
    shuffleTiles();
    renderTiles();
}

function shuffleTiles() {
    for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
}

resetButton.addEventListener('click', resetGame);

// Initialize game
shuffleTiles();
renderTiles();