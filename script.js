let rowCount = 0;
let checkboxCount = 0;

const newRow = () => {
    let main = document.querySelector("main");
    let leftSideBar = document.querySelector("#left-sidebar");
    let newRowButton = document.querySelector("#new-row");

    newRowButton.addEventListener("click", event => {
        let rowL = document.createElement("div");
        rowL.setAttribute("id", `rowL-${rowCount}`);
        rowL.setAttribute("class", "row");
        leftSideBar.appendChild(rowL);

        let rowM = document.createElement("div");
        rowM.setAttribute("id", `rowM-${rowCount}`);
        rowM.setAttribute("class", "row");
        main.appendChild(rowM);

        let removeRow = document.createElement("p");
        removeRow.setAttribute("class", "remove-row");
        removeRow.innerText = "✂️";
        rowL.appendChild(removeRow);

        let date = document.createElement("input");
        date.setAttribute("type", "date");
        date.setAttribute("class", "date");
        rowL.appendChild(date);

        let minus = document.createElement("button");
        minus.setAttribute("id", `minus-${rowCount}`);
        minus.setAttribute("class", "minus");
        minus.innerText = "-";
        rowL.appendChild(minus);

        let plus = document.createElement("button");
        plus.setAttribute("id", `plus-${rowCount}`);
        plus.setAttribute("class", "plus");
        plus.innerText = "+";
        rowL.appendChild(plus);

        plus.addEventListener("click", event => {
            let checkboxContainer = document.createElement("span");
            let checkbox = document.createElement("input");

            checkboxContainer.setAttribute("id", `checkbox-${checkboxCount}`);
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("class", "checkbox")

            rowM.appendChild(checkboxContainer);
            checkboxContainer.appendChild(checkbox);

            counters(rowCount);
            checkboxCount++;
        });

        rowCount++;
    })
}


const counters = (rowCount) => {
    let countAreaExists = document.querySelector(`#count-area-${rowCount}`);
    let rightSidebar = document.querySelector("#right-sidebar");
    
    if (!countAreaExists) {
        let newCountArea = document.createElement("div");
        newCountArea.setAttribute("id", `count-area-${rowCount}`);
        newCountArea.setAttribute("class", "count-area");

        countAreaExists = newCountArea;
    }



    let rowLength = document.querySelector(`#rowM-${rowCount - 1}`).children.length;
    console.log(countAreaExists);

    // countAreaExists.innerText = "";
    countAreaExists.innerText = rowLength;

    rightSidebar.appendChild(countAreaExists);
}

window.addEventListener("DOMContentLoaded", () => {
    newRow();
})
