
function controlPanel() {
  let promoBlockHeader=document.querySelectorAll(".PromoBlockHeader");
  let backgroundImagesH=document.querySelectorAll(".SlaiderStudio-Image");
  let panelButtons=document.querySelectorAll(".ControlPanelBlock-QButton");
  let panelButtonsArray = Array.prototype.slice.call(panelButtons);
  let promoBlockHeaderArray = Array.prototype.slice.call(promoBlockHeader);
  let backgroundImagesHArray = Array.prototype.slice.call(backgroundImagesH);
  let j=0;
  let i = 0;
  let k = 0;
  let interval=7000;
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



  elements.onclick=()=>{
    stopInterval();
    startInterval();

   
   
    
    promoBlockHeaderArray.forEach(blockHeader=>{
      blockHeader.classList.remove("PromoBlockHeader__Visible");

    });
    backgroundImagesHArray.forEach(imagesH=>{
      imagesH.classList.remove("SlaiderStudio-Image__Visible");
    });
    panelButtonsArray.forEach(elements => {
    elements.classList.remove("ControlPanelBlock-QButton__Selected");
    });
    let indexBtn = panelButtonsArray.indexOf(elements);
    i=indexBtn;
    j=indexBtn;
    k=indexBtn;
    for (let i = 0 ; i < promoBlockHeader.length; i++) {
      promoBlockHeader[i].classList.remove("PromoBlockHeader__Visible");
      if(indexBtn==i){
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
  let container =document.querySelector(obj.container);
  let images=document.querySelectorAll(obj.images);
  let ImagesArray = Array.prototype.slice.call(images);
  let newSrc=obj.srcList;
  ImagesArray.forEach(image=>{
  image.setAttribute('src',newSrc[ImagesArray.indexOf(image)]);
  
  });


}


document.addEventListener('DOMContentLoaded',function(){
  controlPanel();
//  timedPromo__Txt();
  if (window.innerWidth >= 320 && window.innerWidth <=425){
    imageResizeMultiple({
      container:'.SlaiderStudio',
      images:'.SlaiderStudio-Image',
      srcList: ['/src/img/320px/320pxMobile147.jpg', '/src/img/320px/320pxMobile17.jpg', 
        '/src/img/320px/320pxMobile13.jpg', '/src/img/320px/320pxMobile16.jpg','/src/img/320px/320pxMobile148.jpg',
      '/src/img/320px/320pxMobile6.jpg']
    });
//timedSlider();
}else{
 //clearImmediate(timedSlider) ;      
};
});