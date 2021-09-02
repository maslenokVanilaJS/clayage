function touchActionModificator(target, modificator) {
    for (const item of target) {
        item.ontouchstart = () => {
            item.classList.toggle(modificator);
        };
    }
}

touchActionModificator(document.querySelectorAll(".ImageBox-Item"), 'ImageBox-Item__FullHeight');