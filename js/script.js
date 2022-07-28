function createGrid() {
  const grid = document.getElementById('grid');
    const x = document.getElementById('grid-size');
    const gridSize = x.value;

  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < (gridSize * gridSize); i++) {
    let cell = document.createElement('div');
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'black';
    })
    cell.style.backgroundColor = 'grey';
    grid.insertAdjacentElement('beforeend', cell)
  }
}

function changeColor(color) {
  if (color == 'random'){
    this.style.backgroundColor = randomColor();
  } else {
    this.style.backgroundColor = color;
  }
}

function randomColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

function app() {
  createGrid(16);
}

window.onload = app();