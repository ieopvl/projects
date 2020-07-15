import {Timer} from "./Timer";
import {Circle} from "./Circle";


const pauseTimerBtn = document.querySelector(".button-control_pause");
const continueTimerBtn = document.querySelector(".button-control_continue");
const durationElement = document.querySelector("#duration");

let timer;

const circle = new Circle(document.querySelector('circle'));
circle.setStrokeDasharray();

function transformDataFromInputs(inputs, times) {
    const intervalNumbers = inputs.map(input => {
        return [input.value, input.dataset.action];
    }).filter(elem => elem[0] != 0);

    const data =[];
    for (let i = 1; i <= times.value; i++) {
        data.push(...intervalNumbers);
    }
    return data;
};

function createTimer(intervals, intervalNumber=0, init) {
    let started = false;
    let duration;

    const callbacks = {
        onStart(totalDuration) {
            if ( !started ) {
                duration = totalDuration;
                durationElement.textContent = intervals[intervalNumber][1];

                circle.setStrokeOffset(circle.perimeter());
                started = true;
            }
        },
        onComplete() {
            circle.setStrokeOffset(-circle.perimeter());
            started = false;
            if(intervalNumber < intervals.length - 1) {
                intervalNumber += 1;
                createTimer(intervals, intervalNumber, init);
            } else {
                durationElement.textContent = "Finish!"
                setTimeout(() => {
                    init();
                }, 1500)
            }
        },

        onTick(timeRemaining) {
            circle.setStrokeOffset(circle.offset(timeRemaining, duration));
        }
    }

    timer = new Timer(intervals[intervalNumber][0], callbacks)
    timer.start();
};


continueTimerBtn.addEventListener("click", () => {
    timer.start();
});

pauseTimerBtn.addEventListener("click", () => {
    timer.pause();
});


export function startApp(inputs, times, init) {
    createTimer( transformDataFromInputs(Array.from(inputs), times), 0, init);
};