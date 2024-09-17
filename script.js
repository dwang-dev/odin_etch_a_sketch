let gridSize = 16;
let MAX_GRID_SIZE = 100;

const gridContainer = document.querySelector(".gridContainer");
const popupButton = document.querySelector(".popupButton");

gridContainer.addEventListener("mouseover", (e) => {
    let target = e.target;
    if (target.className == "gridSquare") target.setAttribute("style", "background-color: black");
});

popupButton.addEventListener("click", () => {
    let size = Number(prompt("Enter grid size"));
    if (size <= MAX_GRID_SIZE) {
        removeGrid();
        gridSize = size;
        generateGrid();
    } else {
        console.log("Input correct grid size");
    }
});

function generateGrid() {
    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div");
        gridContainer.appendChild(gridRow);
        gridRow.setAttribute("class", "gridRow");
        for (let i = 0; i < gridSize; i++) {
            const gridSquare = document.createElement("div");
            gridSquare.setAttribute("class", "gridSquare");
            gridRow.appendChild(gridSquare);
        }
    } 
}

function removeGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

generateGrid();