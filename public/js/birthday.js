const minuteTens =
    document.getElementById("minuteTens");

const minuteOnes =
    document.getElementById("minuteOnes");

const secondTens =
    document.getElementById("secondTens");

const secondOnes =
    document.getElementById("secondOnes");

const birthdayMessage =
    document.getElementById("birthdayMessage");





let totalSeconds = 3;





const timer = setInterval(() => {

    totalSeconds--;





    const minutes =
        Math.floor(totalSeconds / 60);

    const seconds =
        totalSeconds % 60;





    minuteTens.innerText =
        Math.floor(minutes / 10);

    minuteOnes.innerText =
        minutes % 10;

    secondTens.innerText =
        Math.floor(seconds / 10);

    secondOnes.innerText =
        seconds % 10;





    if (totalSeconds <= 0) {

        clearInterval(timer);





        document.querySelector(".countdown-card")
            .style.display = "none";





        birthdayMessage.classList
            .remove("hidden");





        const duration = 1000;

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
    }

}, 1000);









const prankButton =
    document.getElementById("prankButton");

const hiddenImage =
    document.getElementById("hiddenImage");

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

            finalMessage.classList
                .remove("hidden");

        }, 2000);
    }

});