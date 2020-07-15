export class Timer {
    constructor(timeValue, callbacks) {
        this.time = parseFloat(timeValue);

        this.onStart = callbacks.onStart || null;
        this.onComplete = callbacks.onComplete || null;
        this.onTick = callbacks.onTick || null;
    }

    tick() {
        if (this.currentTime <= 0) {
            this.pause();
            if(this.onComplete) this.onComplete();
        } else {
            this.currentTime = this.currentTime - 0.05;
            if (this.onTick) this.onTick(this.currentTime);
        }
    }

    start() {
        if(this.timerId) return;
        if(this.onStart) this.onStart(this.currentTime);
        this.tick();
        this.timerId = setInterval(this.tick.bind(this), 50);
    }

    pause() {
        clearInterval(this.timerId)
        this.timerId = null;
    }

    get currentTime() {
        return this.time;
    }

    set currentTime(value) {
        this.time = value;
    }
}