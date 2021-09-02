function ajaxFormMasterclasses() {
    let formBasic = document.querySelector(".MasterClassSignUpForm__Basic");
    let formAdvanced = document.querySelector(".MasterClassSignUpForm__Advanced");
    if (formBasic != undefined) {


        formBasic.addEventListener('submit', function(event) {
            event.preventDefault();

            let formData = new FormData(document.forms.basicLesson);
            let xhr = new XMLHttpRequest();
            xhr.open('POST', '/src/php/mail.php', true);
            xhr.send(formData);
            document.basicLesson.reset();
            xhr.onload = () => {
                if (xhr.status == 200) {


                    document.querySelector(".SuccesFormSend__BasicLesson").classList.add('SuccesFormSend_Visible');
                    document.querySelector(".SuccesFormSend__BasicLesson").querySelector(".SuccesFormSend-Button").onclick = () => {
                        document.querySelector(".SuccesFormSend__BasicLesson").classList.remove('SuccesFormSend_Visible');

                    };
                }
                if (xhr.status > 300 || xhr.status == 404) {

                    document.querySelector(".SuccesFormSend_OnFail").classList.add('SuccesFormSend_Visible');
                    setTimeout(() => {
                        document.querySelector(".SuccesFormSend_OnFail").classList.remove("SuccesFormSend_Visible");

                    }, 4000);
                };
            };
        });
    };
    if (formAdvanced != undefined) {
        formAdvanced.addEventListener('submit', function(event) {
            event.preventDefault();

            let formData = new FormData(document.forms.Advanced);
            let xhr = new XMLHttpRequest();
            xhr.open('POST', '/src/php/mail.php', true);
            xhr.send(formData);
            document.Advanced.reset();
            xhr.onload = () => {
                if (xhr.status == 200) {

                    document.querySelector(".SuccesFormSend__AdvancedLesson").classList.add('SuccesFormSend_Visible');
                    document.querySelector(".SuccesFormSend__AdvancedLesson").querySelector(".SuccesFormSend-Button").onclick = () => {
                        document.querySelector(".SuccesFormSend__AdvancedLesson").classList.remove('SuccesFormSend_Visible');
                    };
                }
                if (xhr.status > 300 || xhr.status == 404) {

                    document.querySelector(".SuccesFormSend_OnFail").classList.add('SuccesFormSend_Visible');
                    setTimeout(() => {
                        document.querySelector(".SuccesFormSend_OnFail").classList.remove("SuccesFormSend_Visible");
                    }, 4000);
                };
            };
        });
    }
};
ajaxFormMasterclasses();