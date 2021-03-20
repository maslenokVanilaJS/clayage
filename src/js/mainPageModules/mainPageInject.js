//This code inject mainpageSVG

document.addEventListener('DOMContentLoaded', function () {
    SVGInject(document.getElementsByClassName('LocationInfo-MetroStreetIcon_SW'));
    SVGInject(document.getElementsByClassName('HamburgerIcon'));
    SVGInject(document.getElementsByClassName('VKButton'));
    SVGInject(document.getElementsByClassName('InstButton'));
    SVGInject(document.getElementsByClassName('ReverseCall'));
    SVGInject(document.getElementsByClassName('ImageContainer-ArrowBack'));
    SVGInject(document.getElementsByClassName('ImageContainer-ArrowNext'));
    

});
//

//This code run functions after SVG is injected

SVGInject.setOptions({
    afterInject: function (img, svg) {
        onLoadPathW();
        toggleSomething({
            target:'.LocationInfo-MetroStreetIcon',
            toogleTrgt:'.YandexMap',
            visible:'YandexMap_Visible',
            onOpen:'YandexMap__onOpen',
            closer:'.YandexMap-Close'
        });
        toggleSomething({
            target: '.ReverseCall',
            toogleTrgt: '.Contact',
            visible: 'Contact__Visible',
            onOpen: 'Contact__onOpen',
            closer: '.Contact-Close'
        });
        toggleMenuIncon();
        window.onscroll = () => {
            let data = document.querySelector(".SlaiderContainer").getBoundingClientRect();

            menuIconFlowControl();
            if(data.top=-1){
            headerFlowControl();
            doBackground();
        }
             if(data.top>-1) {
                onLoadPathW();
                noBackground();
            }
         
        };
       
       // sliderHeight();
        sliderControl();
        menuIconFlowControl();
        
    }
});
//
 
// Functions that make SVG interactive

function sliderHeight() {
    let targetSlider = document.querySelectorAll('.StudentsWorkExamplesSlaider');
    Array.prototype.slice.call(targetSlider).forEach(element => {
        let height=element.querySelector('.StudentsWorkExamplesSlaider-WorkImage__Visible').clientHeight;
        element.style.height = `${height}` + 'px';
    });


//    let imgHeight = document.querySelector('.StudentsWorkExamplesSlaider-WorkImage__Visible').clientHeight;
//    document.querySelector('.StudentsWorkExamplesSlaider').style.height = `${imgHeight}` + 'px';
} ;



function sliderControl(){
    let targetSlider = document.querySelectorAll('.ImageContainer');
    Array.prototype.slice.call(targetSlider).forEach(element => {
        let backArrow = element.querySelector('.ImageContainer-ArrowBack');
        let nextArrow = element.querySelector('.ImageContainer-ArrowNext');
        let couter =0;
         nextArrow.onclick = () => {  
             couter += 20;
             element.style.marginLeft = `-${couter}vw`;    
            if (couter>=140){
            element.style.marginLeft="0vw";
             couter=0;
        }
            
            
           
           
    };
        backArrow.onclick = () => {
            console.log(couter);
            
            if ( couter==0) {
                element.style.marginLeft = "-120vw";
                couter=140;
            } 
            couter -= 20;
           
             
            element.style.marginLeft = `-${couter}vw`;
    };



});
};
function toggleSomething(obj) {

    document.querySelector(obj.target).onclick = () => {
        document.querySelector(obj.toogleTrgt).classList.toggle(obj.visible);
        document.querySelector(obj.toogleTrgt).classList.toggle(obj.onOpen);
      //  document.querySelector('.LocationInfo-MetroStreetIcon_SW').classList.toggle("LocationInfo-MetroStreetIcon_SW_Clicked");  


    };
    document.querySelector(obj.closer).onclick = () => {
        document.querySelector(obj.toogleTrgt).classList.toggle(obj.visible);
        document.querySelector(obj.toogleTrgt).classList.toggle(obj.onOpen);
        //  document.querySelector('.LocationInfo-MetroStreetIcon_SW').classList.toggle("LocationInfo-MetroStreetIcon_SW_Clicked");  


    };

};

function toggleMenuIncon() {
    document.querySelector('.HamburgerIcon').onclick = () => {
        document.querySelector('.HamburgerMenu').classList.toggle('HamburgerMenu_Visible');
     //   document.querySelector('.HamburgerIcon path').classList.toggle('hamburgerPath__White');
        document.querySelector('.MainPage').classList.toggle('MainPage__FlowControlDependencie');
        if (pageYOffset < 193) {
            document.querySelector('.HamburgerIcon').classList.toggle('HamburgerIcon__TogglePosition');

        }

    };
    if (pageYOffset >= 200) {
        document.querySelector('.HamburgerIcon').classList.toggle('HamburgerIcon__TogglePosition');
    };
};
function menuIconFlowControl() {
    let elem = document.querySelector(".SlaiderContainer");
    let coords = elem.getBoundingClientRect();

    if (pageYOffset >= pageYOffset + elem.clientHeight + coords.top - 80) {
        document.querySelector('.HamburgerIcon').classList.add('HamburgerIcon__TogglePosition');
    } else {
        document.querySelector('.HamburgerIcon').classList.remove('HamburgerIcon__TogglePosition');
    }

}
function headerFlowControl() {
    Array.prototype.slice.call(document.querySelectorAll(".VKButton-Path")).forEach(element => {
        element.classList.remove("VKButton-Path__White");
        element.classList.add("VKButton-Path__Black");
    });
    Array.prototype.slice.call(document.querySelectorAll(".InstButton-Path")).forEach(element => {
        element.classList.remove("InstButton-Path__White");
        element.classList.add("InstButton-Path__Black");
    });
    Array.prototype.slice.call(document.querySelectorAll(".ReverseCall-Path")).forEach(element => {
        element.classList.remove("ReverseCall-Path__White");
        element.classList.add("ReverseCall-Path__Black");
    });
    Array.prototype.slice.call(document.querySelectorAll(".Hamburger-Path")).forEach(element => {
        element.classList.remove("Hamburger-Path__White");
        element.classList.add("Hamburger-Path__Black");
    }); 

}
function onLoadPathW() {
    Array.prototype.slice.call(document.querySelectorAll(".VKButton-Path")).forEach(element=>{
        element.classList.remove("VKButton-Path__Black");
        element.classList.add("VKButton-Path__White");
  });
     Array.prototype.slice.call(document.querySelectorAll(".InstButton-Path")).forEach(element=>{
         element.classList.remove("InstButton-Path__Black");
        element.classList.add("InstButton-Path__White");
 });
     Array.prototype.slice.call(document.querySelectorAll(".ReverseCall-Path")).forEach(element=>{
         element.classList.remove("ReverseCall-Path__Black"); 
        element.classList.add("ReverseCall-Path__White");
    });
     Array.prototype.slice.call(document.querySelectorAll(".Hamburger-Path")).forEach(element=>{
         element.classList.remove("Hamburger-Path__Black"); 
         element.classList.add("Hamburger-Path__White");
    });
    
}
function doBackground() {
    document.querySelector(".BlockLogo-Name").classList.remove("BlockLogo-Name__NOBacknd");

 document.querySelector(".Header").classList.add("Header__OnScroll");  
 document.querySelector(".BlockLogo-Name").classList.add("BlockLogo-Name__Scroled"); 
}
function noBackground() {
    document.querySelector(".BlockLogo-Name").classList.remove("BlockLogo-Name__Scroled"); 
    document.querySelector(".BlockLogo-Name").classList.add("BlockLogo-Name__NOBacknd");
    document.querySelector(".Header").classList.remove("Header__OnScroll");
}