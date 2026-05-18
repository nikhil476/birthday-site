function wrongAnswer() {

    const message =
        document.getElementById("message");

    message.innerText =
        "Koi Itna Galat Kese Ho Skta!!";

    message.classList.add("shake");

    setTimeout(() => {

        message.classList.remove("shake");

    }, 500);
}



function correctAnswer() {

    window.location.href = "/birthday";

}