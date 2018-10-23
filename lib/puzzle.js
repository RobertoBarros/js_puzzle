const hintButton = document.querySelector('#show-hint');
const hint = document.querySelector('.hint');

hintButton.addEventListener('click', () => {
  hint.classList.toggle('active');
})

tiles = document.querySelectorAll('#grid td')

tiles.forEach((tile) => {
  tile.addEventListener('click', (event) => {
    console.log(`row: ${tile.parentElement.rowIndex} | col: ${tile.cellIndex}`);
    if (canMove(event.target)) {
      console.log('can move');
      moveTile(event.target)
    } else {
      console.log("can't move!")
    }
  })
})


function canMove(tile) {
  const tileColumn = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  const emptyTile = document.querySelector('.empty');
  const emptyTileColumn = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentElement.rowIndex;

  return (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) ||
  (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1) ||
  (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) ||
  (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1)
}

function moveTile(tile) {
  emptyTile = document.querySelector('.empty');
  emptyTile.innerText = tile.innerText;
  emptyTile.classList.remove('empty');
  tile.innerText = "";
  tile.classList.add('empty');
  checkIfPlayerWins();
}

function checkIfPlayerWins() {
  const tilesOrder = Array.from(document.querySelectorAll('td')).map(e => { return parseInt(e.innerHTML) })
  if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
    alert("You win!")
  }
}
