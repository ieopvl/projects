export class Circle {
    constructor(element) {
        this.element = element;
        this.r = element.getAttribute("r");
    }

    perimeter() {
        return this.r * 2 * Math.PI;
    }

    offset(time, duration) {
        const perimeter = this.perimeter();
        return perimeter * time / duration - perimeter;
    }

    setStrokeOffset(offset) {
        this.element.setAttribute("stroke-dashoffset", offset);
    }

    setStrokeDasharray() {
        this.element.setAttribute("stroke-dasharray", this.perimeter());
    }

}