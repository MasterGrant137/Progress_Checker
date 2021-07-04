let rowCount = 0;

const newRow = () => {
    let main = document.querySelector("main");
    let newRowButton = document.querySelector("#new-row");

    newRowButton.addEventListener("click", event => {
        let row = document.createElement("div");
        row.setAttribute("id", `row-${rowCount}`);
        row.setAttribute("class", "row");
        main.appendChild(row);

        let removeRow = document.createElement("p");
        removeRow.setAttribute("class", "remove-row");
        removeRow.innerText = "✂️";
        row.appendChild(removeRow);

        let date = document.createElement("input");
        date.setAttribute("type", "date");
        date.setAttribute("class", "date");
        row.appendChild(date);

        let minus = document.createElement("button");
        minus.setAttribute("id", `minus-${rowCount}`);
        minus.setAttribute("class", "minus");
        minus.innerText = "-";
        row.appendChild(minus);

        let plus = document.createElement("button");
        plus.setAttribute("id", `plus-${rowCount}`);
        plus.setAttribute("class", "plus");
        plus.innerText = "+";
        row.appendChild(plus);
        let checkboxCount = 0;

        plus.addEventListener("click", event => {
            let checkboxContainer = document.createElement("span");
            let checkbox = document.createElement("input");

            checkboxContainer.setAttribute("id", `checkbox-${checkboxCount}`);
            checkbox.setAttribute("type", "checkbox");

            row.appendChild(checkboxContainer);
            checkboxContainer.appendChild(checkbox);

            checkboxCount++;
        });

        rowCount++;
    })
}

window.addEventListener("DOMContentLoaded", () => {
    newRow();
})
