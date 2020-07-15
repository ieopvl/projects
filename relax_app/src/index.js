import './styles/index.css';
import {toggleHiddenByEvent} from "./modules/helpers";
import {startApp} from "./modules/App";

const titleElement = document.querySelector(".settings__title");
const settingsSet = document.querySelector(".settings__controls");
const startAppBtn = document.querySelector(".button-start_app");
const visualizationBLock = document.querySelector(".visualization");
const inputs = document.querySelectorAll(".settings__input_time");
const times = document.querySelector(".settings__input_times");

function init() {
    visualizationBLock.hidden = true;
    settingsSet.hidden = false;
}
init();

toggleHiddenByEvent(titleElement, settingsSet, "click");
toggleHiddenByEvent(startAppBtn, settingsSet, "click");
toggleHiddenByEvent(startAppBtn, visualizationBLock, "click");
toggleHiddenByEvent(titleElement, visualizationBLock, "click");

startAppBtn.addEventListener("click", () => {
    startApp(inputs, times, init);
});





