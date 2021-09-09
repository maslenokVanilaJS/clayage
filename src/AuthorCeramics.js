import "./scss/AuthorCeramics.scss"
import "./js/galleryPreview/galleryPreview"
import interactivity from "./js/pagesCommonModules/svg"
import "./js/loader/loaderV1.1"
import { isInViewport, insertLoaderGalleryBuy, insertLoadersIntoBox } from "./js/loader/loaderV1.1"
import "./js/formLogicBuy/buyFormL"

insertLoadersIntoBox(isInViewport, document.querySelectorAll(".ImageBox-Item"), document.querySelectorAll(".DescriptionBlock-LessonsImage"));


function ItemSlaiderControl(checkView, insertLoaders) {

    console.log(checkView);
    let gridGallerys = document.querySelectorAll(".HidenGalery_WhiteBackground");
    let onImage = document.querySelectorAll(".ImageBox-Item");
    let galery = document.querySelectorAll(".HidenGalery_BlackBackground");
    let galerybtns = document.querySelectorAll(".ImageBox-GetLessonsButton");

    for (let i = 0; i < galerybtns.length; i++) {




        galerybtns[i].onclick = () => {
            document.querySelector(".Header").classList.add("Header__ZIndexClear");
            document.querySelector(".MasterPage").classList.add("MasterPage__FreezeScroll");
            Array.prototype.slice.call(document.querySelectorAll(".Info")).forEach(element => {
                element.classList.add("Info__PositionClear");
            });
            galery[i].classList.add("HidenGalery_Visible");
            let images = galery[i].querySelectorAll(".ImgContainer-Item");
            let imagesGrid = gridGallerys[i].querySelectorAll(".ImgContainer-ItemModule");
            insertLoaders(checkView, images);
            /*   for (let img of images) {
                   if (img.getAttribute('data-src') != null) {
                       img.setAttribute("src", img.getAttribute('data-src'));
                   };
                   img.onload = function() {
                       img.removeAttribute('data-src');
                   };
               }
               for (let img of imagesGrid) {
                   if (img.getAttribute('data-src') != null) {
                       img.setAttribute("src", img.getAttribute('data-src'));
                   };
                   img.onload = function() {
                       img.removeAttribute('data-src');
                   };
               }*/


            // Check if object is loaded



            let next = galery[i].querySelector(".HidenGalery-Arrow");
            let prev = galery[i].querySelector(".HidenGalery-ArrowLeft");
            let close = galery[i].querySelector(".HidenGalery-CloseSlider");
            let slaiderContent = galery[i].querySelectorAll(".ImgContainer");
            let modules = galery[i].querySelector(".HidenGalery-TogleModule");
            let form = document.querySelector(".PurchaseFormContainer");


            for (let l = 0; l < slaiderContent.length; l++) {
                let button = slaiderContent[l].querySelector(".GetLessonsButton");
                modules.onclick = () => {
                    // document.querySelector(".HidenGalery_WhiteBackground").classList.add("HidenGalery_Visible");
                    document.querySelector(".MasterPage").classList.remove("MasterPage__FreezeScroll");

                    gridGallerys[i].classList.add("HidenGalery_Visible");
                    galery[i].classList.remove("HidenGalery_Visible");
                    insertLoaders(checkView, imagesGrid);
                };

                button.onclick = () => {
                    form.classList.add("PurchaseFormContainer_Visible");
                    let chosen = slaiderContent[l].querySelector(".TextDescription-Choosen").textContent;
                    let price = slaiderContent[l].querySelector(".InfoBlock-Price").textContent;
                    let priceInput = document.querySelector(".PurchaseForm-Field_Price");
                    priceInput.value = chosen + ',' + price;
                    let closeForm = document.querySelector(".PurchaseFormContainer-Close");
                    closeForm.onclick = () => {
                        form.classList.remove("PurchaseFormContainer_Visible");

                    };
                };
            };

            function control() {



                let togleToSlider = gridGallerys[i].querySelector(".ImgContainer-MonoliteTogle");
                let exitToMain = gridGallerys[i].querySelector(".ImgContainer-CloseModule");
                exitToMain.onclick = () => {

                    gridGallerys[i].classList.remove("HidenGalery_Visible");
                };
                togleToSlider.onclick = () => {
                    galery[i].classList.add("HidenGalery_Visible");
                    gridGallerys[i].classList.remove("HidenGalery_Visible");
                    document.querySelector(".MasterPage").classList.add("MasterPage__FreezeScroll");

                };




                let imgModule = gridGallerys[i].querySelectorAll(".ImgContainer-ItemModule");
                let slaiderContentArray = Array.prototype.slice.call(slaiderContent);
                //  moduleViewItemInfoPreview();
                slaiderContentArray.forEach((element) => {
                    if (element.classList.contains("ImgContainer_Visible")) {
                        let k = slaiderContentArray.indexOf(element);

                        next.onclick = () => {
                            k++;
                            if (k == slaiderContentArray.length) {
                                slaiderContentArray[k - 1].classList.remove("ImgContainer_Visible");
                                k = 0;
                            };

                            slaiderContentArray[k].classList.add("ImgContainer_Visible");

                            slaiderContentArray[k - 1].classList.remove("ImgContainer_Visible");

                        };
                        prev.onclick = () => {
                            k--;
                            if (k < 0) {
                                slaiderContentArray[k + 1].classList.remove("ImgContainer_Visible");
                                k = slaiderContentArray.length - 1;
                            };
                            slaiderContentArray[k].classList.add("ImgContainer_Visible");

                            slaiderContentArray[k + 1].classList.remove("ImgContainer_Visible");
                        };
                        close.onclick = () => {
                            galery[i].classList.remove("HidenGalery_Visible");
                            document.querySelector(".MasterPage").classList.remove("MasterPage__FreezeScroll");

                            document.querySelector(".Header").classList.remove("Header__ZIndexClear");
                            Array.prototype.slice.call(document.querySelectorAll(".Info")).forEach(element => {
                                element.classList.remove("Info__PositionClear");
                            });

                        };
                        for (let m = 0; m < imgModule.length; m++) {
                            if (window.innerWidth <= 425) {
                                imgModule[m].ontouchmove = () => {

                                    if (imgModule[m].getBoundingClientRect().bottom <= window.innerHeight) {

                                        let verticalScroll = gridGallerys[i].querySelector(".ImgContainer").scrollTop;
                                        let coords = imgModule[m].getBoundingClientRect();
                                        //   gridGallerys[i].querySelector(".ImgContainer-ModalMessage").style.left = coords.left - coords.width / 2 + 'px';
                                        gridGallerys[i].querySelector(".ImgContainer-ModalMessage").style.top = coords.bottom - coords.height / 3 + verticalScroll + 'px';
                                        let name = galery[i].querySelectorAll('.TextDescription-Choosen');
                                        let price = galery[i].querySelectorAll('.InfoBlock-Price');

                                        gridGallerys[i].querySelector('.ImgContainer-ModalMessage').innerHTML = `${name[m].innerHTML}<br>${price[m].innerHTML}`;
                                    }
                                }
                            }
                            imgModule[m].onmouseover = () => {
                                let verticalScroll = gridGallerys[i].querySelector(".ImgContainer").scrollTop;
                                let coords = imgModule[m].getBoundingClientRect();
                                if (window.innerWidth > 425 && window.innerWidth < 1024) {
                                    gridGallerys[i].querySelector(".ImgContainer-ModalMessage").style.left = coords.left - coords.width / 14 + 'px';

                                }
                                if (window.innerWidth > 1024) {
                                    gridGallerys[i].querySelector(".ImgContainer-ModalMessage").style.left = coords.left - coords.width / 12 + 'px';

                                }
                                //    gridGallerys[i].querySelector(".ImgContainer-ModalMessage").style.left = coords.left - coords.width / 2 + 'px';
                                gridGallerys[i].querySelector(".ImgContainer-ModalMessage").style.top = coords.bottom - coords.height / 3 + verticalScroll + 'px';
                                let name = galery[i].querySelectorAll('.TextDescription-Choosen');
                                let price = galery[i].querySelectorAll('.InfoBlock-Price');

                                gridGallerys[i].querySelector('.ImgContainer-ModalMessage').innerHTML = `${name[m].innerHTML}<br>${price[m].innerHTML}`;
                            };


                            let lastTap = 0;
                            imgModule[m].addEventListener('touchend', function(event) {
                                let currentTime = new Date().getTime();
                                let tapLength = currentTime - lastTap;

                                if (tapLength < 500 && tapLength > 0) {
                                    galery[i].classList.add("HidenGalery_Visible");
                                    gridGallerys[i].classList.remove("HidenGalery_Visible");
                                    // let slaiderContent = document.querySelector(".HidenGalery_BlackBackground").querySelectorAll(".ImgContainer");
                                    //  let slaiderContentArray = Array.prototype.slice.call(slaiderContent);
                                    document.querySelector(".MasterPage").classList.add("MasterPage__FreezeScroll");

                                    slaiderContentArray.forEach((element) => {
                                        element.classList.remove("ImgContainer_Visible");
                                    });
                                    slaiderContentArray[m].classList.add("ImgContainer_Visible");
                                    k = m;
                                    event.preventDefault();
                                }
                                lastTap = currentTime;
                            });
                            if (window.innerWidth > 1024) {
                                imgModule[m].onclick = () => {
                                    galery[i].classList.add("HidenGalery_Visible");
                                    gridGallerys[i].classList.remove("HidenGalery_Visible");
                                    // let slaiderContent = document.querySelector(".HidenGalery_BlackBackground").querySelectorAll(".ImgContainer");
                                    //  let slaiderContentArray = Array.prototype.slice.call(slaiderContent);
                                    document.querySelector(".MasterPage").classList.add("MasterPage__FreezeScroll");

                                    slaiderContentArray.forEach((element) => {
                                        element.classList.remove("ImgContainer_Visible");
                                    });
                                    slaiderContentArray[m].classList.add("ImgContainer_Visible");
                                    k = m;
                                };
                            };
                        };

                    };


                });


                //   function moduleViewItemInfoPreview() {

                // };   



            };
            control();
        };

    };
};




function ajaxForm() {
    let form = document.querySelector(".PurchaseForm");
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let formData = new FormData(document.forms.purchase);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/src/php/sendMail', true);
        xhr.send(formData);
        xhr.onload = () => {

            if (xhr.status == 200) {
                document.querySelector(".PurchaseFormContainer").classList.remove("PurchaseFormContainer_Visible");
                Array.prototype.slice.call(document.querySelectorAll(".HidenGalery_Visible")).forEach(element => {
                    element.classList.remove("HidenGalery_Visible");
                });
                document.querySelector(".SuccesFormSend").classList.add('SuccesFormSend_Visible');
                document.querySelector(".SuccesFormSend").querySelector(".PurchaseForm-Button").onclick = () => {
                    document.querySelector(".SuccesFormSend").classList.remove('SuccesFormSend_Visible');
                };
            }
            if (xhr.status > 300 || xhr.status == 404) {
                document.querySelector(".MasterPage").classList.add("MasterPage__FreezeScroll");

                document.querySelector(".PurchaseFormContainer").classList.remove("PurchaseFormContainer_Visible");
                Array.prototype.slice.call(document.querySelectorAll(".HidenGalery_Visible")).forEach(element => {
                    element.classList.remove("HidenGalery_Visible");
                });
                document.querySelector(".SuccesFormSend_OnFail").classList.add('SuccesFormSend_Visible');
                setTimeout(() => {
                    document.querySelector(".SuccesFormSend_OnFail").classList.remove("SuccesFormSend_Visible");
                }, 4000);
                document.querySelector(".MasterPage").classList.remove("MasterPage__FreezeScroll");

            };
        };
    });
}


function toggleMonoliteWhite() {

    if (window.innerWidth < 1024) {
        Array.prototype.slice.call(document.querySelectorAll(".ImgContainer-MonoliteTogle")).forEach(element => {
            element.src = '/src/img/mainContent/monoliteWhite.svg';
        });
    }

}

function ItemOutGalleryLogic() {
    let btnItemOut = document.querySelectorAll(".GetLessonsButton__Out");
    let confirmBtn = document.querySelector(".OutItem-Button");
    let mdlWarningOut = document.querySelector(".OutItem");
    Array.prototype.slice.call(btnItemOut).forEach(element => {
        element.addEventListener("click", () => {
            mdlWarningOut.classList.add("OutItem__Visible");
        });

    });
    confirmBtn.onclick = () => {
        mdlWarningOut.classList.remove("OutItem__Visible");
    };
}

function appendInfoPhone(params) {
    let galleryOut = document.querySelectorAll(".HidenGalery__Out .GetLessonsButton");
    console.log(galleryOut.length);
    Array.prototype.slice.call(galleryOut).forEach(element => {
        element.insertAdjacentHTML("beforebegin", `<a href="tel:+794534534" class="InfoBlock-Out">Срок изготовления</a>`);

    });
}


appendInfoPhone();
ItemOutGalleryLogic();
/*
function togglePositionButton() {
    if (oldScroll > window.scrollY) {
        Array.prototype.slice.call(document.querySelectorAll(".InfoBlock-GetLessonsButton")).forEach(element => {
            element.classList.add("InfoBlock-GetLessonsButton__FixUrlBar");
            console.log("dgf")

        });
    } else {
        Array.prototype.slice.call(document.querySelectorAll(".InfoBlock-GetLessonsButton")).forEach(element => {
            element.classList.remove("InfoBlock-GetLessonsButton__FixUrlBar");
            console.log("ddfdff")

        });
    }
    let oldScroll = window.scrollY;
    console.log(oldScroll, window.scrollY);


}
window.onscroll = () => {
    togglePositionButton();
};
*/
window.onload = () => {
    ItemSlaiderControl(isInViewport, insertLoaderGalleryBuy);
    //  lazyLoadInit(); 
    ajaxForm();
    toggleMonoliteWhite();

};
ajaxForm();
interactivity();
ItemSlaiderControl(isInViewport, insertLoaderGalleryBuy);
//lazyLoadInit();
toggleMonoliteWhite();