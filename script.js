let rowCount = 0;
let eleObject = {};
let dateQueue = [];
let checkboxObject = {};

const renderPage = () => {
    let leftSideBar = document.querySelector("#left-sidebar");
    let main = document.querySelector("main");
    let rightSidebar = document.querySelector("#right-sidebar");

    if (localStorage["rowCount"]) {
        let allLocalStorageKeys = Object.keys(localStorage);
        let retrievedRowCount = Number(localStorage["rowCount"]);

        for (let i = 0; i < retrievedRowCount; i++) {
            rowCount = retrievedRowCount;

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

            if (localStorage["currDateEntry"]) {
                let retrievedDateEntry = localStorage["currDateEntry"].split(",");
                let dateKey = retrievedDateEntry[0];
                let dateObjectLength = retrievedDateEntry[1];
                let retrievedDateObject = JSON.parse(localStorage[dateKey]);
                eleObject = retrievedDateObject;

                for (let i = 0; i < dateObjectLength; i++) {
                        date.value = retrievedDateObject[`date-${rowCount}`];

                        date.addEventListener("input", () => {
                            let currDateEntry = date.id;
                            let dateVal = date.value;

                            dateQueue.push(currDateEntry);
                            eleObject[currDateEntry] = dateVal;
                            localStorage.setItem(currDateEntry, JSON.stringify(eleObject));
                            localStorage.setItem("currDateEntry", [currDateEntry, Object.keys(eleObject).length]);

                            if (dateQueue.length === 2 && dateQueue[0] !== dateQueue[1]) {
                                let lastDateEntry = dateQueue.shift();
                                localStorage.removeItem(lastDateEntry);
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
                        main.appendChild(rowM);

                        let rowR = document.createElement("div");
                        rowR.setAttribute("id", `rowR-${rowCount}`);
                        rowR.setAttribute("class", "row rowR");
                        rightSidebar.appendChild(rowR);

                        //* AREA of contention
                        let rowMDiv = document.querySelector(`#rowM-${rowCount - 1}`);
                        let uncheckedBoxes = 0;
                        rowR.innerText = uncheckedBoxes;

                        plus.addEventListener("click", () => {
                            let plusRow = Number(plus.id.split("-")[1]);
                            let checkbox = document.createElement("input");
                            checkbox.setAttribute("type", "checkbox");
                            checkbox.setAttribute("class", `checkboxRow-${plusRow}`);
                            rowR.innerText = uncheckedBoxes;
                            rowM.appendChild(checkbox);

                            checkbox.addEventListener("click", () => {
                                 //* changed rowMDiv to rowM
                                let mainColumnArray = Array.from(rowM.children);
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

                            //* changed rowMDiv to rowM
                                let mainColumnArray = Array.from(rowM.children);
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


                        if (localStorage["checkboxObject"]) {

                            let pacerCount = 0;
                            for (let pacer = 0; pacer < retrievedRowCount; pacer++) {
                                pacerCount++
                            }

                            let retrievedCheckboxObject = JSON.parse(localStorage["checkboxObject"]);
                            let retrievedCheckboxArray = retrievedCheckboxObject[pacerCount];
                            console.log(retrievedCheckboxArray)
                            for (let j = 0; j < retrievedCheckboxArray; j++) {
                                console.log(pacerCount)
                                let retrievedBooleans = retrievedCheckboxArray[j];
                                console.log(`retrievedBooleans ${retrievedBooleans}`)
                                let plusRow = Number(plus.id.split("-")[1]);
                                let checkbox = document.createElement("input");
                                checkbox.setAttribute("type", "checkbox");
                                checkbox.setAttribute("class", `checkboxRow-${plusRow}`);

                                rowM.appendChild(checkbox);
                                rowR.innerText = uncheckedBoxes;
                                rowM.appendChild(checkbox);
                                checkbox.checked = retrievedBooleans;

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

                                //* changed rowMDiv to rowM
                                let mainColumnArray = Array.from(rowM.children);
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

                            }
                        }

                        // rowCount++;
                        localStorage.setItem("rowCount", rowCount);

                    }
                }
}


const newRow = () => {
    let leftSideBar = document.querySelector("#left-sidebar");
    let main = document.querySelector("main");
    let rightSidebar = document.querySelector("#right-sidebar");
    let newRowButton = document.querySelector("#new-row");

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
            let currDateEntry = date.id;
            let dateVal = date.value;

            dateQueue.push(currDateEntry);
            eleObject[currDateEntry] = dateVal;
            localStorage.setItem(currDateEntry, JSON.stringify(eleObject));
            localStorage.setItem("currDateEntry", [currDateEntry, Object.keys(eleObject).length]);

            if (dateQueue.length === 2 && dateQueue[0] !== dateQueue[1]) {
                        let lastDateEntry = dateQueue.shift();
                        localStorage.removeItem(lastDateEntry);
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
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("class", `checkboxRow-${plusRow}`);
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
}

window.addEventListener("DOMContentLoaded", () => {
    renderPage();
    newRow();
})
