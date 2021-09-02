function getImgOnPage(img) {
    let imgArr = [];
    for (const element of img) {
        imgArr.push(element);
    }
    return imgArr;
}
console.log(getContainerRect(getImgOnPage));

function createImgLoaders(getImgs) {
    getImgs(document.querySelectorAll(".ImageBox")).forEach(element => {

        document.body.insertAdjacentHTML('afterbegin', `<div class="MasterPage-Loader Loader"></div>`);


    });

}

function getImgRect(getImgs) {
    let rects = [];
    getImgs(document.querySelectorAll(".ImageBox")).forEach(element => {

        rects.push(element.getBoundingClientRect());



    });
    return rects;
}

function getContainerRect(getImgs) {
    let rects = [];
    getImgs(document.querySelectorAll(".ImageBox")).forEach(element => {

        rects.push(element.getBoundingClientRect());



    });
    return rects;
}

function setRectsLoader(getImgRects, getImgs, getContainerRect) {
    let computedRectsTop = [];
    let computedRectsLeft = [];
    let i = 0;
    getImgRects(getImgs).forEach(element => {
        computedRectsTop.push(element.top);
    });
    getContainerRect(getImgs).forEach(element => {
        computedRectsLeft.push(element.left + element.width / 2);

    });
    for (const loader of document.querySelectorAll(".Loader")) {
        loader.style.top = (computedRectsTop[i] + pageYOffset) + 100 + 'px';
        loader.style.left = (computedRectsLeft[i] + pageXOffset) - loader.getBoundingClientRect().width / 2 + 'px';
        i++;
    }
}

function loadersWork(getArray) {
    getArray(document.querySelectorAll('.ImageBox-Item')).forEach(element => {
        element.onload = () => {
            for (const iterator of getArray(document.querySelectorAll(".Loader"))) {
                iterator.classList.add("Loader__AfterLoad");
            }
        };
    });
}


document.querySelector("link").addEventListener('load', () => {
    createImgLoaders(getImgOnPage);

    setRectsLoader(getImgRect, getImgOnPage, getContainerRect)

});
loadersWork(getImgOnPage);