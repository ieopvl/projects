function switchHidden(elem) {
    elem.hidden = !elem.hidden;
}

export function toggleHiddenByEvent(control, element, event) {
    control.addEventListener(event, e => switchHidden(element))
}