document.addEventListener('DOMContentLoaded', function () {
    const timeDisplay = document.getElementById('time-display');
    const workBtn = document.getElementById('work-btn');
    const shortBreakBtn = document.getElementById('short-break-btn');
    const longBreakBtn = document.getElementById('long-break-btn');

    let timer;
    let minutes = 0;
    let seconds = 0;

    function updateDisplay() {
        timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function startTimer(duration) {
        minutes = duration;
        seconds = 0;

        timer = setInterval(function () {
            if (minutes === 0 && seconds === 0) {
                clearInterval(timer);
                // Timer finished, you can add a notification or any other action here
            } else if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updateDisplay();
        }, 1000);
    }

    function resetTimer() {
        clearInterval(timer);
        minutes = 0;
        seconds = 0;
        updateDisplay();
    }

    workBtn.addEventListener('click', function () {
        resetTimer();
        startTimer(25);
    });

    shortBreakBtn.addEventListener('click', function () {
        resetTimer();
        startTimer(3);
    });

    longBreakBtn.addEventListener('click', function () {
        resetTimer();
        startTimer(8);
    });
});
