const cellsArea = document.querySelector("#cellsArea");
var selectedCell = "A1"; 

(function generateCells(){
    for(var x = 65; x <= 90; x++ ){
        let column = document.createElement("div"); 
        column.classList.add("column");

        let headerCell = document.createElement("div")
        headerCell.classList.add("headerCell"); 
        headerCell.innerHTML = String.fromCharCode(x); 
        column.appendChild(headerCell); 
        cellsArea.appendChild(column) 

        for(var y = 1; y <= 50; y++){
            let cell = document.createElement("div"); 
            cell.classList.add("cell");
            cell.dataset.cellName = `${String.fromCharCode(x)}${y}`;
            cell.addEventListener("click", ()=>{
                selectedCell = cell.dataset.cellName; 
                updateCellHighlights();
            })
            column.appendChild(cell);
        }
    }
})();

function updateCellHighlights(){
    let allCells = document.querySelectorAll(".cell"); 
    allCells.forEach((cell)=>{
        cell.classList.remove("selected"); 
        if (cell.dataset.cellName == selectedCell){
            cell.classList.add("selected");
            console.log(selectedCell, cell.dataset.cellName)
        }
    })
}

updateCellHighlights(); 

