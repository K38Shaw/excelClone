const cellArea = document.querySelector("#cellsArea");
const formulaBar = document.getElementById("formulaBar");
var selectedCell = "A1";

function generateCells(){
    for(var x = 65; x <= 90 ; x++){
        let column = document.createElement('div')
        column.classList.add('column')

        var headerCell = document.createElement('div')
        headerCell.classList.add('headerCell')
        headerCell.innerHTML = `${String.fromCharCode(x)}`
        column.appendChild(headerCell)
        cellArea.appendChild(column)
        

        for(var y = 1; y <= 50; y++){
            var newCell = document.createElement('div')
            newCell.classList.add('cell')
            newCell.dataset.cellName = `${String.fromCharCode(x)}${y}`

            newCell.addEventListener('click', ()=>{
                selectedCell = newCell.dataset.cellName
                updateCellHighlights()
                console.log(selectedCell, newCell.dataset.cellName, x, y)
            });
            column.appendChild(newCell)

            
        }

    }
}
generateCells()

function updateCellHighlights(){
    let allCells = document.querySelectorAll('.cell');
    allCells.forEach((cell) => {
        cell.classList.remove('selected')
        if(cell.dataset.cellName == selectedCell){
            cell.classList.add('selected')
        }
        
    });
}
updateCellHighlights();