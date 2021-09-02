import "./scss/ClayAgeLifeHak.scss"
import interactivity from "./js/pagesCommonModules/svg"
interactivity();
import { isInViewport, insertLoadersIntoBox } from "./js/loader/loaderV1.1";
import './js/pagesCommonModules/formsAjaxOtherPages'


insertLoadersIntoBox(isInViewport, document.querySelectorAll(".ImageBox-Item"));

function scroll(TAB, TABlocK) {
    let btn = document.querySelector(TAB);
    let block = document.querySelector(TABlocK);
    btn.onclick = () => {
        block.scrollIntoView({ behavior: 'smooth' });
    };

}
scroll("#glina1Bind", "#glina1");
scroll("#glina2Bind", "#glina2");
scroll("#glina3Bind", "#glina3");
scroll("#glina4Bind", "#glina4");
scroll("#glina5Bind", "#glina5");
scroll("#glina6Bind", "#glina6");
scroll("#glina7Bind", "#glina7");
scroll("#glina8Bind", "#glina8");