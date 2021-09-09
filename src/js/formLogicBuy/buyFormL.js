function buyLogicF() {

    document.querySelector(".Select").addEventListener('change', () => {
        let option = document.querySelector(".Select").value;

        if (option == "Самовывоз ") {

            //   document.getElementById("tooggleIf ").classList.add("PurchaseForm-Field__NoDeliver");
            //   document.getElementById("if ").classList.add("PurchaseForm-if__NoDeliver");

            document.getElementById("tooggleIf ").remove();
            document.getElementById("if ").remove();

        }
        if (option == "Куриерская служба ") {
            // document.getElementById("tooggleIf ").classList.remove("PurchaseForm-Field__NoDeliver");
            //  document.getElementById("if ").classList.remove("PurchaseForm-if__NoDeliver");
            document.getElementById("after ").insertAdjacentHTML('afterend', `<span id="if " class="PurchaseForm-if "> Адресс доставки*</span>   <br> <input id = "tooggleIf " type = "text " name = "address " class = "PurchaseForm-Field " required > `)

        }
    });

}
buyLogicF();