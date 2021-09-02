import "./scss/masterClasses.scss"
import interactivity from "./js/pagesCommonModules/svg"
import './js/pagesCommonModules/formsAjaxOtherPages'
interactivity();
import { isInViewport, insertLoadersIntoBox } from "./js/loader/loaderV1.1";


insertLoadersIntoBox(isInViewport, document.querySelectorAll(".DescriptionBlock-LessonsImage"));