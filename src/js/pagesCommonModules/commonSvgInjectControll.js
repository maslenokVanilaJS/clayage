//This code inject pagesCommonSVG

document.addEventListener('DOMContentLoaded', function () {

    SVGInject(document.getElementsByClassName('LocationInfo-MetroStreetIcon_SW'));
    SVGInject(document.getElementsByClassName('HamburgerIcon'));
    SVGInject(document.getElementsByClassName('VKButton'));
    SVGInject(document.getElementsByClassName('InstButton'));
    SVGInject(document.getElementsByClassName('ReverseCall'));

});
//

//This code run functions after SVG is injected

SVGInject.setOptions({
    afterInject: function (img, svg) {
        onLoadPathW();
        toggleMapIcon();
        toggleMenuIncon();
        window.onscroll=()=>{
        menuIconFlowControl();};
    }
});
//


// Functions that make SVG interactive

function toggleMapIcon(){
    
document.querySelector('.LocationInfo-MetroStreetIcon_SW').onclick=()=>{
    document.querySelector('.YandexMap').classList.toggle("YandexMap_Visible");
    document.querySelector('.LocationInfo-MetroStreetIcon_SW').classList.toggle("LocationInfo-MetroStreetIcon_SW_Clicked");  
    
    
} ;   
    
};

function toggleMenuIncon(){
    document.querySelector('.HamburgerIcon').onclick = () => {
        document.querySelector('.HamburgerMenu').classList.toggle('HamburgerMenu_Visible');
        document.querySelector('.HamburgerIcon path').classList.toggle('hamburgerPath__White');
        document.querySelector('.MainPage').classList.toggle('MainPage__FlowControlDependencie');
        if (pageYOffset < 193) {
            document.querySelector('.HamburgerIcon').classList.toggle('HamburgerIcon__TogglePosition');
           
        }
       
    };
    if (pageYOffset >= 200) {
        document.querySelector('.HamburgerIcon').classList.toggle('HamburgerIcon__TogglePosition');
    };
};
function menuIconFlowControl(){
    let elem = document.querySelector(".SlaiderContainer");
    let coords = elem.getBoundingClientRect();
  
    if(pageYOffset>=pageYOffset+elem.clientHeight+coords.top-80){
        document.querySelector('.HamburgerIcon').classList.add('HamburgerIcon__TogglePosition');
    }else{
        document.querySelector('.HamburgerIcon').classList.remove('HamburgerIcon__TogglePosition');
    }
    
}
function headerFlowControl() {
    document.querySelectorAll(".VKButton-Path").classList.add("VKButton-Path__Black");
    document.querySelectorAll(".InstButton-Path").classList.add("InstButton-Path__Black");
    document.querySelectorAll(".ReverseCall-Path").classList.add("ReverseCall-Path__Black");
    document.querySelectorAll(".Hamburger-Path").classList.add("Hamburger-Path__Black");

}
function onLoadPathW() {
    document.querySelector(".VKButton-Path").classList.add("VKButton-Path__White");
    document.querySelector(".InstButton-Path").classList.add("InstButton-Path__White");
    document.querySelector(".ReverseCall-Path").classList.add("ReverseCall-Path__White");
    document.querySelector(".Hamburger-Path").classList.add("Hamburger-Path__White");
    alert("rabotaet no net");
    console.log('loshara');
}
//

    

