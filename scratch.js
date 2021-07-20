if (localStorage["checkboxObject"]) {
    for (let i = 0; i < rowCount; i++) {
        let rowM = document.createElement("div");
        rowM.setAttribute("id", `rowM-${rowCount}`);
        rowM.setAttribute("class", "row rowM");
        main.appendChild(rowM);

            let rowMDiv = document.querySelector(`#rowM-${rowCount}`);
            let uncheckedBoxes = 0;

            //* this doesn't work as expected, it doesn't add the event listeners
            plus.addEventListener("click", () => {
                let plusRow = Number(plus.id.split("-")[1]);
                let checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("class", `checkboxRow-${plusRow}`);
                rowR.innerText = uncheckedBoxes;
                rowM.appendChild(checkbox);



                    let retrievedCheckboxObject = JSON.parse(localStorage["checkboxObject"]);

                    for (let i = 0; i < Object.keys(retrievedCheckboxObject).length; i++) {
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

                    }

            });
    }
}
    let rowR = document.createElement("div");
    rowR.setAttribute("id", `rowR-${rowCount}`);
    rowR.setAttribute("class", "row rowR");
    // rowR.innerText = uncheckedBoxes;
    rightSidebar.appendChild(rowR);

    rowCount++;
    localStorage.setItem("rowCount", rowCount);
}
}
