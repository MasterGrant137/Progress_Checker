import { renderPage } from "./renderPage.js";
import { loadValues } from "./mainPage.js";
import { newRow } from "./mainPage.js";

window.addEventListener("DOMContentLoaded", () => {
    renderPage();
    loadValues();
    newRow();
})
