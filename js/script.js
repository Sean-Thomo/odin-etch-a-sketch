

function createGrid(gridSize) {
  const grid = document.getElementById('grid');
  const cells = grid.querySelectorAll('div');

  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < (gridSize * gridSize); i++) {
    let cell = document.createElement('div');
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'white';
    })
    cell.style.backgroundColor = 'black';
    grid.insertAdjacentElement('beforeend', cell)
  }
}

function app() {
  createGrid(3);
}

window.onload = app();