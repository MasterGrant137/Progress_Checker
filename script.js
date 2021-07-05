let rowCount = 0;
let checkboxCount = 0;

const newRow = () => {
    let main = document.querySelector("main");
    let leftSideBar = document.querySelector("#left-sidebar");
    let newRowButton = document.querySelector("#new-row");

    newRowButton.addEventListener("click", event => {
        let row = document.createElement("div");
        row.setAttribute("id", `row-${rowCount}`);
        row.setAttribute("class", "row");
        main.appendChild(row);

        let removeRow = document.createElement("p");
        removeRow.setAttribute("class", "remove-row");
        removeRow.innerText = "✂️";
        row.appendChild(removeRow);

        let date = document.createElement("input");
        date.setAttribute("type", "date");
        date.setAttribute("class", "date");
        row.appendChild(date);

        let minus = document.createElement("button");
        minus.setAttribute("id", `minus-${rowCount}`);
        minus.setAttribute("class", "minus");
        minus.innerText = "-";
        row.appendChild(minus);

        let plus = document.createElement("button");
        plus.setAttribute("id", `plus-${rowCount}`);
        plus.setAttribute("class", "plus");
        plus.innerText = "+";
        row.appendChild(plus);

        plus.addEventListener("click", event => {
            let checkboxContainer = document.createElement("span");
            let checkbox = document.createElement("input");

            checkboxContainer.setAttribute("id", `checkbox-${checkboxCount}`);
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("class", "checkbox")

            row.appendChild(checkboxContainer);
            checkboxContainer.appendChild(checkbox);

            counters(rowCount);
            checkboxCount++;
        });

        rowCount++;
    })
}


const counters = (rowCount) => {
    // console.log(runningRowCount);
    // let sidebar = document.querySelector("#sidebar");
    // let currentRowCount = document.querySelector(`#row-${runningRowCount}`);
    // console.log(runningRowCount)
    // let countArea = document.createElement("div");
    // countArea.setAttribute("id", `count-area-${runningRowCount}`);
    // countArea.setAttribute("class", "count-area");


    //! let testCount = document.querySelector(`#row-0`).children.length;
    // console.log(rowCount - 1)
    testCount = document.querySelector(`#row-${rowCount - 1}`).children.length;
    console.log(testCount);
    // let rowCheckboxCount = currentRow.children.length;
    // countArea.innerText = rowCheckboxCount;
    // sidebar.appendChild(countArea);
}

window.addEventListener("DOMContentLoaded", () => {
    newRow();
})
