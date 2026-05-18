const yeahSound =
    document.getElementById("yeahSound");
    
const checkingText =
    document.getElementById("checkingText");

const checkingScreen =
    document.querySelector(".checking-screen");

const birthdayMessage =
    document.getElementById("birthdayMessage");





setTimeout(() => {

    checkingText.innerText =
        "OHH ITS REALLY YOU😭";

}, 1800);





setTimeout(() => {

    checkingScreen.style.display =
        "none";





    birthdayMessage.classList
        .remove("hidden");


    yeahSound.play();





    const duration = 5000;

    const end = Date.now() + duration;





    (function frame() {

        confetti({

            particleCount: 7,

            angle: 60,

            spread: 70,

            origin: { x: 0 }

        });





        confetti({

            particleCount: 7,

            angle: 120,

            spread: 70,

            origin: { x: 1 }

        });





        if (Date.now() < end) {

            requestAnimationFrame(frame);
        }

    })();

}, 3200);








const prankButton =
    document.getElementById("prankButton");

const hiddenImage =
    document.getElementById("hiddenImage");

const secondImage =
    document.getElementById("secondImage");

const finalMessage =
    document.getElementById("finalMessage");

let hoverCount = 0;





prankButton.addEventListener("mouseover", () => {

    hoverCount++;





    if (hoverCount <= 4) {

        const x =
            Math.random() * 300 - 150;

        const y =
            Math.random() * 300 - 150;





        prankButton.style.transform =
            `translate(${x}px, ${y}px)`;





        prankButton.innerText =
            "I said Do NOT Press 😭";
    }





    if (hoverCount === 5) {

        prankButton.style.transform =
            "translate(0px, 0px)";





        prankButton.innerText =
            "CHL THEEK HAI KRLE CLICK 😭";
    }

});









prankButton.addEventListener("click", () => {

    if (hoverCount >= 5) {

        hiddenImage.classList
            .remove("hidden");

        prankButton.style.display =
            "none";





        setTimeout(() => {

            secondImage.classList
                .remove("hidden");

        }, 1200);





        setTimeout(() => {

            finalMessage.classList
                .remove("hidden");

        }, 2500);
    }

});

