import { renderPage } from "./renderPage.js";
import { newRow } from "./mainPage.js";

let rowCount = 0;
let eleObject = {};
let dateQueue = [];
let checkboxObject = {};



window.addEventListener("DOMContentLoaded", () => {
    renderPage();
    newRow();
})
