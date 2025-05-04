const GRID_DIMENSIONS = 16; // Grid is always square, in dimensions GRID_DIMENSIONSxGRID_DIMENSIONS
const gridContainer = document.querySelector(".grid-container");

// Generate grid
for (let i = 0; i < GRID_DIMENSIONS*GRID_DIMENSIONS; i++)
{
    const newGridItem = document.createElement("div");
    newGridItem.classList.add("grid-item");

    gridContainer.appendChild(newGridItem);
}