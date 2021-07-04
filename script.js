const newRow = () => {
    let main = document.querySelector("main");
    let newRowButton = document.querySelector("#new-row");
    let count = 0;

    newRowButton.addEventListener("click", event => {
        let row = document.createElement("div");
        row.setAttribute("id", `row-${count}`);
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

        let minus = document.createElement("button")
        minus.setAttribute("class", "minus");
        minus.innerText = "-";
        row.appendChild(minus);

        let plus = document.createElement("button")
        plus.setAttribute("class", "plus");
        plus.innerText = "+";
        row.appendChild(plus);

        count++;
    })
}

const plusButton = () => {
    let button
}


window.addEventListener("DOMContentLoaded", () => {
    newRow();
})
