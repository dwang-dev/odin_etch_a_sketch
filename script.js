let gridSize = 16;
let colorMode = "rainbow"
let MAX_GRID_SIZE = 100;

const grid = document.querySelector(".grid");
const buttons = document.querySelector(".buttons");

grid.addEventListener("mouseover", (e) => {handleMouseover(e)});
buttons.addEventListener("click", (event) => {handleButtonClick(event)});

function handleMouseover(event) {
    let gridSquare = event.target;
    if (gridSquare.classList.contains("gridSquare")) {
        if (!gridSquare.classList.contains("active")) {
            gridSquare.setAttribute("style", `background-color: #${getGridColor()}; opacity: 1;`);
            gridSquare.classList.toggle("active");
        }
    }
}

function handleButtonClick(event) {
    let button = event.target;
    if (button.classList.contains("setSizeBtn")) {
        let size = Number(prompt("Enter grid size"));
        if (size <= MAX_GRID_SIZE) {
            removeGrid();
            gridSize = size;
            generateGrid();
        }
    } else if (button.classList.contains("toggleColorModeBtn")) {
        grid.classList.toggle("rainbow");
        console.log("toggled");
    } else if (button.classList.contains("resetBtn")) {
        removeGrid();
        generateGrid();
    }
}

function getGridColor() {
    if (grid.classList.contains("rainbow")) {
        return Math.floor(Math.random() * 0xFFFFFF).toString(16);
    } else {
        return "000000";
    }
}

function generateGrid() {
    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div");
        grid.appendChild(gridRow);
        gridRow.setAttribute("class", "gridRow");
        for (let i = 0; i < gridSize; i++) {
            const gridSquare = document.createElement("div");
            gridSquare.setAttribute("class", "gridSquare");
            gridRow.appendChild(gridSquare);
        }
    } 
}

function removeGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

generateGrid();