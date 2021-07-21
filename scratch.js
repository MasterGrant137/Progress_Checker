let pacerCount = 0;
for (let pacer = 0; pacer < retrievedRowCount; pacer++) {
    pacerCount++
}

let retrievedCheckboxArray = retrievedCheckboxObject[pacerCount];

let retrievedCheckboxArrayLengths = [];

for (let key in retrievedCheckboxObject) {
    retrievedCheckboxArrayLengths.push(retrievedCheckboxObject[key].length);
}
console.log(retrievedCheckboxArrayLengths)
console.log(retrievedCheckboxArray)


  //*this is the start of the forEach
  retrievedCheckboxArrays.forEach((array, row) => {
    let retrievedBooleans = array[1];
    console.log(retrievedBooleans)
    let plusRow = Number(plus.id.split("-")[1]);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", `checkboxRow-${row}`);

    for (let i = 0; i < localStorage["rowCount"]; i++) {

        rowM.appendChild(checkbox);
        rowR.innerText = uncheckedBoxes;
        rowM.appendChild(checkbox);
        // console.log(i)
        checkbox.checked = retrievedBooleans;

        checkbox.addEventListener("click", () => {
            //*changed from rowMDiv to rowM
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
    }

});
//*this is the end of the forEach
