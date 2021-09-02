document.addEventListener('DOMContentLoaded', () => {


    if (isInternetExplorer() === false) {} else {
        document.querySelector(".BroswerSupport").className += " BroswerSupport__Unsupported";
        document.querySelector("body").className += " body__Lock";
    }
})

function isInternetExplorer() {
    return window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
}