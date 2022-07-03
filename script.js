// Initialise time tracking variables
let seconds = 0;
let minutes = 0;
let hours = 0;

// Initialise querySelectors
const timer = document.querySelector(".time-section");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

// Function for stopwatch. This also updates the innerHTML on screen.
startBtn.addEventListener("click", function () {
  intervalID = setInterval(function () {
    seconds++;

    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }

    timer.innerHTML = `${hours < 10 ? "0" + hours : hours} : ${
      minutes < 10 ? "0" + minutes : minutes
    } : ${seconds < 10 ? "0" + seconds : seconds}`;
  }, 0);
});

// Allows user to pause the stopwatch
pauseBtn.addEventListener("click", function () {
  clearInterval(intervalID);
});

// Allows user to reset stopwatch
resetBtn.addEventListener("click", function () {
  clearInterval(intervalID);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.innerHTML = `00 : 00 : 00`;
});
