import './css/main.css'
import './scss/main.scss'
import './js/blockOldB/checkBroswer'

import './js/mainPageModules/positioning.js'
import 'web-animations-js'
import './js/DevBox/DevBox'

import './js/mainPageModules/workExampleSlider.js'
import './js/mainPageModules/mainPageInject.js'
import './js/mainPageModules/formControl.js'
import './js/mainPageModules/lazyLoader'
import './js/pagesCommonModules/fixBackgroundMR'
import './js/pagesCommonModules/SupportForm'
import { isInViewport, insertLoadersIntoBox } from "./js/loader/loaderV1.1";
document.addEventListener('DOMContentLoaded', () => {
    insertLoadersIntoBox(isInViewport, document.querySelectorAll(".SlaiderStudio-Image__Visible,.DescribeBlock-Img"));
    //   insertLoadersIntoBox(isInViewport, document.querySelectorAll(".DescribeBlock-Img"));

});


//getLenght('none',all);