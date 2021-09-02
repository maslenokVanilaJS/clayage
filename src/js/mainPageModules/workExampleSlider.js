//function sliderHeight(){
//    let imgHeight=document.querySelector('.StudentsWorkExamplesSlaider-WorkImage__Visible').clientHeight;    
//    document.querySelector('.StudentsWorkExamplesSlaider').style.height=`${imgHeight}`+'px';
//} 

//document.addEventListener('DOMContentLoaded', ()=>{
//    sliderHeight();
//})
let targets = [
    document.querySelector(".LocationInfo-MetroStreetIcon"),
    document.querySelector(".ReverseCall"),
    document.querySelector(".TAB__Lessons"),
    document.querySelector(".TAB__LessonsA"),
    document.querySelector(".TAB__GetC"),
    document.querySelector(".Tech"),


]


function LockScroll(targets) {
    for (const target of targets) {
        target.onclick = () => {
            document.querySelector("body").classList.toggle("body__Lock");
        };
    }
}
LockScroll(targets);