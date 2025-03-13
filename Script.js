document.addEventListener("DOMContentLoaded", function() {
    function startCountdown() {
        let deadline = new Date("2025-06-01T00:00:00").getTime();
        let countdownElement = document.getElementById("countdown");

        setInterval(function() {
            let now = new Date().getTime();
            let timeLeft = deadline - now;

            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

            if (timeLeft < 0) {
                clearInterval(timer);
                document.getElementById("countdown").innerHTML = "Presale Ended";
            }
        }, 1000);
    }

    startCountdown();
});
