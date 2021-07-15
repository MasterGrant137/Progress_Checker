let rowCount = 0;
let checkboxCount = 0;
let eleObject = {};
let dateQueue = [];

const renderPage = () => {
    let leftSideBar = document.querySelector("#left-sidebar");
    let main = document.querySelector("main");
    let rightSidebar = document.querySelector("#right-sidebar");

    if (localStorage["currDateEntry"]) {
        let allLocalStorageKeys = Object.keys(localStorage);
        let retrievedDateEntry = localStorage["currDateEntry"].split(",");
        let dateKey = retrievedDateEntry[0];
        let objectLength = retrievedDateEntry[1];
        let retrievedDateObject = JSON.parse(localStorage[dateKey]);
        eleObject = retrievedDateObject;

        for (let i = 0; i < objectLength; i++) {
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
                date.value = retrievedDateObject[`date-${rowCount}`];

                const storeDate = () => {
                    let currDateEntry = date.id;
                    let dateVal = date.value;

                    dateQueue.push(currDateEntry);
                    eleObject[currDateEntry] = dateVal;

                    if (dateQueue.length === 2) {
                        let lastDateEntry = dateQueue.shift();
                        localStorage.removeItem(lastDateEntry);
                    }
                }

                date.addEventListener("change", storeDate);

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
        }
       return allLocalStorageKeys.forEach(val=> {
            if (val.includes("date-") && val !== dateKey) {
                localStorage.removeItem(val)
            }
         })
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
            let currDateEntry = date.id;
            let dateVal = date.value;

            dateQueue.push(currDateEntry);
            eleObject[currDateEntry] = dateVal;
            localStorage.setItem(currDateEntry, JSON.stringify(eleObject));
            localStorage.setItem("currDateEntry", [currDateEntry, Object.keys(eleObject).length]);

            if (dateQueue.length === 2) {
                let lastDateEntry = dateQueue.shift();
                localStorage.removeItem(lastDateEntry);
            }
        }

        date.addEventListener("change", storeDate);

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
