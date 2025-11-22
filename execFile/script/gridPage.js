const noteBlocks1 = document.querySelectorAll(".notes");
const noteBlocks2 = document.querySelectorAll(".notes");
noteBlocks2.forEach((noteBlock) => {
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 10; j++) {
      const line = document.createElement("div");
      line.className = "note-line";
      noteBlock.appendChild(line);
    }
  }
});

const grids = document.querySelectorAll(".grids");
grids.forEach((grid) => {
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 24; j++) {
      const gridCell = document.createElement("div");
      gridCell.className = "grid-lines";
      grid.appendChild(gridCell);
    }
  }
});
