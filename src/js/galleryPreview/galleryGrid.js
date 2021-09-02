 function getGridView(selectorGridView) {
     let GridViewElls = [];
     for (const Ells of selectorGridView) {
         GridViewElls.push(Ells);
     }
     return GridViewElls;
 }


 function getGridViewChilds(getParrentsF) {
     let GridViewChilds = [];

     getParrentsF(document.querySelectorAll(".HidenGalery_WhiteBackground .ImgContainer")).forEach(element => {
         GridViewChilds.push(element.querySelectorAll(".ImgContainer-ItemModule"));
     });
     return GridViewChilds;
 }

 function getChildsRect(getChildsF, getGridView) {
     let coords = [];
     for (const items of getChildsF(getGridView)) {
         items.forEach(element => {

             coords.push(element.getBoundingClientRect().bottom);


         });
     }
     return coords;
 }



 console.log(getChildsRect(getGridViewChilds, getGridView));






 /*   
get data from Arrow Gallery
 */

 function getArrowView(selectorArrowView) {
     let ArrowViewElls = [];
     for (const Ells of selectorArrowView) {
         ArrowViewElls.push(Ells);
     }
     return ArrowViewElls;
 }

 function getArrowViewChildsData(getParrentsF) {
     let ArrowViewChildsPrice = [];
     let ArrowViewChildsChoosen = [];

     getParrentsF(document.querySelectorAll(".HidenGalery_BlackBackground .ImgContainer .InfoBlock")).forEach(element => {
         ArrowViewChildsPrice.push(element.querySelectorAll(".InfoBlock-Price"));
         ArrowViewChildsChoosen.push(element.querySelectorAll(".InfoBlock-TextDescription .TextDescription-Choosen"));

     });
     return ArrowViewChildsPrice, ArrowViewChildsChoosen;

 }