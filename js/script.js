function makeRows(size) {
  let grid = document.querySelector('.grid');
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for(let i = 0; i < (size*size); i++){
    let cell = document.createElement('div');
    cell.style.backgroundColor ="blue";
    cell.style.border = "1px solid black";
    grid.insertAdjacentElement("beforeend", cell);
  }

}

makeRows(16);