const popup =
    document.getElementById("popup");

const finalOption =
    document.getElementById("finalOption");

let optionUnlocked = false;





function wrongAnswer() {

    if (optionUnlocked) return;





    popup.classList.remove("hidden");





    setTimeout(() => {

        popup.classList.add("hidden");





        finalOption.classList
            .remove("hidden-option");





        finalOption.classList
            .add("show-option");





        optionUnlocked = true;

    }, 2200);
}





function correctAnswer() {

    window.location.href =
        "/birthday";
}