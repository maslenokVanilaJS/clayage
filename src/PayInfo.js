import "./scss/PayInfo.scss"
import interactivity from "./js/pagesCommonModules/svg"
interactivity();
import { isInViewport, insertLoadersIntoBox } from "./js/loader/loaderV1.1";
import './js/pagesCommonModules/formsAjaxOtherPages'


insertLoadersIntoBox(isInViewport, document.querySelectorAll(".DescriptionBlock-LessonsImage"));