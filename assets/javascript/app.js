rightAnswers = 0;
wrongAnswers = 0;
unanswered = 0;

rightAnswers = ["364", "Austin", "Burj Khalifa"];

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            alert("All done")
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 80,
        display = document.querySelector('.time-rem');
        startTimer(fiveMinutes, display);
};