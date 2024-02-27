window.addEventListener("load", function (e) {
    // get values
    var loadingIcon = document.querySelector("#loader");
    var form = document.querySelector("form");

    form.addEventListener("submit", sendMessage);

    var resetSuccess = document.querySelector("#reset-success");
    resetSuccess.addEventListener("click", reset);

    var resetError = document.querySelector("#reset-error");
    resetError.addEventListener("click", reset);

    async function sendMessage(evt) {
        evt.preventDefault();

        // get values
        var email = document.querySelector("#email").value.trim();
        var subject = document.querySelector("#subject").value.trim();
        var message = document.querySelector("#message").value.trim();

        //get handles for hint messages
        var hint_email = document.querySelector("#hint-email");
        var hint_subject = document.querySelector("#hint-subject");
        var hint_message = document.querySelector("#hint-message");

        var fieldsOK = true;

        if (email.length < 5) {
            hint_email.style.display = "inline";
            fieldsOK = false;
        } else {
            hint_email.style.display = "none";
        }

        if (subject.length == 0) {
            hint_subject.style.display = "inline";
            fieldsOK = false;
        } else {
            hint_subject.style.display = "none";
        }

        if (message.length == 0) {
            hint_message.style.display = "inline";
            fieldsOK = false;
        } else {
            hint_message.style.display = "none";
        }

        if (fieldsOK) {
            // hide form and show loading icon
            form.style.display = "none";
            loadingIcon.style.display = "block";

            // prepare data for transport to server
            var data = new FormData();
            data.append("email", email);
            data.append("subject", subject);
            data.append("message", message);

            const target = document.querySelector("#target");
            const url = "https://mw159.brighton.domains/ci527/contact.php";

        
            console.log(fetch(url));
                

            // simulate delay when submitting the data to the server
            setTimeout(async function () {
                var success = Math.random() > 0.25;

                // hide loading icon when we receive the response
                loadingIcon.style.display = "none";

                // show success or error section depending on response
                if (success) {
                    document.querySelector("#success").style.display = "block";
                } else {
                    document.querySelector("#error").style.display = "block";
                }
            }, 2000);
        }
    }

    function reset(evt) {
        evt.preventDefault();
        document.querySelector("#success").style.display = "none";
        document.querySelector("#error").style.display = "none";
        loadingIcon.style.display = "none";
        form.style.display = "block";

        if (this.getAttribute("id") == "reset-success") {
            email.value = "";
            subject.value = "";
            message.value = "";
        }
    }
});
