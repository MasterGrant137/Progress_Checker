let rowCount = 0;
let dateObject = {};
let dateQueue = [];
let checkboxObject = {};

export const loadValues = () => {
    if (localStorage.rowCount) rowCount = Number(localStorage.rowCount);
    if (localStorage.dateQueue) dateQueue = JSON.parse(localStorage.dateQueue);
    let currDateKey = dateQueue[dateQueue.length - 1];
    if (localStorage[currDateKey]) dateObject = JSON.parse(localStorage[currDateKey]);
    if (localStorage.checkboxObject) checkboxObject = JSON.parse(localStorage.checkboxObject);
}

export const newRow = () => {

    let leftSideBar = document.getElementById("left-sidebar");
    let middle = document.getElementById("middle");
    let rightSidebar = document.getElementById("right-sidebar");
    let newRowButton = document.getElementById("new-row");


    newRowButton.addEventListener("click", () => {
        let rowL = document.createElement("div");
        rowL.id = `rowL-${rowCount}`;
        rowL.className = "row rowL";
        leftSideBar.appendChild(rowL);

        let copyRowInfo = document.createElement("span");
        copyRowInfo.id = `copy-row-info-${rowCount}`;
        copyRowInfo.className = "copy-row-info";
        copyRowInfo.innerText = "📎";
        rowL.appendChild(copyRowInfo);

        copyRowInfo.addEventListener("click", () => {
            let copiedTextRow = Number(copyRowInfo.id.split("-")[3]);
            let copiedText = `date: ${dateObject[`date-${copiedTextRow}`]}, finished: ${checkboxObject[copiedTextRow].filter(cbox => cbox).length}, left: ${checkboxObject[copiedTextRow].filter(cbox => !cbox).length}`;

            let tempTextbox = document.createElement("input");
            tempTextbox.type = "text";
            tempTextbox.value = copiedText;
            rowL.appendChild(tempTextbox);

            tempTextbox.select();
            // tempTextbox.selectionRange(0, 99999);
            document.execCommand("copy");

            rowL.removeChild(tempTextbox);
            alert("Sucessfully copied to clipboard!");
        });

        let date = document.createElement("input");
        date.type = "date";
        date.id = `date-${rowCount}`;
        date.className = "date";
        rowL.appendChild(date);

        date.addEventListener("input", () => {
            let currDateKey = date.id;
            let dateVal = date.value;
            dateQueue.push(currDateKey);
            dateObject[currDateKey] = dateVal;

            console.log(currDateKey);
            if (dateQueue.length === 3) {
                console.log("first cond", `dateQueue: ${dateQueue}`);
                console.log("1st cond date object: ", dateObject);
                let lastDateKey = dateQueue.shift();
                localStorage.removeItem(lastDateKey);
            } else if (dateQueue.length === 2 && dateQueue[0] !== dateQueue[1]) {
                console.log("second cond", `dateQueue: ${dateQueue}`);
                console.log("2nd cond date object: ", dateObject);
                let lastDateKey = dateQueue.shift();
                localStorage.removeItem(lastDateKey);
            } else if (dateQueue.length === 2 && dateQueue[0] === dateQueue[1]) {
                console.log("third cond", `dateQueue: ${dateQueue}`);
                console.log("3rd cond date object: ", dateObject);
                let lastDateKey = dateQueue.shift();
                localStorage.removeItem(lastDateKey);
                location.reload();
            }

            console.log(currDateKey);
            localStorage.setItem("dateQueue", JSON.stringify(dateQueue));
            localStorage.setItem("currDateEntry", [currDateKey, Object.keys(dateObject).length]);
            localStorage.setItem(currDateKey, JSON.stringify(dateObject));
        });

            let minus = document.createElement("button");
            minus.id = `minus-${rowCount}`;
            minus.className = "minus";
            minus.innerText = "-";
            rowL.appendChild(minus);

            let rowM = document.createElement("div");
            rowM.id = `rowM-${rowCount}`;
            rowM.className = "row rowM";
            middle.appendChild(rowM);

            let rowMDiv = document.querySelector(`#rowM-${rowCount}`);
            let uncheckedBoxes = 0;

            minus.addEventListener("click", () => {
                let minusRow = Number(minus.id.split("-")[1]);
                let rowM = document.getElementById(`rowM-${minusRow}`);
                let middleColumnArray = Array.from(rowMDiv.children);
                let lastCheckbox = middleColumnArray[middleColumnArray.length - 1];

                if (rowM && lastCheckbox) {
                   rowM.removeChild(lastCheckbox);

                   if (!lastCheckbox.checked) {
                       rowR.innerText = Number(rowR.innerText) - 1;
                   }

                   checkboxObject[minusRow].pop();
                   localStorage.checkboxObject = JSON.stringify(checkboxObject);

                }
            });

            let plus = document.createElement("button");
            plus.id = `plus-${rowCount}`;
            plus.className = "plus";
            plus.innerText = "+";
            rowL.appendChild(plus);

            checkboxObject[Number(plus.id.split("-")[1])] = [];
            localStorage.setItem("checkboxObject", JSON.stringify(checkboxObject));

            plus.addEventListener("click", () => {
                let plusRow = Number(plus.id.split("-")[1]);
                let checkbox = document.createElement("input");
                checkbox.className = `checkboxRow-${plusRow}`;
                checkbox.type = "checkbox";
                rowR.innerText = uncheckedBoxes;
                rowM.appendChild(checkbox);

                checkbox.addEventListener("click", () => {
                    let middleColumnArray = Array.from(rowMDiv.children);
                    let uncheckedBoxesArray = middleColumnArray.filter(checkbox => {
                            return !checkbox.checked;
                        });

                    uncheckedBoxes = uncheckedBoxesArray.length;
                    rowR.innerText = uncheckedBoxes;
                    let checkboxArray = middleColumnArray.map(checkbox => {
                        return checkbox.checked;
                    });

                    let checkboxRow = Number(checkbox.className.split("-")[1]);
                    checkboxObject[checkboxRow] = checkboxArray;
                    localStorage.setItem("checkboxObject", JSON.stringify(checkboxObject));
                });

                    let middleColumnArray = Array.from(rowMDiv.children);

                    let checkboxArray = middleColumnArray.map(checkbox => {
                        return checkbox.checked;
                    });

                    checkboxObject[plusRow] = checkboxArray;
                    localStorage.setItem("checkboxObject", JSON.stringify(checkboxObject));

                    let uncheckedBoxesArray = middleColumnArray.filter(checkbox => {
                        return !checkbox.checked;
                    });

                    uncheckedBoxes = uncheckedBoxesArray.length;
                    rowR.innerText = uncheckedBoxes;
            });

        let rowR = document.createElement("div");
        rowR.id = `rowR-${rowCount}`;
        rowR.className = "row rowR";
        rowR.innerText = uncheckedBoxes;
        rightSidebar.appendChild(rowR);

        rowCount++;
        localStorage.setItem("rowCount", rowCount);
    });

}

export const resetPage = () => {
    let resetPageButton = document.getElementById("reset-page");

    resetPageButton.addEventListener("click", () => {
        let leftSideBar = document.getElementById("left-sidebar");
        let middle = document.getElementById("middle");
        let rightSidebar = document.getElementById("right-sidebar");

        if (window.confirm("Are you sure you want to reset all of this page's content?")) {
            rowCount = 0;
            dateObject = {};
            dateQueue = [];
            checkboxObject = {};

            for (let i = 0; i < Number(localStorage.rowCount); i++) {
                let rowL = document.querySelector(`#rowL-${i}`);
                let rowM = document.querySelector(`#rowM-${i}`);
                let rowR = document.querySelector(`#rowR-${i}`);

                leftSideBar.removeChild(rowL);
                middle.removeChild(rowM);
                rightSidebar.removeChild(rowR);
            }

            localStorage.clear();
        }
    });
}
