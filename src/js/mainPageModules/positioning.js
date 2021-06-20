function controlPanel() {
    let promoBlockHeader = document.querySelectorAll(".PromoBlockHeader");
    let backgroundImagesH = document.querySelectorAll(".SlaiderStudio-Image");
    let panelButtons = document.querySelectorAll(".ControlPanelBlock-QButton");
    let panelButtonsArray = Array.prototype.slice.call(panelButtons);
    let promoBlockHeaderArray = Array.prototype.slice.call(promoBlockHeader);
    let backgroundImagesHArray = Array.prototype.slice.call(backgroundImagesH);
    let j = 0;
    let i = 0;
    let k = 0;
    let interval = 7000;
    let intervalIDPanel;
    let intervalIDjPromo;
    let intervalIDkBackround;

    function panel() {
        i++
        if (i == panelButtonsArray.length) {
            panelButtonsArray[i - 1].classList.remove("ControlPanelBlock-QButton__Selected");

            i = 0;
        }
        panelButtonsArray[i].classList.add("ControlPanelBlock-QButton__Selected");

        if (i > 0) {
            panelButtonsArray[i - 1].classList.remove("ControlPanelBlock-QButton__Selected");
        }
    };

    function promo() {
        j++
        if (j == promoBlockHeaderArray.length) {
            promoBlockHeaderArray[j - 1].classList.remove("PromoBlockHeader__Visible");

            j = 0;
        }
        promoBlockHeaderArray[j].classList.add("PromoBlockHeader__Visible");

        if (i > 0) {
            promoBlockHeaderArray[j - 1].classList.remove("PromoBlockHeader__Visible");
        }


    };

    function background() {
        k++
        if (k == backgroundImagesHArray.length) {
            backgroundImagesHArray[k - 1].classList.remove("SlaiderStudio-Image__Visible");

            k = 0;
        }
        backgroundImagesHArray[k].classList.add("SlaiderStudio-Image__Visible");

        if (k > 0) {
            backgroundImagesHArray[k - 1].classList.remove("SlaiderStudio-Image__Visible");
        }

    };

    function stopInterval() {
        clearInterval(intervalIDPanel);
        clearInterval(intervalIDjPromo);
        clearInterval(intervalIDkBackround);
    }

    function startInterval() {
        intervalIDPanel = setInterval(panel, interval);
        intervalIDjPromo = setInterval(promo, interval);
        intervalIDkBackround = setInterval(background, interval);
    }
    startInterval();

    panelButtonsArray.forEach(elements => {
        //elements.classList.remove("ControlPanelBlock-QButton__Selected");



        elements.onclick = () => {
            stopInterval();
            startInterval();




            promoBlockHeaderArray.forEach(blockHeader => {
                blockHeader.classList.remove("PromoBlockHeader__Visible");

            });
            backgroundImagesHArray.forEach(imagesH => {
                imagesH.classList.remove("SlaiderStudio-Image__Visible");
            });
            panelButtonsArray.forEach(elements => {
                elements.classList.remove("ControlPanelBlock-QButton__Selected");
            });
            let indexBtn = panelButtonsArray.indexOf(elements);
            i = indexBtn;
            j = indexBtn;
            k = indexBtn;
            for (let i = 0; i < promoBlockHeader.length; i++) {
                promoBlockHeader[i].classList.remove("PromoBlockHeader__Visible");
                if (indexBtn == i) {
                    promoBlockHeader[i].classList.add("PromoBlockHeader__Visible");
                    elements.classList.add("ControlPanelBlock-QButton__Selected");
                }

            }

            for (let i = 0; i < backgroundImagesH.length; i++) {
                backgroundImagesH[i].classList.remove("SlaiderStudio-Image__Visible");
                if (indexBtn == i) {
                    backgroundImagesH[i].classList.add("SlaiderStudio-Image__Visible");
                }

            }
        };
    });
}

function imageResizeMultiple(obj) {
    let container = document.querySelector(obj.container);
    let images = document.querySelectorAll(obj.images);
    let ImagesArray = Array.prototype.slice.call(images);
    let newSrc = obj.srcList;
    ImagesArray.forEach(image => {
        image.setAttribute('src', newSrc[ImagesArray.indexOf(image)]);

    });


}

function sliderControl(obj) {
    let targetSlider = document.querySelectorAll(obj.container);
    Array.prototype.slice.call(targetSlider).forEach(element => {
        let backArrow = element.querySelector(obj.backA);
        let nextArrow = element.querySelector(obj.nextA);
        let couter = 0;
        let total = 0;
        let containerWidth = element.getBoundingClientRect().width;
        let images = element.querySelectorAll(".ImageContainer-Image");

        Array.prototype.slice.call(images).forEach(element1 => {

            total += element1.getBoundingClientRect().width;
        });
        console.log(total);
        console.log(containerWidth);


        let rfr = Math.floor(total / containerWidth);
        let conditionalPoint = total - (containerWidth * rfr);
        let point = (containerWidth * rfr) - containerWidth;
        console.log(rfr);
        console.log(conditionalPoint);
        nextArrow.onclick = () => {

            console.log(conditionalPoint);
            console.log(point);
            console.log(couter);

            if (couter >= point && couter <= total - containerWidth) {
                couter += conditionalPoint;
            }
            if (couter < point) {
                couter += containerWidth;

            }
            if (couter > total - containerWidth) {
                element.style.marginLeft = "0px";
                couter = 0;
            }
            element.style.marginLeft = `-${couter}px`;





        };
        backArrow.onclick = () => {
            console.log(conditionalPoint);
            console.log(point);
            console.log(couter);
            console.log(window.getComputedStyle(element).marginLeft);
            if (couter == total - containerWidth) {
                couter -= conditionalPoint;


            }
            if (couter == 0 && window.getComputedStyle(element).marginLeft == "0px" || couter == -containerWidth) {
                couter = total - containerWidth;

            }
            if (couter < total - containerWidth) {
                couter -= containerWidth;
            }
            element.style.marginLeft = `-${couter}px`;



        };



    });
};

document.addEventListener('DOMContentLoaded', function() {
    controlPanel();
    //  timedPromo__Txt();
    if (window.innerWidth >= 320 && window.innerWidth <= 768) {
        imageResizeMultiple({
            container: '.SlaiderStudio',
            images: '.SlaiderStudio-Image',
            srcList: ['/src/img/mainSliderResize/mainResize5.jpg', '/src/img/mainSliderResize/mainResize4.jpg',
                '/src/img/mainSliderResize/mainResize2.jpg', '/src/img/mainSliderResize/mainResize3.jpg', '/src/img/mainSliderResize/mainResize6.jpg',
                '/src/img/mainSliderResize/mainResize1.jpg'
            ]
        });

        //timedSlider();
    }
});

window.addEventListener('load', function() {
    if (window.innerWidth >= 320 && window.innerWidth <= 768) {

        sliderControl({
            container: '.ImageContainer',
            backA: '.ImageContainer-ArrowBackBlack',
            nextA: '.ImageContainer-ArrowNextBlack'

        });
        //timedSlider();
    } else if (window.innerWidth >= 769 && window.innerWidth <= 1444) {
        //clearImmediate(timedSlider) ;  
        sliderControl({
            container: '.ImageContainer',
            backA: '.ImageContainer-ArrowBack',
            nextA: '.ImageContainer-ArrowNext'

        });
    };
});

function authorBackndSlide(params) {
    let paths = ['/src/img/mainContent/InterierItem.jpg', '/src/img/mainContent/InterierVase (16).jpg ', '/src/img/mainContent/TeaCeremonyItem11.jpg', '/src/img/mainContent/FloristItem (9).jpg'];
    let couter = 0;


    setInterval(() => {

        if (couter > paths.length - 1) {
            couter = 0;
        }
        document.querySelector(".BackgroundMastcls__Author").style.backgroundImage = `url('${paths[couter]}')`;
        couter++;
    }, 5000);

}


authorBackndSlide();