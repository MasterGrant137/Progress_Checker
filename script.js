import { renderPage } from "./scripts/renderPage.js";
import { loadValues, newRow, resetPage } from "./scripts/mainPage.js";

window.addEventListener("DOMContentLoaded", () => {
    renderPage();
    loadValues();
    newRow();
    resetPage();
})
