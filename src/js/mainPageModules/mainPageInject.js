//This code inject mainpageSVG

document.addEventListener('DOMContentLoaded', function() {
    SVGInject(document.getElementsByClassName('LocationInfo-MetroStreetIcon_SW'));
    SVGInject(document.getElementsByClassName('HamburgerIcon'));
    SVGInject(document.getElementsByClassName('VKButton'));
    SVGInject(document.getElementsByClassName('InstButton'));
    SVGInject(document.getElementsByClassName('ReverseCall'));
    SVGInject(document.getElementsByClassName('Up'));



});
//

//This code run functions after SVG is injected

SVGInject.setOptions({
    afterInject: function(img, svg) {
        let targets = [
            document.querySelector(".LocationInfo-MetroStreetIcon"),
            document.querySelector(".ReverseCall"),
            document.querySelector(".TAB__Lessons"),
            document.querySelector(".TAB__LessonsA"),
            document.querySelector(".TAB__GetC"),
            document.querySelector(".Tech"),


        ];

        LockScroll(targets);

        onLoadPathW();
        toggleSomething({
            target: '.LocationInfo-MetroStreetIcon',
            toogleTrgt: '.YandexMap',
            visible: 'YandexMap_Visible',
            onOpen: 'YandexMap__onOpen',
            closer: '.YandexMap-Close'
        });
        toggleSomething({
            target: '.ReverseCall',
            toogleTrgt: '.Contact',
            visible: 'Contact__Visible',
            onOpen: 'Contact__onOpen',
            closer: '.Contact-Close'
        });
        toggleSomething({
            target: '.Tech',
            toogleTrgt: '.Suport',
            visible: 'Suport__Visible',
            onOpen: 'Suport__onOpen',
            closer: '.Suport-Close'
        });



        toggleMenuIncon();
        window.onscroll = () => {
            let data = document.querySelector(".SlaiderContainer").getBoundingClientRect();

            menuIconFlowControl();
            if (data.top = -1) {
                headerFlowControl();
                doBackground();
            }
            if (data.top > -1) {
                onLoadPathW();
                noBackground();
            }

        };

        // sliderHeight();
        menuIconFlowControl();
        scroll(".Up", "#header");

    }
});
//

// Functions that make SVG interactive
function LockScroll(targets) {
    for (const target of targets) {

        target.addEventListener('click', () => {
            if (document.querySelector("body").classList.contains("body__Lock") == false) {
                document.querySelector("body").classList.add("body__Lock");


            }


        });
    }
}

function sliderHeight() {
    let targetSlider = document.querySelectorAll('.StudentsWorkExamplesSlaider');
    Array.prototype.slice.call(targetSlider).forEach(element => {
        let height = element.querySelector('.StudentsWorkExamplesSlaider-WorkImage__Visible').clientHeight;
        element.style.height = `${height}` + 'px';
    });


    //    let imgHeight = document.querySelector('.StudentsWorkExamplesSlaider-WorkImage__Visible').clientHeight;
    //    document.querySelector('.StudentsWorkExamplesSlaider').style.height = `${imgHeight}` + 'px';
};

function scroll(TAB, TABlocK) {
    let btn = document.querySelector(TAB);
    let block = document.querySelector(TABlocK);
    btn.onclick = () => {
        block.scrollIntoView({ behavior: 'smooth' });
    };

}


function toggleSomething(obj) {

    document.querySelector(obj.target).onclick = () => {
        document.querySelector(obj.toogleTrgt).classList.add(obj.visible);
        document.querySelector(obj.toogleTrgt).classList.add(obj.onOpen);
        //  document.querySelector('.LocationInfo-MetroStreetIcon_SW').classList.toggle("LocationInfo-MetroStreetIcon_SW_Clicked");  


    };
    document.querySelector(obj.closer).onclick = () => {
        if (document.querySelector("body").classList.contains("body__Lock")) {
            document.querySelector("body").classList.remove("body__Lock");
        }
        document.querySelector(obj.toogleTrgt).classList.remove(obj.visible);
        document.querySelector(obj.toogleTrgt).classList.remove(obj.onOpen);
        //  document.querySelector('.LocationInfo-MetroStreetIcon_SW').classList.remove("LocationInfo-MetroStreetIcon_SW_Clicked");  


    };

};

function toggleMenuIncon() {
    let mainImageH = document.querySelector('.SlaiderContainer').clientHeight;
    document.querySelector('.HamburgerIcon').onclick = () => {
        document.querySelector('.HamburgerMenu').classList.toggle('HamburgerMenu_Visible');
        document.querySelector('.HamburgerIcon path').classList.toggle('hamburgerPath__White');
        document.querySelector('.MainPage').classList.toggle('MainPage__FlowControlDependencie');
        document.querySelector(".Header").classList.toggle('Header__ToggleMenuStyle');
        if (pageYOffset < mainImageH && document.querySelector(".HamburgerIcon").classList.contains("HamburgerIcon__TogglePosition")==false) {
            document.querySelector('.HamburgerIcon').classList.toggle('HamburgerIcon__TogglePosition');

        }

    };
    if (pageYOffset > mainImageH && document.querySelector(".HamburgerIcon").classList.contains("HamburgerIcon__TogglePosition")==false) {
        document.querySelector('.HamburgerIcon').classList.toggle('HamburgerIcon__TogglePosition');
        console.log("eden suka");
    };
};

function menuIconFlowControl() {
    let elem = document.querySelector(".SlaiderContainer");
    let coords = elem.getBoundingClientRect();
    let headerCHeight = document.querySelector(".Header").clientHeight;
    if (pageYOffset >= pageYOffset + elem.clientHeight + coords.top - headerCHeight) {
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
    Array.prototype.slice.call(document.querySelectorAll(".VKButton-Path")).forEach(element => {
        element.classList.remove("VKButton-Path__Black");
        element.classList.add("VKButton-Path__White");
    });
    Array.prototype.slice.call(document.querySelectorAll(".InstButton-Path")).forEach(element => {
        element.classList.remove("InstButton-Path__Black");
        element.classList.add("InstButton-Path__White");
    });
    Array.prototype.slice.call(document.querySelectorAll(".ReverseCall-Path")).forEach(element => {
        element.classList.remove("ReverseCall-Path__Black");
        element.classList.add("ReverseCall-Path__White");
    });
    Array.prototype.slice.call(document.querySelectorAll(".Hamburger-Path")).forEach(element => {
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