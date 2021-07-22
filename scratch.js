let retrievedCheckboxObject = JSON.parse(localStorage["checkboxObject"]);
let retrievedCheckboxArrays = Object.entries(retrievedCheckboxObject);
let currentMainRow = Number(mainRow.id.split("-")[1]);
for (let i = 0; i < currentMainRow; i++) {
//     //*this is the start of the forEach
console.log(currentMainRow)
retrievedCheckboxArrays.forEach((array, row) => {
});
}



// if (localStorage["checkboxObject"]) {

                        //     let retrievedCheckboxObject = JSON.parse(localStorage["checkboxObject"]);
                        //     let retrievedCheckboxArrays = Object.entries(retrievedCheckboxObject);
                        //     console.log(retrievedCheckboxArrays)
                        //     //*this is the start of the forEach
                        //     retrievedCheckboxArrays.forEach((array, row) => {
                        //         let plusRow = Number(plus.id.split("-")[1]);
                        //         if (localStorage["checkboxObject"][plusRow]) {
                        //             let retrievedBooleans = array[1];
                        //             for (let i = 0; i < retrievedBooleans.length; i++) {
                        //                 // let plusRow = Number(plus.id.split("-")[1]);
                        //                 let checkbox = document.createElement("input");
                        //                 checkbox.setAttribute("type", "checkbox");
                        //                 checkbox.setAttribute("class", `checkboxRow-${plusRow}`);

                        //                 rowM.appendChild(checkbox);
                        //                 rowR.innerText = uncheckedBoxes;
                        //                 rowM.appendChild(checkbox);
                        //                 // console.log(i)
                        //                 checkbox.checked = retrievedBooleans[i];

                        //                 checkbox.addEventListener("click", () => {
                        //                     //*changed from rowMDiv to rowM
                        //                     let mainColumnArray = Array.from(rowM.children);
                        //                     let uncheckedBoxesArray = mainColumnArray.filter(checkbox => {
                        //                             return !checkbox.checked;
                        //                      });

                        //                     uncheckedBoxes = uncheckedBoxesArray.length;
                        //                     rowR.innerText = uncheckedBoxes;
                        //                     let checkboxArray = mainColumnArray.map(checkbox => {
                        //                         return checkbox.checked;
                        //                     });

                        //                     let checkboxRow = Number(checkbox.className.split("-")[1]);
                        //                     checkboxObject[checkboxRow] = checkboxArray;
                        //                     localStorage.setItem("checkboxObject", JSON.stringify(checkboxObject));
                        //                 });

                        //                 //* changed rowMDiv to rowM
                        //                 let mainColumnArray = Array.from(rowM.children);
                        //                 localStorage.setItem("checkboxCount", mainColumnArray.length);

                        //                 let checkboxArray = mainColumnArray.map(checkbox => {
                        //                     return checkbox.checked;
                        //             });

                        //                 checkboxObject[plusRow] = checkboxArray;
                        //                 localStorage.setItem("checkboxObject", JSON.stringify(checkboxObject));

                        //                 let uncheckedBoxesArray = mainColumnArray.filter(checkbox => {
                        //                 return !checkbox.checked;
                        //                 });

                        //                 uncheckedBoxes = uncheckedBoxesArray.length;
                        //                 rowR.innerText = uncheckedBoxes;
                        //             }
                        //         }

                        //     });
                        //     //*this is the end of the forEach
                        // }
