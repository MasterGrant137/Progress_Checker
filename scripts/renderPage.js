let rowCount = 0;
let dateObject = {};
let dateQueue = [];
let checkboxObject = {};

export const renderPage = () => {
    let leftSideBar = document.querySelector("#left-sidebar");
    let middle = document.querySelector("#middle");
    let rightSidebar = document.querySelector("#right-sidebar");

    if (localStorage.rowCount) {
        let allLocalStorageKeys = Object.keys(localStorage);
        let retrievedRowCount = Number(localStorage.rowCount);

        for (let i = 0; i < retrievedRowCount; i++) {
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
                    let lastDateEntry = dateQueue.shift();
                    localStorage.removeItem(lastDateEntry);
                }
            });

            if (localStorage.currDateEntry) {
                let retrievedDateEntry = localStorage.currDateEntry.split(",");
                let dateKey = retrievedDateEntry[0];
                let dateObjectLength = retrievedDateEntry[1];
                let retrievedDateObject = JSON.parse(localStorage[dateKey]);
                dateObject = retrievedDateObject;

                for (let i = 0; i < dateObjectLength; i++) {
                        date.value = retrievedDateObject[`date-${rowCount}`];

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

                          allLocalStorageKeys.forEach(val=> {
                               if (val.includes("date-") && val !== dateKey) {
                                   localStorage.removeItem(val)
                               }
                          });

                }
        }
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
                        middle.appendChild(rowM);

                        let rowR = document.createElement("div");
                        rowR.setAttribute("id", `rowR-${rowCount}`);
                        rowR.setAttribute("class", "row rowR");
                        rightSidebar.appendChild(rowR);

                        let uncheckedBoxes = 0;
                        rowR.innerText = uncheckedBoxes;

                        plus.addEventListener("click", () => {
                            let plusRow = Number(plus.id.split("-")[1]);
                            let checkbox = document.createElement("input");
                            checkbox.setAttribute("class", `checkboxRow-${plusRow}`);
                            checkbox.setAttribute("type", "checkbox");
                            rowR.innerText = uncheckedBoxes;
                            rowM.appendChild(checkbox);

                            checkbox.addEventListener("click", () => {
                                let middleColumnArray = Array.from(rowM.children);
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

                                let middleColumnArray = Array.from(rowM.children);
                                localStorage.setItem("checkboxCount", middleColumnArray.length);

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

                        rowCount++;
                        localStorage.setItem("rowCount", rowCount);
        }
                                if (localStorage.checkboxObject) {
                                    checkboxObject = JSON.parse(localStorage.checkboxObject);
                                    let rowCount = Object.keys(checkboxObject).length;
                                    for (let row = 0; row < rowCount; row++) {
                                        let currentmiddleRow = document.querySelector(`#rowM-${row}`);
                                        let currentRightRow = document.querySelector(`#rowR-${row}`);
                                        let retrievedCheckboxObject = JSON.parse(localStorage.checkboxObject);
                                        let retrievedCheckboxArrays = Object.entries(retrievedCheckboxObject);
                                        let retrievedBooleans = retrievedCheckboxArrays[row][1];

                                        retrievedBooleans.map(boolean => {
                                           let checkbox = document.createElement("input");
                                            checkbox.setAttribute("type", "checkbox");
                                            checkbox.setAttribute("class", `checkboxRow-${row}`);
                                            currentmiddleRow.appendChild(checkbox);

                                            if (boolean) {
                                                checkbox.checked = true;
                                            }

                                            checkbox.addEventListener("click", () => {
                                               let middleColumnArray = Array.from(currentmiddleRow.children);
                                               let uncheckedBoxesArray = middleColumnArray.filter(checkbox => {
                                                       return !checkbox.checked;
                                                   });

                                               let uncheckedBoxes = uncheckedBoxesArray.length;
                                               currentRightRow.innerText = uncheckedBoxes;
                                               let checkboxArray = middleColumnArray.map(checkbox => {
                                                   return checkbox.checked;
                                               });

                                               let checkboxRow = Number(checkbox.className.split("-")[1]);
                                               checkboxObject[checkboxRow] = checkboxArray;
                                               localStorage.setItem("checkboxObject", JSON.stringify(checkboxObject));
                                           });

                                               let middleColumnArray = Array.from(currentmiddleRow.children);

                                               let uncheckedBoxesArray = middleColumnArray.filter(checkbox => {
                                                   return !checkbox.checked;
                                               });

                                               let uncheckedBoxes = uncheckedBoxesArray.length;
                                               currentRightRow.innerText = uncheckedBoxes;
                                        })
                                    }
                                }
    }
        // let resetPageButton = document.getElementById("reset-page");

        // resetPageButton.addEventListener("click", () => {
        //     let leftSideBar = document.getElementById("left-sidebar");
        //     let middle = document.getElementById("middle");
        //     let rightSidebar = document.getElementById("right-sidebar");

        //     for (let i = 0; i < Number(localStorage.rowCount); i++) {
        //         let rowL = document.querySelector(`#rowL-${i}`);
        //         let rowM = document.querySelector(`#rowM-${i}`);
        //         let rowR = document.querySelector(`#rowR-${i}`);

        //         leftSideBar.removeChild(rowL);
        //         middle.removeChild(rowM);
        //         rightSidebar.removeChild(rowR);
        //     }
        //         if (window.confirm("Are you sure you want to reset all of this page's content?")) {
        //             localStorage.clear();
        //         }
        //     });
}
