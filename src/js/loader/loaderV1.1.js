   function insertLoadersIntoBox(viewportCheck, ...images) {
       for (let iterator of images) {
           iterator.forEach(element => {
               if (element.classList.contains("LoaderIgnore") == false) {


                   element.insertAdjacentHTML('beforebegin', `<div class="MasterPage-Loader Loader"></div>`);
                   if (element.getAttribute('data-src') != null) {
                       window.addEventListener('scroll', () => {
                           if (element.getAttribute('data-src') != null && viewportCheck(element) == true) {
                               element.setAttribute("src", element.getAttribute('data-src'));

                           };
                           element.addEventListener('load', () => {

                               // element.closest('.Loader').remove();
                               element.removeAttribute('data-src');
                               if (element.previousElementSibling != null && element.previousElementSibling.classList.contains("Loader") == true) {
                                   element.previousElementSibling.remove();
                               }
                           });
                       });
                   }


                   window.addEventListener('DOMContentLoaded', () => {
                       if (element.getAttribute('data-src') != null && viewportCheck(element) == true) {
                           element.setAttribute("src", element.getAttribute('data-src'));

                       };
                       element.addEventListener('load', () => {

                           // element.closest('.Loader').remove();
                           element.removeAttribute('data-src');

                           if (element.previousElementSibling != null && element.previousElementSibling.classList.contains("Loader") == true) {
                               element.previousElementSibling.remove();
                           }
                       });
                   });



               }
           });

       }
   }

   function isInViewport(element) {
       const rect = element.getBoundingClientRect();
       return (
           rect.top >= 0 &&
           rect.left >= 0 &&
           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
           rect.right <= (window.innerWidth || document.documentElement.clientWidth) //&&
           //s  element.offsetWidth > 0 && element.offsetHeight > 0
       );
   }
   export { isInViewport, insertLoaderGalleryBuy, insertLoadersIntoBox };

   function insertLoaderGalleryBuy(viewportCheck, ...images) {
       for (let iterator of images) {
           iterator.forEach(element => {
               if (element.getAttribute('data-src') != null) {
                   element.insertAdjacentHTML('beforebegin', `<div class="MasterPage-Loader Loader"></div>`);

               }


               if (element.getAttribute('data-src') != null) {
                   element.setAttribute("src", element.getAttribute('data-src'));

               };
               element.addEventListener('load', () => {

                   // element.closest('.Loader').remove();
                   element.removeAttribute('data-src');
                   if (element.previousElementSibling != null && element.previousElementSibling.classList.contains("Loader") == true) {
                       element.previousElementSibling.remove();
                   }
               });

           });







       };

   }