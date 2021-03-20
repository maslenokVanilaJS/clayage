import "./scss/AuthorCeramics.scss"
import  interactivity from "./js/pagesCommonModules/svg"



function ItemSlaiderControl(){
    

    let gridGallerys = document.querySelectorAll(".HidenGalery_WhiteBackground");
    let onImage = document.querySelectorAll(".ImageBox-Item");
    let galery = document.querySelectorAll(".HidenGalery_BlackBackground");
    let galerybtns = document.querySelectorAll(".ImageBox-GetLessonsButton");

for(let i=0;i<galerybtns.length;i++){

    

    
    galerybtns[i].onclick = () => {
        galery[i].classList.add("HidenGalery_Visible");
let images=galery[i].querySelectorAll(".ImgContainer-Item");
let imagesGrid = gridGallerys[i].querySelectorAll(".ImgContainer-ItemModule");
for(let img of images){
    if(img.getAttribute('data-src')!=null){
    img.setAttribute("src", img.getAttribute('data-src'));};
    img.onload = function () {
        img.removeAttribute('data-src');
    };
}
        for (let img of imagesGrid) {
            if (img.getAttribute('data-src') != null) {
                img.setAttribute("src", img.getAttribute('data-src'));
            };
            img.onload = function () {
                img.removeAttribute('data-src');
            };
        }
   

      
       // Check if object is loaded
        
        
           
let next=galery[i].querySelector(".HidenGalery-Arrow");
let prev=galery[i].querySelector(".HidenGalery-ArrowLeft");
let close=galery[i].querySelector(".HidenGalery-CloseSlider");
let slaiderContent=galery[i].querySelectorAll(".ImgContainer");
let modules=galery[i].querySelector(".HidenGalery-TogleModule");
let form=document.querySelector(".PurchaseFormContainer");
   
 
for(let l=0;l<slaiderContent.length;l++){
    let button = slaiderContent[l].querySelector(".GetLessonsButton");
modules.onclick=()=>{   
   // document.querySelector(".HidenGalery_WhiteBackground").classList.add("HidenGalery_Visible");
     
      gridGallerys[i].classList.add("HidenGalery_Visible");
      galery[i].classList.remove("HidenGalery_Visible");
  };

button.onclick=()=>{
form.classList.add("PurchaseFormContainer_Visible");
    let chosen = slaiderContent[l].querySelector(".TextDescription-Choosen").textContent;
   let price=slaiderContent[l].querySelector(".InfoBlock-Price").textContent;
   let priceInput=document.querySelector(".PurchaseForm-Field_Price");
   priceInput.value=chosen + ',' +price;
    let closeForm = document.querySelector(".PurchaseFormContainer-Close");
    closeForm.onclick = () => {
        form.classList.remove("PurchaseFormContainer_Visible");
   
};
};
};

function control(){
   
    
       
            let togleToSlider = gridGallerys[i].querySelector(".ImgContainer-MonoliteTogle");
        let exitToMain = gridGallerys[i].querySelector(".ImgContainer-CloseModule");
            exitToMain.onclick = () => {

               gridGallerys[i].classList.remove("HidenGalery_Visible");
            };   
togleToSlider.onclick=()=>{
    galery[i].classList.add("HidenGalery_Visible");
    gridGallerys[i].classList.remove("HidenGalery_Visible");
};

       
   

    let imgModule = gridGallerys[i].querySelectorAll(".ImgContainer-ItemModule");
    let slaiderContentArray = Array.prototype.slice.call(slaiderContent);
  //  moduleViewItemInfoPreview();
    slaiderContentArray.forEach((element) => {
        if (element.classList.contains("ImgContainer_Visible")) {
            let k = slaiderContentArray.indexOf(element);
   
next.onclick=()=>{
    k++;
    if (k == slaiderContentArray.length) {
        slaiderContentArray[k - 1].classList.remove("ImgContainer_Visible");
        k = 0;
    };   

slaiderContentArray[k].classList.add("ImgContainer_Visible");
    
slaiderContentArray[k-1].classList.remove("ImgContainer_Visible");
  
};
        prev.onclick=()=>{
        k--;
        if(k<0){
            slaiderContentArray[k + 1].classList.remove("ImgContainer_Visible");
            k = slaiderContentArray.length-1;
        };
            slaiderContentArray[k].classList.add("ImgContainer_Visible");

            slaiderContentArray[k + 1].classList.remove("ImgContainer_Visible");
        };
            close.onclick = () => {
                galery[i].classList.remove("HidenGalery_Visible");
               
            };
            for (let m = 0; m < imgModule.length; m++) {
                imgModule[m].onmouseover = () => {
                    let verticalScroll=gridGallerys[i].querySelector(".ImgContainer").scrollTop;
                    let coords = imgModule[m].getBoundingClientRect();
                    gridGallerys[i].querySelector(".ImgContainer-ModalMessage").style.left = coords.left - coords.width / 2 + 'px';
                   gridGallerys[i].querySelector(".ImgContainer-ModalMessage").style.top = coords.bottom - coords.height / 3 + verticalScroll + 'px';
                    let name = galery[i].querySelectorAll('.TextDescription-Choosen');
                    let price = galery[i].querySelectorAll('.InfoBlock-Price');
                   
                gridGallerys[i].querySelector('.ImgContainer-ModalMessage').innerHTML = `${name[m].innerHTML}<br>${price[m].innerHTML}`;
                };
                imgModule[m].onclick = () => {
                   galery[i].classList.add("HidenGalery_Visible");
                    gridGallerys[i].classList.remove("HidenGalery_Visible");
                    // let slaiderContent = document.querySelector(".HidenGalery_BlackBackground").querySelectorAll(".ImgContainer");
                    //  let slaiderContentArray = Array.prototype.slice.call(slaiderContent);

                    slaiderContentArray.forEach((element) => {
                        element.classList.remove("ImgContainer_Visible");
                    });
                    slaiderContentArray[m].classList.add("ImgContainer_Visible");
                   k=m;
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




function ajaxForm(){
    let form=document.querySelector(".PurchaseForm");
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

let formData= new FormData(document.forms.purchase);
let xhr= new XMLHttpRequest();
        xhr.open('POST','/src/php/sendMail',true);
xhr.send(formData);
xhr.onload=()=>{
if(xhr.status==200){
    document.querySelector(".PurchaseFormContainer").classList.remove("PurchaseFormContainer_Visible");
    document.querySelector(".SuccesFormSend").classList.add('SuccesFormSend_Visible');
    document.querySelector(".SuccesFormSend").querySelector(".PurchaseForm-Button").onclick=()=>{
        document.querySelector(".SuccesFormSend").classList.remove('SuccesFormSend_Visible');
    };
}
if(xhr.status>300|| xhr.status==404){
  document.querySelector(".PurchaseFormContainer").classList.remove("PurchaseFormContainer_Visible");
  document.querySelector(".SuccesFormSend_OnFail").classList.add('SuccesFormSend_Visible');
  setTimeout(()=>{
      document.querySelector(".SuccesFormSend_OnFail").classList.remove("SuccesFormSend_Visible");
  },4000);
};
};
 } );}






window.onload=()=>{
ItemSlaiderControl();
  //  lazyLoadInit(); 
    ajaxForm();
};
ajaxForm();
interactivity();
ItemSlaiderControl();
//lazyLoadInit(); 