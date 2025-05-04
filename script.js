let GRID_DIMENSIONS = 16; // Grid is always square, in dimensions GRID_DIMENSIONSxGRID_DIMENSIONS
const gridContainer = document.querySelector(".grid-container");
const gridContainerSize = 800; // NxN, in px
gridContainer.setAttribute("style", `width: ${gridContainerSize}px; height: ${gridContainerSize}px`);

let enableDraw = false;
const drawStatus = document.querySelector(".draw-status");
drawStatus.textContent = "Drawing disabled. Click to enable.";
drawStatus.style.color = "red";

// Generate grid
// Create all divs to make up the grid
// Set grid item sizes based on gridContainerSize, so the container should always be the same size
function generateGrid()
{

    let gridItemSize = ((gridContainerSize)/GRID_DIMENSIONS)-2; // Subtract border amount to keep within bounds of container
    gridItemSize = gridItemSize + "px";

    for (let i = 0; i < GRID_DIMENSIONS*GRID_DIMENSIONS; i++)
    {
        
        const newGridItem = document.createElement("div");
        newGridItem.classList.add("grid-item");
        newGridItem.setAttribute("style", `width: ${gridItemSize}; height: ${gridItemSize};`);
        
        gridContainer.appendChild(newGridItem);
    }
}


// Clear the grid from the screen
function removeGrid()
{
    while(gridContainer.firstChild)
    {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}


// Add hover event to all grid items with event delegation
const grid = document.querySelector(".grid-container");

grid.addEventListener("mouseover", (event) => {
    if(event.target.className === "grid-container") // Do not trigger the event on the parent container - only children
    {
        return;
    }

    if(enableDraw){
        event.target.classList.add("hover");
    }
});


/****************** EVENT LISTENERS *****************/

// Button event listener
const sizeButton = document.querySelector("#change-size-button");

sizeButton.addEventListener('click', () => {
    let newDimensions = prompt("Enter size for the new grid (SIZExSIZE). Max SIZE is 100.");

    if(newDimensions > 100)
    {
        alert("Maximum size is 100x100");
        return;
    }

    GRID_DIMENSIONS = newDimensions;
    removeGrid();
    generateGrid();
});

// Click event listener to enable/disable drawing
document.querySelector("body").addEventListener("click", (event) => {
    if(event.target.className === "menu-button")
    {
        return;
    }

    if(enableDraw == true)
    {
        enableDraw = false;
        drawStatus.textContent = "Drawing disabled. Click to enable.";
        drawStatus.style.color = "red";
    }
    else if (enableDraw == false)
    {
        enableDraw = true;
        drawStatus.textContent = "Drawing enabled. Click to disable.";
        drawStatus.style.color = "green";
    }
});


generateGrid();