let rowCount = 0;
let checkboxCount = 0;
let eleObject = {};

const renderPage = () => {
    // let leftSideBarKids = document.querySelector("#left-sidebar").children;
    // let existingDate = localStorage[``]

    // leftSideBarKids.forEach((rowL, i) => {

    // });
}

const newRow = () => {
    let leftSideBar = document.querySelector("#left-sidebar");
    let main = document.querySelector("main");
    let rightSidebar = document.querySelector("#right-sidebar");
    let newRowButton = document.querySelector("#new-row");

    newRowButton.addEventListener("click", () => {
        let rowL = document.createElement("div");
        rowL.setAttribute("id", `rowL-${rowCount}`);
        rowL.setAttribute("class", "row");
        leftSideBar.appendChild(rowL);

        let removeRow = document.createElement("span");
        removeRow.setAttribute("class", "remove-row");
        removeRow.innerText = "✂️";
        rowL.appendChild(removeRow);

        let date = document.createElement("input");
        date.setAttribute("type", "date");
        date.setAttribute("id", `date-${rowCount}`);
        date.setAttribute("class", "date");
        rowL.appendChild(date);

        const storeDate = () => {
           let currInput = date.id;
           let dateVal = date.value;

           eleObject["currDateObject"] = dateVal;
           localStorage.setItem(currInput, JSON.stringify(eleObject));
           localStorage.removeItem()

        }

        date.addEventListener("change", storeDate);
        // date.addEventListener("keyup", storeDate);
        // date.addEventListener("click", storeDate);

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

        plus.addEventListener("click", () => {
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            rowLength++;
            rowR.innerText = rowLength;
            rowM.appendChild(checkbox);
        });

        let rowM = document.createElement("div");
        rowM.setAttribute("id", `rowM-${rowCount}`);
        rowM.setAttribute("class", "row");
        main.appendChild(rowM);
        let rowLength = document.querySelector(`#rowM-${rowCount}`).children.length;

        let rowR = document.createElement("div");
        rowR.setAttribute("id", `rowR-${rowCount}`);
        rowR.setAttribute("class", "row");
        rowR.innerText = rowLength;
        rightSidebar.appendChild(rowR);

        rowCount++;

    })
}

window.addEventListener("DOMContentLoaded", () => {
    renderPage();
    newRow();
})
