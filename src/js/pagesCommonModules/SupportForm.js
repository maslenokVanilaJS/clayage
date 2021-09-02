function ajaxSupport() {
    let formBasic = document.querySelector(".Suport-Form");


    formBasic.addEventListener('submit', function(event) {
        event.preventDefault();

        let formData = new FormData(document.forms.Support);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/src/php/mail.php', true);
        xhr.send(formData);
        document.Support.reset();
        xhr.onload = () => {
            if (xhr.status == 200) {


                document.querySelector(".SuccesFormSend__BasicLesson").classList.add('SuccesFormSend_Visible');
                document.querySelector(".SuccesFormSend__BasicLesson").querySelector(".SuccesFormSend-Button").onclick = () => {
                    document.querySelector(".SuccesFormSend__BasicLesson").classList.remove('SuccesFormSend_Visible');
                    document.querySelector("body").classList.remove("body__Lock");

                };
            }
            if (xhr.status > 300 || xhr.status == 404) {
                document.querySelector(".Suport").classList.remove('Suport__Visible');
                document.querySelector("body").classList.remove("body__Lock");

                document.querySelector(".SuccesFormSend_OnFail").classList.add('SuccesFormSend_Visible');
                setTimeout(() => {
                    document.querySelector(".SuccesFormSend_OnFail").classList.remove("SuccesFormSend_Visible");

                }, 4000);
            };
        };
    });
};


ajaxSupport();