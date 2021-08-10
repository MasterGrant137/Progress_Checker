import { renderPage } from "./renderPage.js";
import { loadValues, newRow, resetPage } from "./mainPage.js";

window.addEventListener("DOMContentLoaded", () => {
    renderPage();
    loadValues();
    newRow();
    resetPage();
})
