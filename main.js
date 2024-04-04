const cellsArea = document.querySelector("#cellsArea");

var selectedCell = "A1";


(function generateCells(){
    for(let x = 65; x <= 90; x++){
        //create a new element that is a div
        //set its class to headerCell
        //set its innerHTML value x
        let column = document.createElement("div")
        column.classList.add("column")

        var headerCell = document.createElement('div')
        headerCell.classList.add("headerCell")
        headerCell.innerHTML = String.fromCharCode(x)

        column.appendChild(headerCell)

        cellsArea.appendChild(column)

        // console.log(`${String.fromCharCode(x)}${x}`)

        for (let y = 1; y <= 50; y++) {
            var newCell = document.createElement('div')
            newCell.classList.add("cell")
            // 
            // console.log(`${String.fromCharCode(x)}${y}`)
            newCell.dataset.cellName = `${String.fromCharCode(x)}${y}`


            newCell.addEventListener("click", (div)=>{
                console.log(div)
                console.log(newCell)
                selectedCell = newCell.dataset.cellName;
                console.log(selectedCell)
                newCell.style.backgroundColor = 'green'

                newCell.classList.add("selected")
                updateCellHighlights()
                console.log(selectedCell, newCell.dataset.cellName, x, y);
            })
            console.log(`${newCell.dataset.cellName}`)
            newCell.style.backgroundColor = 'red'
            column.appendChild(newCell)
            // console.log(String.fromCharCode(x))
        }
    }
})();

function updateCellHighlights(){
    let allCells = document.querySelectorAll(".cell")
    allCells.forEach((cell)=>{
        cell.classList.remove("selected")
        if(cell.dataset.cellName == selectedCell){
            cell.classList.add("selected")
        }
    })
}
updateCellHighlights()
