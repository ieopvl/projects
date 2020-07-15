const screen = document.querySelector(".rules");
const startBtn = document.querySelector(".button-start");



function start(callback) {
    startBtn.addEventListener("click", () => {
        screen.style.display = "none";
        callback();
    })
}