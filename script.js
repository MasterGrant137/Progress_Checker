import { renderPage } from "./scripts/renderPage.js";
import { loadValues } from "./scripts/mainPage.js";
import { newRow } from "./scripts/mainPage.js";

window.addEventListener("DOMContentLoaded", () => {
    renderPage();
    loadValues();
    newRow();
})
