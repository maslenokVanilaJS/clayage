// imports

import { drawsAnyPaths, mouseOnSvg } from '../pagesCommonModules/svg';
//Functions
function drawJug(selectorQuery) {
    let jug = document.querySelector(selectorQuery).contentDocument.querySelectorAll(".Jug");
    for (let i = 0; i < jug.length; i++) {
        let length = jug[i].getTotalLength();
        jug[i].style.strokeDasharray = length;
        jug[i].style.strokeDashoffset = length;
        jug[i].animate(
            [
                { strokeDashoffset: `${length}` },

                { strokeDashoffset: '0' },

            ],

            {
                fill: "forwards",
                duration: 3100
            }
        );
    };
};

function rotateSvgElement(selectorQuery,elem) {
    let element = document.querySelector(selectorQuery).contentDocument.querySelectorAll(elem);
    for (let i = 0; i < element.length; i++) {
        element[i].animate([{ strokeDashoffset: '0' },
        {
            strokeDashoffset: '200'
        }],
            {
                iterations: 5,
                duration: 700
            });
    }


};

function modalFormControl(object){
    let buttonsOpenForm = document.querySelectorAll('.TAB__Lessons');
for(let i=0;i<buttonsOpenForm.length;i++){
   
    let forms = document.querySelectorAll('.MasterClassSignUpFormContainer');
    
buttonsOpenForm[i].onclick=()=>{
 forms[i].classList.add('MasterClassSignUpFormContainer__Visible');
  let headLogos=document.querySelector('.HeadLogo');
  let secondHeadLogo=document.querySelector('.HeadLogo__Second');
    headLogos.onload = () => {
        formHeadLogoAnimation({
            target:'.HeadLogo',
            targetField:'.MasterClassSignUpForm-InputField',
            elem: '.Circles'
        });

    };
    secondHeadLogo.onload = () => {
        formHeadLogoAnimation({
            target: '.HeadLogo__Second',
            targetField: '.MasterClassSignUpForm-InputField',
            elem: '.Circles'
        });
      
    };
    if (forms[i].classList.contains('MasterClassSignUpFormContainer__Basic')) {
        formHeadLogoAnimation({
            target: '.HeadLogo',
            targetField: '.MasterClassSignUpForm-InputField',
            elem:'.Circles'
        });
 
        
    } else if (forms[i].classList.contains('MasterClassSignUpFormContainer__Advanced')) {
        formHeadLogoAnimation({
            target: '.HeadLogo__Second',
            targetField: '.MasterClassSignUpForm-InputField',
            elem: '.Circles'
        });
      
}
  let iconsCloseForm = document.querySelectorAll(".MasterClassSignUpForm-CloseForm");
 iconsCloseForm[i].onclick=()=>{
     forms[i].classList.remove('MasterClassSignUpFormContainer__Visible');

 } 
 }
};
};
function formHeadLogoAnimation(object){
    drawsAnyPaths(object.target, {
        time: 2000,
        custom: false,
        pathSelector: ".Fill",
        color: "white"
    });
    mouseOnSvg(
        object.target, {
            selectorQuery: object.target,
        elem: '.Circles'
    }
    );
let inputField=document.querySelectorAll(object.targetField);
for(let i=0;i<inputField.length;i++){
    inputField[i].oninput=()=>{
        drawJug(object.target);
        rotateSvgElement(object.target,object.elem);

    }
}
}
modalFormControl();


function certificateGetControl() {
    document.querySelector('.TAB__GetC').onclick=()=>{
        document.querySelector(".GetCertificateMainAppContainer").classList.add('GetCertificateMainAppContainer__Visible');
        document.querySelector(".GetCertificate").classList.add('GetCertificateMain');

        document.querySelector('.GetCertificateMainAppContainer-CloseApp').onclick=()=>{
        document.querySelector(".GetCertificateMainAppContainer").classList.remove('GetCertificateMainAppContainer__Visible');

        };
    };
 
};
 certificateGetControl();

function ajaxFormMasterclasses() {
    let formBasic = document.querySelector(".MasterClassSignUpForm__Basic");
    let formAdvanced = document.querySelector(".MasterClassSignUpForm__Advanced");
    formBasic.addEventListener('submit', function (event) {
        event.preventDefault();

        let formData = new FormData(document.forms.basicLesson);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '../../../src/php/sendMailBasicLesson', true);
        xhr.send(formData);
        xhr.onload = () => {
            if (xhr.status == 200) {
                document.querySelector(".MasterClassSignUpFormContainer").classList.remove("MasterClassSignUpFormContainer__Visible");
                document.querySelector(".SuccesFormSend__BasicLesson").classList.add('SuccesFormSend_Visible');
                document.querySelector(".SuccesFormSend__BasicLesson").querySelector(".SuccesFormSend-Button").onclick = () => {
                    document.querySelector(".SuccesFormSend__BasicLesson").classList.remove('SuccesFormSend_Visible');
                };
            }
            if (xhr.status > 300 || xhr.status == 404) {
                document.querySelector(".MasterClassSignUpFormContainer").classList.remove("MasterClassSignUpFormContainer__Visible");
                document.querySelector(".SuccesFormSend_OnFail").classList.add('SuccesFormSend_Visible');
                setTimeout(() => {
                    document.querySelector(".SuccesFormSend_OnFail").classList.remove("SuccesFormSend_Visible");
                }, 4000);
            };
        };
    });

    formAdvanced.addEventListener('submit', function (event) {
        event.preventDefault();

        let formData = new FormData(document.forms.Advanced);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'sendMailAdvancedLesson', true);
        xhr.send(formData);
        xhr.onload = () => {
            if (xhr.status == 200) {
                document.querySelector(".MasterClassSignUpFormContainer__Advanced").classList.remove("MasterClassSignUpFormContainer__Visible");
                document.querySelector(".SuccesFormSend__AdvancedLesson").classList.add('SuccesFormSend_Visible');
                document.querySelector(".SuccesFormSend__AdvancedLesson").querySelector(".SuccesFormSend-Button").onclick = () => {
                    document.querySelector(".SuccesFormSend__AdvancedLesson").classList.remove('SuccesFormSend_Visible');
                };
            }
            if (xhr.status > 300 || xhr.status == 404) {
                document.querySelector(".MasterClassSignUpFormContainer__Advanced").classList.remove("MasterClassSignUpFormContainer__Visible");
                document.querySelector(".SuccesFormSend_OnFail").classList.add('SuccesFormSend_Visible');
                setTimeout(() => {
                    document.querySelector(".SuccesFormSend_OnFail").classList.remove("SuccesFormSend_Visible");
                }, 4000);
            };
        };
    });
};
ajaxFormMasterclasses();
function scroll(TAB,TABlocK) {
    let btn=document.querySelector(TAB);
    let block=document.querySelector(TABlocK);
    btn.onclick=()=>{
        block.scrollIntoView({behavior:'smooth'});
    };
    
}
scroll('.TAB__InfoB','.Info__Basic');
scroll('.TAB__InfoA', '.Info__Advanced');
scroll('.TAB__InfoG', '.Info__Gift');
scroll('.TAB__InfoAthr', '.Info__Ceramic');