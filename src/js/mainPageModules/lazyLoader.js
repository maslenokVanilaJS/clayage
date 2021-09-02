function lazyLoader(target) {
    // let targetArray = [];
    for (const element of target) {
        if (element.getAttribute('data-src') != null) {
            element.setAttribute("src", element.getAttribute('data-src'));

        };
        element.addEventListener('load', () => {

            // element.closest('.Loader').remove();
            element.removeAttribute('data-src');

        });
    }
};
lazyLoader(document.querySelectorAll(".Image"));