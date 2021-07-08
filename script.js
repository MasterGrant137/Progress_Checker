let rowCount = 0;
let checkboxCount = 0;
let eleObject = {};
let lastDateEntry;
// let dateEntryLength = 0;
let dateStack = [];

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

        //* newest feature, trying to get local storage to remove last item of the same type once new entry is added
        const storeDate = () => {
            let currDateEntry = date.id;
            let dateVal = date.value;

            dateStack.push(currDateEntry);

            eleObject[currDateEntry] = dateVal;
            localStorage.setItem(currDateEntry, JSON.stringify(eleObject));

            if (dateStack.length === 2) {
                let lastDateEntry = dateStack.shift();
                localStorage.removeItem(lastDateEntry);
            }
            console.log(dateStack)
        }
        // const storeDate = () => {
        //     let currDateEntry = date.id;
        //     let dateVal = date.value;

        //     eleObject[currDateEntry] = dateVal;
        //     localStorage.setItem(currDateEntry, JSON.stringify(eleObject));

        //     if (!dateEntryLength) {
        //         lastDateEntry = currDateEntry;
        //     }

        //     dateEntryLength++;

        //     if (localStorage[lastDateEntry].length < localStorage[currDateEntry].length) {
        //         localStorage.removeItem(lastDateEntry);

        //     }
        // }

        // const storeDate = () => {
        //     let currDateEntry = date.id;
        //     let dateVal = date.value;


        //     eleObject[currDateEntry] = dateVal;
        //     localStorage.setItem(currDateEntry, JSON.stringify(eleObject));

        //     if (!dateEntryLength) {
        //         lastDateEntry = currDateEntry;
        //     }

        //     dateEntryLength++;

        //     console.log(lastDateEntry)

        //     if (dateEntryLength === 2) {
        //         localStorage.removeItem(lastDateEntry);
        //         console.log(`caught ${lastDateEntry}`);
        //         console.log(`caught ${currDateEntry}`);
        //         dateEntryLength = 0;
        //         dateEntryCount2++;
        //     }

        // }

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
