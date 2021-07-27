let rowCount = 0;
let dateObject = {};
let dateQueue = [];
let checkboxObject = {};

export const loadValues = () => {
    if (localStorage.rowCount) rowCount = Number(localStorage.rowCount);
    if (localStorage.dateQueue) dateQueue = JSON.parse(localStorage.dateQueue);
    let currDateKey = dateQueue[dateQueue.length - 1];
    if (localStorage[currDateKey]) dateObject = JSON.parse(localStorage[currDateKey]);
    else if (!localStorage.dateQueue) localStorage.setItem("dateQueue", JSON.stringify(dateQueue));
    if (localStorage.checkboxObject) checkboxObject = JSON.parse(localStorage.checkboxObject);
}

export const newRow = () => {
    console.log(rowCount)
    console.log(dateObject)
    console.log(dateQueue)
    console.log(checkboxObject)


    let leftSideBar = document.querySelector("#left-sidebar");
    let main = document.querySelector("main");
    let rightSidebar = document.querySelector("#right-sidebar");
    let newRowButton = document.querySelector("#new-row");
    let resetPageButton = document.querySelector("#reset-page");

    newRowButton.addEventListener("click", () => {
        let rowL = document.createElement("div");
        rowL.setAttribute("id", `rowL-${rowCount}`);
        rowL.setAttribute("class", "row rowL");
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

        date.addEventListener("input", () => {
            let currDateKey = date.id;
            let dateVal = date.value;
            dateQueue.push(currDateKey);
            dateObject[currDateKey] = dateVal;
            localStorage.setItem("dateQueue", JSON.stringify(dateQueue));
            localStorage.setItem(currDateKey, JSON.stringify(dateObject));
            localStorage.setItem("currDateEntry", [currDateKey, Object.keys(dateObject).length]);

            if (dateQueue.length === 2 && dateQueue[0] !== dateQueue[1]) {
                let lastDateKey = dateQueue.shift();
                localStorage.removeItem(lastDateKey);
            }
        });

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

            let rowM = document.createElement("div");
            rowM.setAttribute("id", `rowM-${rowCount}`);
            rowM.setAttribute("class", "row rowM");
            main.appendChild(rowM);

            let rowMDiv = document.querySelector(`#rowM-${rowCount}`);
            let uncheckedBoxes = 0;

            plus.addEventListener("click", () => {
                let plusRow = Number(plus.id.split("-")[1]);
                let checkbox = document.createElement("input");
                checkbox.setAttribute("class", `checkboxRow-${plusRow}`);
                checkbox.setAttribute("type", "checkbox");
                rowR.innerText = uncheckedBoxes;
                rowM.appendChild(checkbox);

                checkbox.addEventListener("click", () => {
                    let mainColumnArray = Array.from(rowMDiv.children);
                    let uncheckedBoxesArray = mainColumnArray.filter(checkbox => {
                            return !checkbox.checked;
                        });

                    uncheckedBoxes = uncheckedBoxesArray.length;
                    rowR.innerText = uncheckedBoxes;
                    let checkboxArray = mainColumnArray.map(checkbox => {
                        return checkbox.checked;
                    });

                    let checkboxRow = Number(checkbox.className.split("-")[1]);
                    checkboxObject[checkboxRow] = checkboxArray;
                    localStorage.setItem("checkboxObject", JSON.stringify(checkboxObject));
                });

                    let mainColumnArray = Array.from(rowMDiv.children);
                    localStorage.setItem("checkboxCount", mainColumnArray.length);

                    let checkboxArray = mainColumnArray.map(checkbox => {
                        return checkbox.checked;
                    });

                    checkboxObject[plusRow] = checkboxArray;
                    localStorage.setItem("checkboxObject", JSON.stringify(checkboxObject));

                    let uncheckedBoxesArray = mainColumnArray.filter(checkbox => {
                        return !checkbox.checked;
                    });

                    uncheckedBoxes = uncheckedBoxesArray.length;
                    rowR.innerText = uncheckedBoxes;
            });

        let rowR = document.createElement("div");
        rowR.setAttribute("id", `rowR-${rowCount}`);
        rowR.setAttribute("class", "row rowR");
        rowR.innerText = uncheckedBoxes;
        rightSidebar.appendChild(rowR);

        rowCount++;
        localStorage.setItem("rowCount", rowCount);
    });

    resetPageButton.addEventListener("click", () => {

    });
}
